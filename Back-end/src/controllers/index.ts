import express from "express";
import charactersController from './charactersController';
import accountsController from './accountsController';
const router: express.Router = express.Router();


router.use("/characters", charactersController);
router.use("/accounts", accountsController);





export default router;