/**
 * Created by Monisha on 2/9/2017.
 */
(function(){
    angular.module("WebAppMaker")
        .service("UserService",userService); //declates service UserService. userService is the constructor . UserService returns api

    function userService() {
        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
        ];
        //api is a json map of the CRUD operations


        this.findUserByCredentials=findUserByCredentials;
        this.findUserById=findUserById;
        this.updateUser=updateUser;
        this.createUser=createUser;

        this.deleteUser=deleteUser;
        this.findAllUsers=findAllUsers;
        this.findUserByUsername=findUserByUsername;


        var api = {
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "updateUser":updateUser,
            "createUser":createUser,
            "deleteUser":deleteUser,
            "findAllUsers":findAllUsers, ///For debugging- to check if createUser worked
            "findUserByUsername":findUserByUsername
        };
        return api;



        function findUserByCredentials(username, password) {
            for (var u in users) {
                if (users[u].username == username &&
                    users[u].password == password) {
                    return users[u];
                }
            }
            return null;
        }


        function findUserByUsername(username) {
            //var user=[]
            for (var u in users) {
                if (users[u].username == username) {
                    return users[u];
                }
            }
            return null;
        }
        function findUserById(uid) {
            for (var u in users) {
                var user=users[u]
                if (user._id == uid) {
                    return user;
                }
            }
            return null;
        }
        function createUser(user) {
            //website.developerId=userId;
            //website._id=(new Date()).getTime(); //dummy id
            users.push(user);
        }

        function updateUser(userId, newUser) {
            for (var u in users) {

                if (users[u]._id == userId) {
                    users[u].firstName =  newUser.firstName;
                    users[u].lastName =  newUser.lastName;
                    return users[u];
                }
            }
            return null;
        }

        function deleteUser(userId) {
            for (var u in users) {
                if (users[u]._id == userId) {
                    users.splice(u,1);
                }
            }}
        ///For debugging- to check if createUser worked
        function findAllUsers() {
            return users;
        }

    }
})();