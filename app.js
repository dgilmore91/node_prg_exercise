const express = require('express')
const cors = require('cors')
const app = express()
const PRGRouter = require('./backend/prgRouter')
const port = process.env.PORT || 5000

app.use(cors())
app.use('/data', PRGRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))

