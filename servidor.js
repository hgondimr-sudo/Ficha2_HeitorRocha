const http = require("http");
const { type } = require("os");

const PORT = 3000;
const cards = [
    { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
    { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
    { name: "Rei dos heróis", type: "Humano", attack: 10, defense: 5 },
    { name: "Mestre dos magos", type: "Humano", attack: 12, defense: 3 },
    { name: "Guardião Paladino", type: "Humano", attack: 6, defense: 11 },

];

const valor = cards.length.toString();





const server = http.createServer((req, res) => {

    console.log(`${req.method} ${req.url}`);
    if (req.url === "/") {

        res.writeHead(200, { "Content-Type": "text; charset=utf-8" });
        res.end(`<h1>Esta aqui a quantidade de cartas que tens: ${valor}<h1>`);


    } else if
        (req.url === "/sobre") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Heitor Rocha - TGPSIU24");
        return;
    } else if
        (req.url === "/cartas") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const items = cards.map(card => `<li>${card.name}</li>`).join("");
        res.end(items);
    } else if (req.url === "/agora") {
        const now = new Date().toLocaleString("pt-PT");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`<h2>Esta aqui as horas atuais:${now} <h2>`);
    } else if (req.url === "/cartas/aleatorias") {

        const card = cards[Math.floor(Math.random() * cards.length)];
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`<h2>Nome: ${card.name}</h2><p></p> <h2>Tipo: ${card.type}</h2> <p></p> <h2>Ataque: ${card.attack}</h2> <p></p> <h2>Defesa: ${card.defense}</h2>`);

    }
    else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Erro 404<h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server a correr em http://localhost:${PORT}`);
});


