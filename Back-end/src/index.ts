require('dotenv').config();
import "reflect-metadata";//typeorm 
import { json, urlencoded } from "body-parser";
import cors from 'cors';
import express from 'express';
import bodyParser from "body-parser";
import mainController from "./controllers";
import { createConnection } from 'typeorm';
import router from "./controllers/charactersController";
// Express init
const app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.use(json());
app.use(urlencoded({ extended: true }));
//app.use(cors());


//run script
//automateDB();

app.listen(process.env.PORT || 3000, async () => {
    console.log(`Server started, listening to port ${process.env.PORT}`);

    createConnection().then(async connection => {
        console.log(`connection synched`);
    }).catch(error => console.log(error));
});

express.Router();
router.post('/pingback', async (req: express.Request, res: express.Response) => {
    console.log("pingback");
    const data = req.query;
    const {Successful} = req.query;
    console.log(Successful);
    console.log(data)

    res.json({success:Successful});
})


app.use("/api/v1/", mainController);