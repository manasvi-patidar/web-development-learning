//Creating Object Literals
const student = {
    name: "Manasvi",
    age: 22,
    marks: 96.2
};

const item = {
    price: 100,
    discount: 20,
    colors: ["red", "pink"]
};

//Creating a Post
const post = {
    username: "@manasvipatidar",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
};

//Conversion in Get Values
const obj = {
    1: "a",
    2: "b",
    true: "c",  //JS is considering true, null, undefined as a string here and not as a keyword!
    null: "d",
    undefined: "e"
};

//Add/Update Value
const student2 = {
    name: "Vandan",
    age: 15,
    marks: 97,
    city: "Delhi"
};

//Object of Objects(Nested Objects)
const classInfo = {
    vandan: {
        grade: "A+",
        city: "Delhi"
    },
    Manasvi: {
        grade: "A",
        city: "Indore"
    },
    abhishek: {
        grade: "B",
        city: "Mumbai"
    }
};

//Array of Objects
const classInfo2 = [
    {
        name: "vandan",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "manasvi",
        grade: "A",
        city: "Indore"
    },
    {
        name: "sandhya",
        grade: "B",
        city: "Mumbai"
    }
];

