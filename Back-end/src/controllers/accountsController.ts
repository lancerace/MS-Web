
import * as express from 'express';
import { getConnection, getManager } from 'typeorm';
import Account from '../entity/accounts';
const router: express.Router = express.Router();


router.get('/online', async (req: express.Request, res: express.Response) => {

  const result = await getManager().query(`SELECT COUNT(*) as account_online FROM accounts where loggedin = 2 AND webadmin != 1`);

  return res.json(result[0]);
})

router.get('/count', async (req: express.Request, res: express.Response) => {

  const result = await getManager().query(`SELECT COUNT(*) AS count FROM accounts`);
  console.log(result);
  return res.json(result[0]);
})

//gTop reference: https://gtop100.com/test/pingback
router.post('/pingback', async (req: express.Request, res: express.Response) => {

  const { Successful, Reason, pingUsername } = req.query; //pingUsername = account.id

  if (Successful == 1)// 1 =error
    return res.json({ success: false, reason: Reason });

  const { affected } = await getConnection()
    .createQueryBuilder()
    .update(Account)
    .set({ nxCredit: () => `nxCredit+${process.env.VOTE_NX}`, votepoints: () => `votepoints+${1}` })
    .where("id = :id", { id: pingUsername })
    .execute();

  if (affected && affected > 0)
    res.json({ rowAffected: affected, success: true });
  else
    res.status(400).send({ success: false, reason: "something wrong.vote unsuccessful" });
//dont need all respond actually, gtop100 will show reason message
})

export default router;