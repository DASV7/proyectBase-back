const modelUsers = require("../../models/users")
const users = (module.exports = {})

users.getUsersById = async (req, res) => {
    try {
        console.log("Felicidades entraste a tu reino")
        res.status(200).json({ data: true })
    } catch (error) {
        console.log("Error tan sapo perro", error);
    }
}

users.createNewUser = async (req, res) => {
    try {
        console.log("entra"); 
        /* Como crearlo 
        const user = req.body
        const users = new modelUsers({
            surname: user.surname
        })
        const newUser = await users.save()
        console.log(newUser);

        */
        /*
         //Como buscar un usuario 
         const findUser = await modelUsers.findOne({ _id: "641e33f6aecd819ba4affc8c" })
         console.log(JSON.parse(JSON.stringify(findUser)));        
         */


        /*
        // COmo Actualizar a emanuel
        const usuario = await modelUsers.updateOne({ _id: "641e33f6aecd819ba4affc8c" }, { $set: { surname: "emaunel" } },)
        console.log(JSON.parse(JSON.stringify(usuario)));
        */








    } catch (error) {
        console.log("Error tan sapo perro", error);
    }

}