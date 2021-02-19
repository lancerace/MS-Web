import express from "express";
import charactersController from './charactersController';
const router: express.Router = express.Router();


router.use("/characters", charactersController);




export default router;