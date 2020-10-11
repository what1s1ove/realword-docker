const express = require(`express`)
const app = express()

const PORT = 3000

app.get(`/test`, (_, res) => {
  res.send(`Our api server is working correctly`)
})

app.listen(PORT, () => {
  console.log(`Started api services`)
})
