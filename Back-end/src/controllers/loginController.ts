
import * as express from 'express';
import bcrypt from 'bcrypt';
import bcryptutil from '../utility/bcrypt';
import { getConnection, getConnectionManager, getRepository } from 'typeorm';
import Account from '../entity/accounts';
const router: express.Router = express.Router();

//login
router.post('/login', async (req: express.Request, res: express.Response) => {
  //const saltRounds = 12;
  const { username, password } = req.body;
  const account = await getRepository(Account)
    .createQueryBuilder("accounts")
    .select(['accounts.id', 'accounts.name', 'accounts.lastlogin', 'accounts.nxCredit', 'accounts.password',
      'accounts.nxPrepaid', 'accounts.characterslots', 'accounts.rewardpoints', 'accounts.votepoints'])
    .where('accounts.name = :name', { name: username }).getOne();

  if (!account)
    return res.json({ success: false, account_exist: false });

  const does_pw_match = await bcrypt.compare(password, await bcryptutil.parse_hashedpw(account.password, true));

  delete account.password;

  if (does_pw_match)
    return res.json({ password_match: does_pw_match, account_exist: true, account });
  else
    return res.json({ password_match: does_pw_match, account_exist: true })
})


router.post('/register', async (req: express.Request, res: express.Response) => {

  const { username, password, email, birthday } = req.body;
  var salt = process.env.BCRYPT_SALT;
  var hashedpw = await bcrypt.hash(password, salt);
  hashedpw = await bcryptutil.parse_hashedpw(hashedpw, false); //compatible with ms java version

  try {
    const { raw } = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Account)
      .values({ name: username, password: hashedpw, email: email, birthday: birthday })
      .execute();

    res.json({ affectedRows: raw.affectedRows, id: raw.insertId })
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY')
      res.status(200).send({ affectedRows: 0, code: "ER_DUP_ENTRY" });
    else
      res.status(400).send({ affectedRows: 0, code: err.code });
  }


})



router.post('/decrypt',async (req: express.Request, res: express.Response) => {
  const {password} = req.body;
  console.log(password);
  var salt = process.env.BCRYPT_SALT;
  var data = null;
  var hashedpw = await bcrypt.hash(password, salt);
  hashedpw = await bcryptutil.parse_hashedpw(hashedpw, true);
  console.log(hashedpw);
  data= await bcrypt.compare(password,hashedpw);

  res.json(data);
})

export default router;