
import * as express from 'express';
import { Expression } from 'typescript';

const router: express.Router = express.Router();


router.get('/', (req: express.Request, res: express.Response) => {




    return res.json({success:true});
})






export default router;