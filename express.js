const express = require('express')
const port = 3000
const UserModel = require('../src/models/user.model')
const app = express()

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'src/views')

//Middleware
app.use((req, res, next) => {
  console.log(req.body)
  console.log(`Resquest type: ${req.method}`)
  console.log(`Content type: ${req.headers['content-type']}`)
  console.log(`Date: ${new Date()}`)

  next()
})

app.get('/views/users', async (req, res) => {
  const users = await UserModel.find({})

  res.render('index', { users })
})

//criar users no banco de dados
app.post('/users', async (req, res) => {
  try {
    const users = await UserModel.create(req.body)

    res.status(201).json(users)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

//achar os users no banco de dados
app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({})

    res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

//Procurar por id no banco de dados
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id

    const users = await UserModel.findById(id)

    return res.status(200).json(users)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

//Atualizar informações parcialmente no banco de dados, também por id.
app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id

    const users = await UserModel.findByIdAndUpdate(id, req.body, { new: true }) //o {new:true} é necessario para as novas inf. do banco de dados atualizar no user.

    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

//Para deletar usuário do banco de dados
app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id

    const users = await UserModel.findByIdAndRemove(id)
    res.status(201).json(users)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.listen(port, () =>
  console.log(`ta na port ${port}! /alguma coisa NÃO ESQUEÇE!!!!!`)
)
