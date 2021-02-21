
import * as express from 'express';
import { getManager } from 'typeorm';
const router: express.Router = express.Router();


router.get('/', async(req: express.Request, res: express.Response) => {
  console.log("root");
  const result = await getManager().query(`SELECT c.level , c.exp, c.name, c.accountid, a.banned AS banned  
   FROM characters c LEFT JOIN accounts a ON c.accountid = a.id 
   WHERE c.gm < 4 AND banned = 0 GROUP BY c.id ORDER BY c.level DESC, c.exp DESC limit 100`);

  return res.json(result);
})

router.get('/name/:name', async (req: express.Request, res: express.Response) => {
  const { name } = req.params;
  console.log(name);

  const result = await getManager().query(`SELECT c.level , c.exp, c.name, c.accountid, a.banned AS banned  
   FROM characters c LEFT JOIN accounts a ON c.accountid = a.id 
   WHERE c.gm < 4 AND banned = 0 AND c.name like '%${name}%' GROUP BY c.id ORDER BY c.level DESC, c.exp DESC`);

  return res.json(result);
})


router.get('/id/:jobId', async (req: express.Request, res: express.Response) => {
  const { jobId } = req.params;

  const result = await getManager().query(`SELECT c.level , c.exp, c.name, c.accountid, a.banned AS banned  
  FROM characters c LEFT JOIN accounts a ON c.accountid = a.id 
  WHERE c.gm < 4 AND banned = 0 AND c.job =${jobId} GROUP BY c.id ORDER BY c.level DESC, c.exp DESC`);

  return res.json(result);

})

router.get('/count', async (req: express.Request, res: express.Response) => {

  const result = await getManager().query(`SELECT COUNT(*) AS count FROM accounts`);

    return res.json(result[0]);
})

export default router;