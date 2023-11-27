import mongoose from 'mongoose'
import dotenv from 'dotenv'
mongoose.set('strictQuery', false)
dotenv.config()

async function connectDB (): Promise<void> {
  try {
    const uri = process.env.MONGODB_URI
    if (typeof uri !== 'string' || uri.trim() === '') {
      throw new Error('La variable MONGODB_URI no está definida o es una cadena vacía en el archivo .env')
    }

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    await mongoose.connect(
      uri,
      options as mongoose.ConnectOptions
    )
    console.log('Conexión a MongoDB establecida')
  } catch (err) {
    console.error('Error de conexión a MongoDB', err)
  }
}

export default connectDB
