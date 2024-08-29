import express from 'express'
import {db} from '../config/db.config'
import { router } from '../routes/sportsClub.routes'
import {playersRoute} from '../routes/players.routes'
const port = process.env.PORT
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//routes
app.use('/api/v1/clubs', router)
app.use('/api/v1/players', playersRoute)

db.then(() => {
    app.listen(7070, () => console.log('Server is listening on port 7070'))
})
