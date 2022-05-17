require("dotenv").config();

const express = require("express");

const connectToDB = require("./connection.js");

const userModel = require("./user");

const app = express();

//configuration
app.use(express.json());

// route:       /
// description: To get all user
// paramter:    none

app.get("/", async (req, res) => {

    try {
        const user = await userModel.find();
        return res.json({ user });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }


});

// route:       /user/type/:type
// description: To get all user based on type
// paramter:    type

app.get("/user/type/:type", async (req, res) => {
    try {
        const { type } = req.params;

        const user = await userModel.find({ userType: type });

        if (!user) {
            return res.json({ message: "No User Found" });
        }

        return res.json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }


})

// app.post("/user/:id", (req, res) => {
//     return res.json(req.params);
// });

// route:       /user/:id
// description: To get all user based on id
// paramter:    _id
app.get("/user/:_id", async (req, res) => {

    try {
        const { _id } = req.params;
        const user = await userModel.findById(_id);

        if (!user) {
            return res.json({ message: "No User Found" });
        }

        return res.json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

});



// route:       /user/new
// description: To add new user
// paramter:    none
//request body: user object

app.post("/user/new", async (req, res) => {
    try {
        const { newUser } = req.body;

        await userModel.create(newUser);

        return res.json({ message: "User Created" });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }


});

// route:       /user/update/:_id
// description: To add new user
// paramter:    _id
//request body: user object

app.put("/user/update/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { userData } = req.body;

        const updateUser = await userModel.findByIdAndUpdate(
            _id,
            { $set: userData },
            { new: true }
        );

        return res.json({ user: updateUser })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }


})

// route:       /user/delete/:_id
// description: To delete user
// paramter:    _id
//request body: none

app.delete("/user/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        await userModel.findByIdAndDelete(_id);

        return res.json({ message: "User Deleted!" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

});

// route:       /user/delete/type/:userType
// description: To delete all user of a specific type
// paramter:    _id
//request body: none

app.delete("/user/delete/type/:userType", async (req, res) => {
    try {
        const { userType } = req.params;

        await userModel.findOneAndDelete({ userType });

        return res.json({ message: "" + userType + " " + "Users Deleted" });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }


});

app.listen(3006, () =>
    connectToDB()
        .then((data) => console.log("Server is running!!"))
        .catch((error) => console.log(error))
);