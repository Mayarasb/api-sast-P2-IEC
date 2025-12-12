// tests/app.test.js
import request from "supertest";
import { expect } from "chai";
import app from "../server.js"; // server.js está na raiz

describe("API SAST - Testes de rotas", () => {

  describe("GET /", () => {
    it("Deve retornar mensagem de API rodando", async () => {
      const res = await request(app).get("/");
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("message");
      expect(res.body.message).to.equal("API SAST P2 IEC rodando com sucesso!");
    });
  });

  describe("Rotas /organizacoes", () => {
    
    it("GET /organizacoes deve retornar lista de organizações", async () => {
      const res = await request(app).get("/organizacoes");
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("array");
      expect(res.body[0]).to.have.property("id");
      expect(res.body[0]).to.have.property("name");
      expect(res.body[0]).to.have.property("city");
    });

    it("POST /organizacoes deve criar uma organização", async () => {
      const res = await request(app)
        .post("/organizacoes")
        .send({ name: "ONG Teste", city: "Recife" });
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("message");
      expect(res.body.message).to.equal("Organização criada!");
      expect(res.body.data).to.have.property("name", "ONG Teste");
      expect(res.body.data).to.have.property("city", "Recife");
    });

    it("POST /organizacoes deve falhar sem name ou city", async () => {
      const res = await request(app)
        .post("/organizacoes")
        .send({});
      expect(res.status).to.equal(400);
      expect(res.body).to.have.property("error");
      expect(res.body.error).to.equal("Nome e cidade são obrigatórios");
    });

  });

});
