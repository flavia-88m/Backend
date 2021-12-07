import express from "express";
import productsRoutes from "./routes/productos"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { dirname } from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.use("/api/productos", productsRoutes);

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.use(express.urlencoded(false));

app.listen(port, (err) => {
    if(err) {
        throw err;
    }
    console.log(`Server corriendo en puerto ${port}`)
})

