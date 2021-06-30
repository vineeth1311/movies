const express = require("express");
require("./db/conn");
const Mensranking = require("../src/models/mens");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/mens", async(req,res) => {
    try {
        const mensrecord = new Mensranking(req.body);
        console.log(req.body);
        const inser = await mensrecord.save();
        res.send(inser);

    }catch(e){
        res.send(e);

    }
})



app.listen(port, () => {
    console.log("listening");
})