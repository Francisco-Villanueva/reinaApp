const { User } = require("../db");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findOne({
      where: { id: id },
    });

    if (data.length === 0) {
      return res.status(404).sned("User not Found!");
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
  } catch (error) {}
};
