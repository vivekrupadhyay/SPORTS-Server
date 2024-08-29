import dotenv from 'dotenv'
import mongooes from 'mongoose'

dotenv.config()

const username=process.env.username
const password = process.env.password
const dbName = 'SportsDB'

const connection=`mongodb+srv://viveku:Vivek316@cluster0.o4svi.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`
//`mongodb+srv://${username}:${password}@cluster0.o4svi.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`
const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

  export const db=mongooes.connect(connection,options).then(res=>{
    if(res){
        console.log(`Database connection succeffully to ${dbName}`)
    }
  }).catch(err=>{
    console.log(err)
  })