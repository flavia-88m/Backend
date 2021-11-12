import express from "express";
import Contenedor from "../class/Contenedor";


const app = express();
const port = process.env.PORT || 8080;
const contenedor = new Contenedor("./data/productos.txt");

app.get("/productos", async (req,res) => {
    const productos =  await contenedor.getAll()
    res.send(productos);
})

const randomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


app.get("/productosRandom", async (req,res) => {
    const arr = await contenedor.getAll();
    const largoDelArray = Array.from(arr)
        res.send(await contenedor.getById(randomNumber(1, largoDelArray.length + 1)))
})


app.listen(port, () => {
console.log("server run on port" + port);
})

