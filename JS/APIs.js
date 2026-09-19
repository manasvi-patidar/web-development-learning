let jsonRes = 
    '{"fact":"Cats can predict earthquakes. We humans are not 100% sure how they do it. There are several different theories.","length":111}';

    console.log(jsonRes);  //normal JSON data

let validRes = JSON.parse(jsonRes);

console.log(validRes);  //converted into JS object
console.log(validRes.fact);

let student = {  //JS object
    name: "manasvi",
    marks: 96,
};

console.log(JSON.stringify(student));  //converted into JSON data

