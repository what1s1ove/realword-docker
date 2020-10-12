const express = require(`express`)
const { connedDb } = require(`./helpers/db`)
const { host, port } = require(`./configurations`)

const app = express()

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Started api services on port: ${port}`)
    console.log(`On host ${host}`)
  })
}

app.get(`/test`, (_, res) => {
  res.send(`Our api server is working correctly`)
})

connedDb()
  .on(`error`, console.log)
  .on(`disconnect`, connedDb)
  .once(`open`, startServer)
