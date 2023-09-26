import express from 'express'

const app  = express();
const PORT = 3000;

app.use(express.json());

app.get("/ping", (_req, res)=>{
    console.log("someone pinged over here" + " " + new Date().toLocaleDateString())
    res.send("Pong")
})

app.listen(PORT, ()=>{
  console.log(`server is running in port ${PORT}`);
  
});
