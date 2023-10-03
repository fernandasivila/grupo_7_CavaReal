const products = require("../data/products.json");

const controllerUser = {
    register: (req,res)=> {
        res.render("users/register");
    },
    login: (req,res)=> {
        res.render("users/login")
    },
    profile: (req, res) => {
        //const user = req.locals.userProfile;
        const discountUser = 20;
        // switch (req.body.membershipLevel) {
        //     case 'Platinum': discountUser = 25;
        //         break;
        //     case 'Gold': discountUser = 15;
        //     break;
        //     case 'Silver': discountUser = 10;
        //     break;
        //     case 'Bronze': discountUser = 5;
        //     break;
        //     default: discountUser=0;
        // }

        res.locals.discount=discountUser;

        const user = {
                id: 1,
                firstName: "Juan",
                lastName: "Pérez",
                userName: "Juan_P",
                email: "juan.perez@example.com",
                password: "contraseña123",
                category: "Cliente",
                image: "/users/foto-perfil.jpg",
                address: "Calle Principal 123",
                state: "Argentina",
                postalCode: "12345",
                phone: "+1234567890",
                birthday: "1990-05-15",
                subscripcion: "Activa",
                membershipLevel: "Platinum"
        }
        res.render('users/profile', { user });
    }

}

module.exports = controllerUser;