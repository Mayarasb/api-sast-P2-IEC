export const getOrgs = (req, res) => {
  res.json([
    { id: 1, name: "ONG Vidas", city: "Recife" },
    { id: 2, name: "Projeto Amor", city: "Olinda" }
  ]);
};

export const createOrg = (req, res) => {
  const { name, city } = req.body;

  if (!name || !city) {
    return res.status(400).json({ error: "Nome e cidade são obrigatórios" });
  }

  res.json({
    message: "Organização criada!",
    data: { name, city }
  });
};