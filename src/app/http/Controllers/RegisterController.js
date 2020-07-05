import { User } from '../../models'

const store = async(req, res) => {

    const user = await User.create({
        name: 'Rafael Souto',
        email: 'souto.rafael@node.com',
        password: '123456'
    })
    .catch((e) => console.log(e))

    res.status(201).send({data: user})

}

module.exports = {
    store
}