var User = /** @class */ (function () {
    function User(userId, userName) {
        this.userId = userId;
        this.userName = userName;
    }
    return User;
}());
var user1 = new User(1, 'Mageswaran');
var user2 = new User(2, 'Ramasamy');
console.log("userid :: " + user1.userId);
console.log("username :: " + user1.userName);
console.log("userid :: " + user2.userId);
console.log("username :: " + user2.userName);
