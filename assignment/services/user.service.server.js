 module.exports = function(app){
     app.get("/api/user",findUser);
     app.get("/api/user/:userId",findUserById);
     app.put("/api/user/:userId",updateUser);
     app.delete("/api/user/:userId",deleteUser);
     app.post("/api/user",createUser);

    var users = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder",email:"alice@gmail.com"},
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley",email:"alice@gmail.com"},
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia",email:"alice@gmail.com"},
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi",email:"alice@gmail.com"}
    ];

     function createUser(req,res){
         var newUser = req.body;
         newUser._id = (new Date()).getTime() + "";
         users.push(newUser);
         return res.json(newUser);
     }

    function findUser(req,res){

        var username= req.query.username;
        var password= req.query.password;
        if(username && password){
            findUserByCredentials(req,res);
        }
        else if(username){
            findUserByUsername(req,res);
        }
    }

    function findUserByUsername(req,res){

        var username=req.query['username'];
        var user= users.find(
            function(u){
                return u.username == username;
            });

        if(user){

            res.send(user);
        }
        else{
            console("hihi");
           res.sendStatus(404);
        }

    }



    function findUserByCredentials(req, res){
        var username= req.query.username;
        var password= req.query.password;
        var user= users.find(function(user){
            return user.password == password && user.username ==  username
        });
        res.send(user);
    }


    function findUserById(req, res){
        var userId=req.params.userId;
        var user=users.find(function (u) {
            return u._id == userId;
        });
        res.json(user); //If you know you are sending json use json function to send the object
    }

    function updateUser(req,res){
        var userId=req.params.userId;
        var newUser= req.body;
        for (var u in users) {

            if (users[u]._id == userId) {
                users[u].firstName = newUser.firstName;
                users[u].lastName = newUser.lastName;
                res.json(users[u]);
                return; //to stop at first match
            }
        }
        return null;

    }
     function deleteUser(req,res){
         var userId=req.params.userId;
         var newUser= req.body;
         for (var u in users) {

             if (users[u]._id == userId) {
                 users.splice(u,1);
                 res.sendStatus(200);
                 return; //to stop at first match
             }
         }
         return res.sendStatus(404); ///couldnt find user so couldnt splice

     }
 }

