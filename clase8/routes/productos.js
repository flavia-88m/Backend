import express, { response, text } from "express";
import Contenedor from "../class/Contenedor";
import { Router } from "express";


const router = new Router();
const contenedor = new Contenedor("./data/productos.txt");

router.get("/", async (req,res) => {
    const productos =  await contenedor.getAll()
    res.send(productos);
})

router.get("/:id", async (req,res) => {
    let itemId = parseInt(req.params.id);

    if((await contenedor.getById(itemId)) === null);
       return res.json({ERROR: "No se encontro el producto"})

       res.json(await contenedor.getById(itemId));
});

router.post("/", async (req,res)=> {
    let newItem = {
        ...req.body,
        price: parseFloat(req.body.price),
        thumbnail:"https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8Mjg3NjA4fGltYWdlL3BuZ3xoYWEvaDBkLzExMTQxMjcyMDQzNTUwLnBuZ3wwYzk1N2E3YjUwZTRiZGY5NWI0YjVhMjgyYTk1OTA2ZGM4MzI2YWZkNmQwYWIzOGZkY2JhOTBjYmM0NTZiNGE1"   
    }
    newItem.id = await contenedor.save(newItem)
    res.json(newItem)
});

router.put("/:id", async(req,res)=> {
    const itemId = parseInt(req.params.id)
 let propEdited = {
 ...req.body,
};
 const response = await contenedor.listById(itemId,propEdited)

 if (response === null)
  return res.json({error: "No se encontró el producto"})
  res.send(response);

})



router.delete("/:id", (req,res) =>{
    const itemId = parseInt(req.params.id)
    contenedor.deleteById(itemId)
    res.json({mensaje: `El item con el id ${itemId} fue eliminado`})
})

export default router;
