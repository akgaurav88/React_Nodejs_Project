const app=require('./app')

const port=8000;
const server=app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})
