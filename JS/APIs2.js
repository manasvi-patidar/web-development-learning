let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    console.log(res);

    //console.log(res.json());  //makes the data readable

    /*res.json().then((data) => {  //for accessing proper json data
        console.log(data);
    });*/

    return res.json();  //refactoring it more
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR - ", err);
  });
