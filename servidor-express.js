const express = require("express");
const app = express();

const cards = [
    { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
    { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
    { name: "Rei dos heróis", type: "Humano", attack: 10, defense: 5 },
    { name: "Mestre dos magos", type: "Humano", attack: 12, defense: 3 },
    { name: "Guardião Paladino", type: "Humano", attack: 6, defense: 11 },

];

const valor = cards.length.toString();

app.get("/", (req, res) => {
  res.send(`<h1>Esta aqui a quantidade de cartas que tens: ${valor}<h1>`);
});


app.listen(3000, () => console.log("http://localhost:3000"));

app.get("/sobre", (req, res) =>{
    res.send("<h1>Heitor Rocha - TGPSIU24<h1>")
})

app.get("/cartas", (req, res) =>{
    const items = cards.map(card => `<li>${card.name}</li>`).join("");
    res.send(items)
})

app.get("/agora", (req, res) =>{
    const now = new Date().toLocaleString("pt-PT");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`<h2>Esta aqui as horas atuais:${now} <h2>`);
})

app.get("/cartas/aleatorias", (req, res) =>{
    const card = cards[Math.floor(Math.random() * cards.length)];
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(`<h2>Nome: ${card.name}</h2><p></p> <h2>Tipo: ${card.type}</h2> <p></p> <h2>Ataque: ${card.attack}</h2> <p></p> <h2>Defesa: ${card.defense}</h2>`);
})

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});