const express = require(`express`)
const { connedDb } = require(`./helpers/db`)
const { host, port, db } = require(`./configurations`)

const app = express()

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started auth services on port: ${port}`)
    console.log(`On host ${host}`)
    console.log(`Our database ${db}`)
  })
}

app.get(`/test`, (_, res) => {
  res.send(`Our auth server is working correctly`)
})

connedDb()
  .on(`error`, console.log)
  .on(`disconnect`, connedDb)
  .once(`open`, startServer)
