import express,{json,urlencoded} from 'express'

const app = express()

app.use(json())
app.listen(3000,()=>{
    console.log('Server listening on Port 3000')
})