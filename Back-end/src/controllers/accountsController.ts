
import * as express from 'express';
import { getConnection, getManager } from 'typeorm';
import Account from '../entity/accounts';
const router: express.Router = express.Router();


router.get('/online', async (req: express.Request, res: express.Response) => {

  const result = await getManager().query(`SELECT COUNT(*) as account_online FROM accounts where loggedin = 2`);

  return res.json(result[0]);
})

router.get('/count', async (req: express.Request, res: express.Response) => {

  const result = await getManager().query(`SELECT COUNT(*) AS count FROM accounts`);
  console.log(result);
  return res.json(result[0]);
})


router.post('/vote', async (req: express.Request, res: express.Response) => {
  const { id } = req.body();

  await getConnection()
    .createQueryBuilder()
    .update(Account)
    .set({ nxCredit: () => `nxCredits+${process.env.VOTE_NX}`, votepoints: () => `votepoints+${1}` })
    .where("id = :id", { id: id })
    .execute();

});


export default router;