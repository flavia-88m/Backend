import express from "express";
import Contenedor from "../class/Contenedor";


const app = express();
const port = process.env.PORT || 8080;
const contenedor = new Contenedor();


app.get("/productos", (req,res) => {
        res.send(contenedor.getAll());
})



app.listen(port, () => {
console.log("server run on port" + port);
})

