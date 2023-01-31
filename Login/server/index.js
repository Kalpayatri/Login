const express=require('express')
const app=express()
const router=require('./config/routes')
const configureDB=require('./config/database')
const port=3055

configureDB()
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log('server running on port',port)
})