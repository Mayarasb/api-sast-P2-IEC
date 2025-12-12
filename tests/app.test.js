// tests/app.test.js
import request from "supertest";
import { expect } from "chai";
import app from "../server.js";

describe("API SAST - Testes de rotas", () => {

  // Teste raiz
  it("GET / deve retornar mensagem de status da API", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("message");
    expect(res.body.message).to.equal("API SAST P2 IEC rodando com sucesso!");
  });

  // ROTAS DE USUÁRIOS
  describe("Rotas /usuarios", () => {

    it("GET /usuarios deve retornar lista de usuários ou 404", async () => {
      const res = await request(app).get("/usuarios");
      expect(res.status).to.be.oneOf([200, 404]);
    });

    it("POST /usuarios deve criar um usuário", async () => {
      const res = await request(app)
        .post("/usuarios")
        .send({
          nome: "Teste Usuário",
          email: "teste@teste.com",
          senha: "123456"
        });
      expect(res.status).to.be.oneOf([200, 201]);
      if (res.status === 201 || res.status === 200) {
        expect(res.body).to.have.property("nome");
        expect(res.body.nome).to.equal("Teste Usuário");
      }
    });

    it("PUT /usuarios/:id deve atualizar um usuário (ID 1 usado como exemplo)", async () => {
      const res = await request(app)
        .put("/usuarios/1")
        .send({
          nome: "Usuário Atualizado"
        });
      expect(res.status).to.be.oneOf([200, 404]);
      if (res.status === 200) {
        expect(res.body).to.have.property("nome");
        expect(res.body.nome).to.equal("Usuário Atualizado");
      }
    });

  });

  // ROTAS DE ORGANIZAÇÕES
  describe("Rotas /organizacoes", () => {

    it("GET /organizacoes deve retornar lista de organizações ou 404", async () => {
      const res = await request(app).get("/organizacoes");
      expect(res.status).to.be.oneOf([200, 404]);
    });

    it("POST /organizacoes deve criar uma organização", async () => {
      const res = await request(app)
        .post("/organizacoes")
        .send({
          nome: "Org Teste",
          cnpj: "00.000.000/0001-00",
          email: "org@teste.com"
        });
      expect(res.status).to.be.oneOf([200, 201]);
      if (res.status === 201 || res.status === 200) {
        expect(res.body).to.have.property("nome");
        expect(res.body.nome).to.equal("Org Teste");
      }
    });

    it("PUT /organizacoes/:id deve atualizar uma organização (ID 1 usado como exemplo)", async () => {
      const res = await request(app)
        .put("/organizacoes/1")
        .send({
          nome: "Org Atualizada"
        });
      expect(res.status).to.be.oneOf([200, 404]);
      if (res.status === 200) {
        expect(res.body).to.have.property("nome");
        expect(res.body.nome).to.equal("Org Atualizada");
      }
    });

  });

});
