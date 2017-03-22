module.exports = function () {

    var model={};
    var mongoose = require("mongoose");
    var userSchema = require("./user.schema.server.js")();
    var userModel = mongoose.model("userModel"  ,userSchema);
    var api = {
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "updateUser": updateUser,
            "findUserByUsername": findUserByUsername,
            "createUser": createUser,
            "deleteUser": deleteUser,
            "setModel":setModel
        };
        return api;

        function findUserByUsername(username) {
            console.log("in user model find by username");
            return userModel.findOne({username:username},
                function(err, result){
                if(err){
                }
                if(result){
                return result;
            }
        else{
                return err;}
                });}

        function updateUser(userId, newUser) {
            console.log("in user model update");
            return userModel.update(
                {
                    _id : userId
                },
                {
                    firstName : newUser.firstName,
                    lastName : newUser.lastName
                }
            )
        }
        function findUserById(userId) {
            console.log("in user model find by id");
            return userModel.findById(userId);
        }
        function findUserByCredentials(username, password) {
            console.log("in user model find by creds");
            return userModel.findOne({
                username : username,
                password : username
            },
                function(err,result){
                if(err){

                }
                if(result){
                   return result;

                }
                else{
                    return err;}
                }

            );
        }
        function createUser(user) {
            console.log("in user model create");
            return userModel.create(user);
        }

        function deleteUser(userId) {
            console.log("in user model delete");
            return userModel.remove(
                {
                _id : userId
            })
        }

};
function setModel(_model) {
    model=_model;
}