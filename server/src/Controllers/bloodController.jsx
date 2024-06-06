const Blood = require("../Models/BloodModels.jsx");

const bloodHandller = async (req, res, next) => {
  try {
    const { name, bloodGroup, phone, ano_phone, address, social } = req.body;

    if (!name) {
      return res.status(404).send({
        success: false,
        message: "name is required!",
      });
    }
    if (!bloodGroup) {
      return res.status(404).send({
        success: false,
        message: "Blood Grouph is required!",
      });
    }
    if (!phone) {
      return res.status(404).send({
        success: false,
        message: "Phone is required!",
      });
    }
    if (!address) {
      return res.status(404).send({
        success: false,
        message: "Address is required!",
      });
    }
    const userExist = await Blood.findOne({ phone, ano_phone });

    if (userExist) {
      return res.status(404).send({
        success: false,
        message: "User already exist with this phone number!",
      });
    }

    const user = await new Blood({
      name,
      phone,
      ano_phone,
      bloodGroup,
      address,
      social,
    }).save();

    res.status(200).send({
      success: true,
      message: `Doner addedd Successfully`,
      user,
    });
  } catch (error) {
    return next(error);
  }
};

const getDoner = async (req, res, next) => {
  try {
    const doner = await Blood.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Somthing is wrong",
    });
  }
};

module.exports = { bloodHandller, getDoner };
