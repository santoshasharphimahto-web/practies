"use strict";
class InMemory_DB {
    _db;
    constructor() {
        this._db = new Map();
    }
    //intesting the user in the db 
    insertUser(data) {
        if (this._db.has(data.id)) {
            throw new Error("user is all readya  Exits in the db ${data.id");
        }
        this._db.set(data.id, data);
        return data.id;
    }
    // updating a user 
    // public updateUser(d:USerid,data:Omit<Users,"id">):boolean{
    //      if(!this._db.has(data.id)){
    //        throw new Error("user doesn't exsts with this id in memoreydb")
    //      }
    //      this._db.set(id,{...data,id})
    //      return true
    // }
    getUserById(id) {
        if (!this._db.has(id)) {
            throw new Error("user doesn't exsts with this id in memoreydb");
        }
        return this._db.get(id);
    }
}
const db = new InMemory_DB();
db.insertUser({
    contact: {
        pincode: 843123,
        address: {
            country: "india ",
            state: "bihar",
            village: "ujariThikhan",
        }
    },
    email: "snatosh7667@gmai.com",
    id: "1",
    mobile: {
        indi: 7667196334
    },
    name: "santosh_kumar"
});
// db.updateUser("1",{
//     contact:{
//         pincode:843123,
//         address:{
//              country:"india ",
//               state:"bihar",
//               village:"ujariThikhan",
//         }
//     },
//     email:"snatosh7667@gmai.com",
//      mobile:{
//         indi:7667196334
//      },
//      name:"santosh_kumar"
// })
console.log(db.getUserById("1"));
