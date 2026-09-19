//In terminal: node books.js

//In cmd prompt:
//show dbs
//use amazon
//show collections
//db.books.find()

const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

//Schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  //not null
        maxLength: 20
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"], //custom error can also be defined
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

/*let book1 = new Book({
  title: "Psychology of Money",
  author: "Morgan Housel",
  price: 550,
  category: "non-fiction",
  genre: ['Behavioral Finance'],
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });*/

//Update : schema rules are not followed in updation until we set runValidators: true
Book.findByIdAndUpdate("6a2654361e6f761416b586eb", { price: 560 }, { runValidators: true })
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(err);  //(err.errors.price.properties.message);
  });

