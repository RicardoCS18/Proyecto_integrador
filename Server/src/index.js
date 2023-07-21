const http = require("http")
const data = require("../src/utils/data");
http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        if (req.url.includes("/rickandmorty/character")) {
            let id = req.url.split("/").at(-1);
            let character = data.find((el)=> el.id === Number(id))
            if (character) {
                return res
                        .writeHead(200, {"Content-type":"application/json"})
                        .end(JSON.stringify({message: "Worked", data: character}));
            } else {
                return res
                        .writeHead(404, {"Content-type":"application/json"})
                        .end(JSON.stringify({message: "Didn't work", data: "Character not found"}))
            }
             
        }
    })
    .listen(3001, () => {console.log("Mounted")})