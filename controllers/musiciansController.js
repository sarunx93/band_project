const createMusician = async (req, res) => {
  res.send("create musician");
};
const deleteMusician = async (req, res) => {
  res.send("delete musician");
};
const getAllMusicians = async (req, res) => {
  res.send("getAll musician");
};
const updateMusician = async (req, res) => {
  res.send("update musician");
};
const showStats = async (req, res) => {
  res.send("show stat");
};
export {
  createMusician,
  deleteMusician,
  getAllMusicians,
  updateMusician,
  showStats,
};
