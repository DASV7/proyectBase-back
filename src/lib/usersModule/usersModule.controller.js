const userService = require("./usersModule.service")

const users = (module.exports = {})


users.createNewUser = async (req, res) => {
    try {
        const result = await userService.createNewUser(req.body)
        res.status(200).json({ error: false, data: result });
    } catch (error) {
        console.log("Error tan sapo perro", error);
    }

}


users.getUsersById = async (req, res) => {
    try {
        console.log("Felicidades entraste a tu reino")
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
        res.status(200).json({ data: true })
    } catch (error) {
        console.log("Error tan sapo perro", error);
    }
}
