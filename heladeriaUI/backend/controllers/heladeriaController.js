import Heladeria from '../modelo/modelo.js';

const createHelados= async (req, res) => {
  try {
    const inv = new Heladeria(req.body);
    await inv.save();
    res.status(201).json(inv);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getHelados = async (req, res) => {
  try {
    const invs = await Heladeria.find();
    res.json(invs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export default { createHelados, getHelados };