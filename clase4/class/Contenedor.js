import fs from "fs";

export default class Contenedor {
    constructor(file) {
      this.file = this.file;
      this.list = async () => {
        try {
          const result = await fs.promises.readFile(this.file, {encoding:"utf-8"})
          return JSON.parse(result)
        } catch (err) {
          return err
        }
      }
    }
  
   async save(obj){
     let getList = await this.promises.list();
     //agregar el id a obj y guardar en list de productos 
     getList.push(obj)
     // se obtiene el último id
     let idObj = getList[ getList.length - 2]
     //si idObj existe suma el id sino agrega el primer id como 1 al obj
     idObj ? obj.id = idObj.id + 1 : obj.id = 1
     
     try {
        await fs.promises.writeFile(this.file, JSON.stringify(getList, null, 2), {encoding: "utf-8"})
        return true
     } 
     catch(err) {
       throw err
     }
    }

    async getById(num) {
      try{
        const result = await fs.promises.readFile(this.file, {encoding:"utf-8"})

        const products = JSON.parse(result)
        //Encuentra el id del producto
        let getProduct = products.find(p => p.id === num)
        return getProduct
      } catch (err) {
        throw err
      }
    }

    async getAll(){
      let products = "array de objetos"
      try{
        const result = await fs.promises.readFile(this.file, {encoding:"utf-8"})

        products = JSON.parse(result)
        return products
      } catch (err) {
        throw err
      }
    }
    
 async deleteById(number){
  try {
    const result = await fs.promises.readFile(this.file, {encoding:"utf-8"})
    const products = JSON.parse(result)
    const filteredList = products.filter(p => p.id !== number)

  await fs.promises.writeFile(this.file, JSON.stringify(filteredList,null,2), {encoding:"utf-8"})
  return true
  } catch(err) {
    throw err
  }
 }

 async listById(number, product){
   try{
     const res = await fs.promises.readFile(this.file, {encoding:"utf-8"})
     const products = JSON.parse(res)
     const i = products.findIndex(p => p.id === number)
     product.id = number
     products[i] = product
     await fs.promises.writeFile(this.file, JSON.stringify(products,null,2) , {encoding:"utf-8"})
   return true
    } catch(err) {

    }
 }
    async deleteAll(){
      try{
        await fs.promises.writeFile(this.file, JSON.stringify([], null,2 ), {encoding:"utf-8"})
      return true 
      }catch (err) {
        throw err
      } 
      }
  
}








  