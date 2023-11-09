class User{
userId:number;
userName:string;

constructor(userId:number, userName:string){
    this.userId = userId;
    this.userName = userName;
    }
}
let user1 = new User(1, 'Mageswaran');
let user2 = new User(2, 'Ramasamy');
console.log("userid :: " + user1.userId);
console.log("username :: " + user1.userName);

console.log("userid :: " + user2.userId);
console.log("username :: " + user2.userName);