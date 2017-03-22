(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", userService);

    function userService($http) {
        var api = {
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "updateUser": updateUser,
            "findUserByUsername": findUserByUsername,
            //TODO: complete the CRUD functions
            "createUser": createUser,
            "deleteUser": deleteUser
        };
        return api;

        function findUserByUsername(username) {
            return $http.get("/api/user?username="+username);
        }
        function updateUser(userId, newUser) {
            return $http.put("/api/user/"+userId, newUser);
        }
        function findUserById(userId) {
            console.log("find user by id client server");
            return $http.get("/api/user/"+userId);
        }
        function findUserByCredentials(username, password) {
            console.log("client servicce");
            return $http.get("/api/user?username="+username+"&password="+password);
        }
        function createUser(user) {
            return $http.post("/api/user",user);
        }
        function deleteUser(userId) {
            return $http.delete('/api/user/' + userId);
        }
    }
})();
