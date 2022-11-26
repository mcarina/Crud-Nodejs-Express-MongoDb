const mongoose = require('mongoose')

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@meunumeroum.e6lufzo.mongodb.net/?retryWrites=true&w=majority`,
    error => {
      if (error) {
        return console.log('Não foi dessa fez :(', error)
      }

      return console.log('DEU CERTO!!!!!!!!!!!')
    }
  )
}

module.exports = connectToDataBase
