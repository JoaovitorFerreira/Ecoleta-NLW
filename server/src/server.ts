import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Usuarios");

  response.json(['Diego', 'Cleyton','Robson','Diogo','Arlindo']);
});

app.listen(3333);
