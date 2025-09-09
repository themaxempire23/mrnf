const User = require("../NodeJsApi/model/UserModel");
const dotenv = require("dotenv");
dotenv.config();

//* create or update user

exports.createOrUpdateUser = async (req, res) => {
  try { 
    const { name, picture, email } = req.body;
    const nameFromEmail= email && email.split("@")[0];
    const updatedName = name ? name: nameFromEmail;
    const pictureProcess = picture?picture :process.env.DEFAULT_IMAGE_URL;
 
    const user = await User.findOneAndUpdate(
        { email },
        {name: updatedName, picture: pictureProcess},
        {new: true}
    );
 

    console.log("user updated", req.body);
    if(user){
        res.json({
             _id:user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            bio: user.bio,
            role: user.role
        });

    }else{
            const newUser = await new User({
                email,
                name: updatedName,
                picture: pictureProcess
            }).save();

            res.json({
                _id:newUser._id,
                name: newUser.name,
                email: newUser.email,
                picture: newUser.picture,
                bio: newUser.bio,
                role: newUser.role
            });
    }



  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "something went wrong",
    })
  }
};


//* current user

exports.currentUser = async (req, res) => {
  try {
   const {email} = req.body;

   const user = await User.findOne({email}).exec();
   console.log(user);
   res.json({
    _id:user._id,
    name: user.name,
    email: user.email,
    picture: user.picture,
    bio: user.bio,
    role: user.role
   })



  }catch (err) {
    console.log(err);
    res.status(500).json({
      error: "something went wrong",
    })
  }
}
