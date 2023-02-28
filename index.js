const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

const managerRoutes = require('./src/routes/Manager.route')
app.use(bodyParser.json());
app.use('/managers',managerRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
