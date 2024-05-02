const { createUserService, getUsersService } = require("./user.service");

exports.createUser= async (req, res) =>{
    try {
        const data = req.body;
        const result = await createUserService(data);
        return res.status(200).json({
            status: "Success",
            message: "User created successful",
            data: result,
          });

    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Something went wrong!!",
            error: error,
          });
    }
}
exports.getUser= async (req, res) =>{
    try {
       
        const result = await getUsersService();
        return res.status(200).json({
            status: "Success",
            message: "User fetched successful",
            data: result,
          });

    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Something went wrong!!",
            error: error,
          });
    }
}