
import * as express from 'express';
import { Expression } from 'typescript';

const router: express.Router = express.Router();


router.get('/', (req: express.Request, res: express.Response) => {

  /* ` SELECT c.`level` , c.exp, c.name, c.accountid, a.banned AS banned 
FROM characters c LEFT JOIN accounts a ON c.accountid = a.id 
WHERE c.gm < 4 AND banned = 0 GROUP BY c.id ORDER BY c.`level` DESC, c.exp DESC ``*/


    return res.json({success:true});
})






export default router;