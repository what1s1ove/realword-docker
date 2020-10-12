const express = require(`express`)
const app = express()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST

app.get(`/test`, (_, res) => {
  res.send(`Our api server is working correctly`)
})

app.listen(PORT, () => {
  console.log(`Started api services on port: ${PORT}`)
  console.log(`On host ${HOST}`)
})
