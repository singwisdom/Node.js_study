import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app =  express()

if(process.env.NODE_ENV == 'dev')
{
    app.get('/hello', (req,res)=> {
        res.json({r:'ok'})
    });
}


app.listen(process.env.PORT, () => {
    if(process.env.NODE_ENV =='dev'){
        console.log(`server started at : ${process.env.PORT}`);
    }
})