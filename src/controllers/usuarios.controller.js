export const getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Mayara", role: "admin" },
    { id: 2, name: "João", role: "user" }
  ]);
};

export const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  return res.json({
    message: "Usuário criado com sucesso!",
    data: { name, email }
  });
};
