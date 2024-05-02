const User = require("../modules/user/user.model");

exports.checkUserName = async (req, res, next) => {
  try {
const {name} = req.body;
    const isExist = await User.findOne({name})

    if(isExist){
        return res.status(401).json({
            status:'failed',
            error:'User already existed!!'
        })
    }

    next()
  } catch (error) {
    res.status(400).json({
        status: "Failed",
        message: "Something went wrong!!",
        error: error,
      });
  }
};
