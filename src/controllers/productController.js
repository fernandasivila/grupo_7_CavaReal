let products = require('../data/products.json');
const fs = require('fs');
const { dirname } = require('path');

const path = require('path');

const productController = {
    detalle: (req,res)=> {
        const { id } =req.params;

        const product = products.find(p =>p.id == id)
        res.render("productDetail",{product});
    },
    add: (req,res)=> {
        res.render("productAdd");
    },

    process:(req,res)=>{
        
        
        //sirve
        const product= req.body;
        const { id } =req.params;
        // products = products.filter((p)=> p.id !== id);
        // products.push(product)
        console.log("Este es el id " + id);

        // probando 

        

        for(let i = 0; i < products.length; i++){
            if(products[i].name == product.name){
                products[i].name = product.name
                products[i].vinedo = product.vinedo;
                products[i].edad = +product.edad;
                products[i].variedad = product.variedad
                products[i].altitud = product.altitud;
                products[i].barriles = +product.barriles;
                products[i].guardado = +product.guardado;
                products[i].priceUnity = +product.priceUnity; 
                products[i].priceSix = +product.priceUnity*6;
                products[i].afrutado = +product.afrutado
                products[i].nada = +product.nada
                products[i].seco = +product.seco
                products[i].amable = +product.amable
                products[i].aterciopelado = +product.aterciopelado
                products[i].liviano = +product.liviano
                products[i].delicado = +product.delicado
                // products[i].img = (product.img != null ? req.file.filename : products[i].img)
                products[i].img = req.file.filename
                // products[i].img = product.img != products[i].img ? req.file.filename : product[i].img
                products[i].category = product.category
                console.log("Elemento encontrado");
                console.log( products[i].img );
            }
        }

        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products));

        res.redirect(`/`);
    },
    edit: (req, res) => {
        const { id } =req.params;

        const product = products.find(p =>p.id == id)
        res.render("productEdit",{product})
    },
    deleteProduct:(req,res)=>{
        const idProduct= +req.params.id;

        products = products.filter((p)=> p.id !== idProduct);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products));

        res.redirect('/home');
    },
    productAdd: (req,res) => {
        // const id = products.length + 1;
        const product = req.body;
        product.id = Date.now();
        product.img= req.file.filename;
        product.edad = +product.edad;
        product.altitud = product.altitud;
        product.guardado = +product.guardado;
        product.potencial = +product.potencial;
        product.priceUnity = +product.priceUnity; 
        product.priceSix = +product.priceUnity*6;
        products.push(product);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products));

        res.redirect('/home');
    },

}

module.exports = productController;