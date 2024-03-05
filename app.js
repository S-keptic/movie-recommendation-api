import express from 'express'
import movie from './routes/movie.js'
const app =express()
const port = 3000;

app.use(express.json())
app.use('/',movie)

app.listen(port,()=>{ 
    console.log("server up")
})
