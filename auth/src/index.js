const express = require(`express`)
const axios = require(`axios`).default
const { connedDb } = require(`./helpers/db`)
const { host, port, db, apiUrl } = require(`./configurations`)

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

app.get(`/testwithapidata`, (_, res) => {
  axios.get(`${apiUrl}/testapidata`).then(({data}) => {
    res.json({
      testapidata: data.testwithapi
    })
  })
})

app.get(`/api/currentUser`, (_, res) => {
  res.json({
    id: `1234`,
    email: `foo@gmail.com`
  })
})

connedDb()
  .on(`error`, console.log)
  .on(`disconnect`, connedDb)
  .once(`open`, startServer)
