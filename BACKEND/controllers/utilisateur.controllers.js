const { v4: uuidv4 } = require ("uuid");
const { ACCESS_TOKEN_SECRET }  = require ("../config.js");

const jwt = require('jsonwebtoken');
const {all} = require("express/lib/application");

const allowedUsers = [
    {
        nom: "martin",
        prenom: "jean",
        login: "emma",
        email : "martin.jean@gmail.com",
        password : "toto",
    }
]

function isUserValid(user)
{
    for (const u of allowedUsers) {
        if (u.login === user.login && u.password === user.password) {
            return true;
        }
    }
    return false;
}

function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '365d' });
}

// Find a single Utilisateur with an login
exports.login = (req, res) => {
    const utilisateur = {
        login: req.body.login,
        password: req.body.password
    };

    // Test
    let pattern = /^[A-Za-z0-9]{1,20}$/;
    if (pattern.test(utilisateur.login) && pattern.test(utilisateur.password)) {

        const uuid = uuidv4 ();
        if(isUserValid(utilisateur))
        {
            utilisateur.nom = "martin";
            utilisateur.prenom= "jean";
            utilisateur.email = "martin.jean@gmail.com";
            utilisateur.id= uuid;

            const user = {
                id: utilisateur.id,
                name: utilisateur.nom,
                email: utilisateur.email
            };


            let accessToken = generateAccessToken(user);
            res.setHeader('Authorization', `Bearer ${accessToken}`);

            console.log (accessToken);


            res.send(utilisateur);
        }
        else
        {
        }
    }
};


