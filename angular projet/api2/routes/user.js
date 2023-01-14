let User = require('../model/user');

// Récupérer tous les assignments (GET)
function getUsers(req, res){
    User.find((err, user) => {
        if(err){
            res.send(err)
        }

        res.send(user);
    });
}

// Récupérer un assignment par son id (GET)
function getUser(req, res){
    let userId = req.params.id;

    User.findOne({id: userId}, (err, user) =>{
        if(err){res.send(err)}
        res.json(user);
    })
}

// Ajout d'un assignment (POST)
function postUser(req, res){
    let user = new User();
    user.mail = req.body.mail;
    user.motDePasse = req.body.motDePasse;
   



    console.log("POST user reçu :");
    console.log(user)

    user.save( (err) => {
        if(err){
            res.send('cant post user ', err);
        }
        res.json({ message: `${user.nom} saved!`})
    })
}

// Update d'un assignment (PUT)
function updateUser(req, res) {
    console.log("UPDATE recu assignment : ");
    console.log(req.body);
    User.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, assignment) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }

      // console.log('updated ', assignment)
    });

}





module.exports = { getUsers, postUser, getUser, updateUser };
