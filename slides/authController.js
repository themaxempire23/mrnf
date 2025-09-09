// This file will handle all authentication related functions
// Robust athentication handling


const user = require("../model/UserModel");
const dotenv = require("dotenv");
dotenv.config();


//* create or update user

exports.createOrUpdateUser = async(requestAnimationFrame, res) => {

    try{

        const { name, picture, email } = req.body;
        const  nameFromEmail = email && email.split("@") [0];
        const  updateName = name ? name: nameFromEmail;
        const  pictureProcess = picture?picture :process.env.DEFAULT_IMAGE_URL;

        const user = await User.findByIdAndUpdate(
            { email},
            { name: updateName, picture: pictureProcess},
            { new: true}
        );

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
            const newUser = new User({
                email,
                name: updateName,
                picture: pictureProcess 
            }).save()
        }

    }catch(err){
        console.log(err);
        res.status(500).json({
            error: "Something went wrong!",
        })
    }
}