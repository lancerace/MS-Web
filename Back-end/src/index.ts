require('dotenv').config();
import "reflect-metadata";//typeorm 
import { json, urlencoded } from "body-parser";
import cors from 'cors';
import express from 'express';
import bodyParser from "body-parser";
import mainController from "./controllers";
import { createConnection } from 'typeorm';
// Express init
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

//run script
//automateDB();

app.listen(process.env.PORT || 3000, async () => {
    console.log(`Server started, listening to port ${process.env.PORT}`);

    createConnection().then(async connection => {
        console.log(`connection synched`);
    }).catch(error => console.log(error));
});



app.use("/api/v1/", mainController);