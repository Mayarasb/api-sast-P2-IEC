import request from "supertest";
import { expect } from "chai";
import app from "../server.js";

describe("API SAST - Testes de rotas", () => {

  // Teste da rota raiz
  it("GET / deve retornar mensagem de status da API", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("message");
    expect(res.body.message).to.equal("API SAST P2 IEC rodando com sucesso!");
  });

  // ROTAS DE ORGANIZAÇÕES
  describe("Rotas /organizacoes", () => {

    it("GET /organizacoes deve retornar lista de organizações", async () => {
      const res = await request(app).get("/organizacoes");
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.greaterThan(0);
      expect(res.body[0]).to.have.property("name"); // nome da organização
      expect(res.body[0]).to.have.property("city"); // cidade da organização
    });

    it("POST /organizacoes deve criar uma organização", async () => {
      const res = await request(app)
        .post("/organizacoes")
        .send({
          name: "Org Teste",
          city: "Cidade Teste"
        });
      
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("message");
      expect(res.body.message).to.equal("Organização criada!");
      expect(res.body.data).to.have.property("name", "Org Teste");
      expect(res.body.data).to.have.property("city", "Cidade Teste");
    });

    it("POST /organizacoes deve retornar 400 se faltar name ou city", async () => {
      const res = await request(app)
        .post("/organizacoes")
        .send({ name: "Org Incompleta" });
      
      expect(res.status).to.equal(400);
      expect(res.body).to.have.property("error");
      expect(res.body.error).to.equal("Nome e cidade são obrigatórios");
    });

  });

});
