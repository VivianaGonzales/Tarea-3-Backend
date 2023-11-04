const mongoose = require ('mongoose')
mongoose.set('strictQuery',false)

const connect = async() => {
    try {
        await mongoose.connect('mongodb+srv://viviana2504:milagros1234@cluster0.4pyokpk.mongodb.net/Primerdb')
        console.log("Se conectó a la base de datos")
    } catch {
        console.log("Error al conectarse a la base de datos")
    }
}

module.exports = {connect}