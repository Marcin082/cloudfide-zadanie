import "reflect-metadata"
import express, {type Application} from "express";
import './container'
import router from "./routes/routes";
const app: Application = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/analysis",router)
app.listen(3001,()=>{
    console.log("App is listening on port 3001")
})

