const User = require("../models/models");

// create the user
const createUser = (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a user",
		});
	}

	const { fullName, email, password } = req.body

	const user = new User({fullName, email, password});

	if (!user) {
		return res.status(400).json({ success: false, error: err });
	}

	user
		.save()
		.then(() => {
			return res .status(200).json({
				success: true,
				id: user.id,
				message: "user created",
			});
		})
		.catch( error => {
            res.status(400).json({error,message:"user not created"})
        });
};




// get all users from database

const getUsers = async (req,res) => {
    await User.find({},(err,users) => {
        if(err) {
            return res.status(400).json({success:false,error:err})
        }

        if(!users.length) {
            return res.status(404).json({
                success:false,
                error:"user not found"
            })
        }

        return res.status(200).json({
            success:true,
            data:users
        })
    }).catch(err => console.log(err))
}


module.exports = {createUser,getUsers}