//Initialize database
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/QuickChat");
};

let allChats = [
  {
    from: "casey",
    to: "farah",
    message: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "eve",
    to: "bob",
    message: "teach me JS callbacks",
    created_at: new Date(),
  },
  {
    from: "Catlyn",
    to: "Adam",
    message: "All the best for your exams!",
    created_at: new Date(),
  },
  {
    from: "donald",
    to: "Harry",
    message: "Hey!I need your car urgently.",
    created_at: new Date(),
  },
  {
    from: "Kendell",
    to: "Gigi",
    message: "Bring me some fruits",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);

//In terminal: node init.js