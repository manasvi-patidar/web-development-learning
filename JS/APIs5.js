const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = {headers: {Accept: "application/json" } };
        let res = await axios.get(url, config);
        console.log(res.data.joke);        //write getJokes() in console
    } catch (err) {
        console.log(err);
    }
}
