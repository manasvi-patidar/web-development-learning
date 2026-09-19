//Mongoose:
//type mongosh in cmd prompt
//show dbs;
//show collections;
//db.users.find();
//to clear the cmd, type cls;
//to exit the cmd, type exit or quit

//In terminal: node index.js

const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

//Insert document 1
/*const user1 = new User({
    name: "Adam",
    email: "adam@yahoo.in",
    age: 48,
});

user1.save();*/

//Insert document 2
/*const user2 = new User({
    name: "Bob",
    email: "bob@google.com",
    age: 36,
});

user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });*/

//Insert Many
/*User.insertMany([
    {name: "Tony", email: "tony@gmail.com", age: 50},
    {name: "Bruce", email: "bruce@gmail.com", age: 34},
    {name: "Peter", email: "peter@gmail.com", age: 46},
]).then((res) => {
    console.log(res);
});*/

//find
/*User.find({ age: { $gt: 47 } })  //age > 47
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });*/

/*User.findById("6a255ecdea23fcbbcc842ee8")  //Tony
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });*/

//Update
/*User.updateOne({ name: "Bruce"}, { age: 54})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });*/

//find one and update
/*User.findOneAndUpdate({ name: "Bruce" }, { age: 39 }, { returnDocument: 'after' })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });*/

//Delete
/*User.deleteOne({ name: "Peter" }).then((res) => {
    console.log(res);
});*/

User.findByIdAndDelete("6a255b0c1b72ec963170a5b4").then((res) => {  //delete adam
  console.log(res);
});

