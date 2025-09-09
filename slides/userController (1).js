const User = require("../model/userModel");


exports.listAllUsers = async (req, res) => {
    try {

 

        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip =(page-1)*limit;

        const name = req.query.name || "";
        const email =req.query.email || "";


        const users = await User.find({
            name: { $regex: name, $options: "i" },
            email: { $regex: email, $options: "i" },
          })
            .skip(skip)
            .limit(limit)
            .exec();

            const count = await User.countDocuments({
                name: { $regex: name, $options: "i" },
                email: { $regex: email, $options: "i" },
              });

        const totalPage =Math.ceil(count/limit);

        const listsAllUsers = users.map((user)=>({
              _id:user._id,
              name:user.name,
              email:user.email,
              picture:user.picture,
              bio:user.bio,
              role:user.role
        }));

          res.json({
            count,
            page,
            limit,
            totalPage,
            users:listsAllUsers

          })


       
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Internel server error "});
    }
};


//* get user by id
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            picture:user.picture,
            bio:user.bio,
            role:user.role
        });
    } catch (err) {
        res.status(500).json({message:"Internel server error "}); 
    }
};


//* update user by id
exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();

        user.role=req.body.role;
        await user.save(); 
        res.json({user});

    } catch (err) {
        res.status(500).json({message:"Internel server error "}); 
    }
};