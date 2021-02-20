import express from "express";
import charactersController from './charactersController';
import accountsController from './accountsController';
import loginController from './loginController';
const router: express.Router = express.Router();


router.use("/characters", charactersController);
router.use("/accounts", accountsController);
router.use("/auth", loginController);




export default router;