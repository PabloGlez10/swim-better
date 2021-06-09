'use strict'

const config = require('./modules/config')
const app = require('./app')
const PORT = config.PORT || 8080

app.listen(PORT, () => console.info(`Servidor en https://localhost:${PORT}`))
