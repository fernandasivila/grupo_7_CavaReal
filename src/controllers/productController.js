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

        const idProduct= +req.params.id;

        products.forEach(e => {
            if(e.id == idProduct) {
                e.id= req.body.id,
                e.name= req.body.name,
                e.descripcion= req.body.descripcion,
                e.viñedo= req.body.viñedo,
                e.edad= req.body.edad,
                e.altitud= req.body.altitud,
                e.variedad= req.body.variedad,
                e.barriles= req.body.barriles,
                e.guardado = req.body.guardado,
                e.priceUnity= req.body.priceUnity,
                e.priceSix= req.body.priceSix,
                e.afrutado= req.body.afrutado,
                e.nada= req.body.nada,
                e.seco= req.body.seco,
                e.amable= req.body.amable,
                e.aterciopelado= req.body.aterciopelado,
                e.liviano= req.body.liviano,
                e.delicado=req.body.delicado,
                e.img=req.body.img 
            }
        });
        console.log(products);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products));

        res.redirect('/home');
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

        const product = req.body;
        product.id = Date.now();
        product.img= req.file.filename;
        product.edad = +product.edad;
        product.altitud = +product.altitud;
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


/*const editedProduct={
    id: req.body.id,
    name: req.body.name,
    descripcion: req.body.descripcion,
    viñedo: req.body.viñedo,
    edad: req.body.edad,
    altitud: req.body.altitud,
    variedad: req.body.variedad,
    barriles:req.body.barriles,
    guardado:req.body.guardado,
    priceUnity:req.body.priceUnity,
    priceSix:req.body.priceSix,
    afrutado:req.body.afrutado,
    nada:req.body.nada,
    seco:req.body.seco,
    amable:req.body.amable,
    aterciopelado:req.body.aterciopelado,
    liviano:req.body.liviano,
    delicado:req.body.delicado,
    img:req.body.img,


    res.redirect('/product/detail/:idProduct');
}*/