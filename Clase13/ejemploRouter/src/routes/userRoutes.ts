import {Router} from 'express'; 
const userRouter = Router(); 

userRouter.get('/', (req, res)=>{
    res.json({message: 'Obtener todos los usuarios'})
})

userRouter.post('/', (req, res)=>{
    const {name, email} = req.body; 
    res.status(201).json({message: 'Usuario creado: ', user: {name, email}})
})

userRouter.put('/:id', (req, res)=>{
    const {id}= req.params
    const {name, email} = req.body
    res.json({message: `Usuario con ID ${id} actualizado.`})
})

userRouter.delete('/:id', (req, res)=>{
    const {id}= req.params
    res.json({message: `Usuario con el ID ${id}, eliminado con exito`})
})

export default userRouter