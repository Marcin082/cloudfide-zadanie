import express, {type Application} from "express";
import * as pino from 'pino';
const app: Application = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(3000,()=>{
    console.log("App is listening on port 3000")
})