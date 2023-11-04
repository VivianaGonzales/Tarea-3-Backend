const {Farmacia} = require('../models/farmacias')

const apiController = {
    async apiGet(req,res){
        const listadoDeFarmacias = await Farmacia.find()
        res.json(listadoDeFarmacias)
    },

    async apiPost(req,res){
        try {
            const nuevaFarmacia = new Farmacia(req.body)
            await nuevaFarmacia.save()
            res.status(201).json(nuevaFarmacia)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    // async apiGet(req, res){
    //     const listadoDeAlumnos = await Alumno.find()
    //     res.json(listadoDeAlumnos)
    // },

    // async apiPost(req, res){
    //     try {
    //         const nuevoAlumno = new Alumno(req.body)
    //         await nuevoAlumno.save()
    //         res.status(201).json(nuevoAlumno)
    //     } catch (error) {
    //         res.status(400).json(error)
    //     }
    //     // res.status(201).send('Esta ruta un método http POST')
    // },
    apiPut(req, res){
        res.status(201).send('Esta ruta un método http PUT')
    },
    apiDelete(req, res){
        res.status(201).send('Esta ruta un método http DELETE')
    }
}


module.exports = apiController