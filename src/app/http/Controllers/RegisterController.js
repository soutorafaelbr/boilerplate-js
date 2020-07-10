import { User } from '../../models'

const store = async(req, res) => {
    try {
        const {name, email, password} = req.body
    
        const user = await User.create({
            name,
            email,
            password
        })
        

        return res.status(201)
        .send({
            data: user
        })

    } catch(error) {
        return res.status(400)
        .json({errors: error.message})
    }
}

module.exports = {
    store
}