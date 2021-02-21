
import * as express from 'express';
import { getManager } from 'typeorm';
const router: express.Router = express.Router();


router.get('/online', async (req: express.Request, res: express.Response) => {

const result = await getManager().query(`SELECT COUNT(*) as account_online FROM accounts where loggedin = 2`);

  return res.json(result);
})

router.get('/count', async (req: express.Request, res: express.Response) => {

  const result = await getManager().query(`SELECT COUNT(*) AS count FROM accounts`);
  console.log(result);
    return res.json(result[0]);
  })


export default router;