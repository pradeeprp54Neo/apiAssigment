import express from 'express'
import { connectDB } from './config/db.js';
import router from './routes/employeeRoutes.js'
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/user',router)
connectDB();

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Work on ${PORT}`)
})