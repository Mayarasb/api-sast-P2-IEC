import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import userRoutes from "./src/routes/usuarios.routes.js";
import orgRoutes from "./src/routes/org.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json" assert { type: "json" };

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req, res) => {
  res.json({ message: "API SAST P2 IEC rodando com sucesso!" });
});

app.use("/usuarios", userRoutes);
app.use("/organizacoes", orgRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

export default app;