const express = require(`express`)
const mongoose = require(`mongoose`)
const { connedDb } = require(`./helpers/db`)
const { host, port, db } = require(`./configurations`)

const app = express()

const postSchema = new mongoose.Schema({
  name: String,
})

const Post = mongoose.model(`Post`, postSchema)

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api services on port: ${port}`)
    console.log(`On host ${host}`)
    console.log(`Our database ${db}`)

    Post.find((err, posts) => {
      if (err) {
        console.log(err)
      }

      console.log('posts', posts)
    })

    const silence = new Post({
      name: `Silence`,
    })

    silence.save((err, savedPost) => {
      if (err) {
        console.log(err)
      }

      console.log(`Saved post`, savedPost)
    })
  })
}

app.get(`/test`, (_, res) => {
  res.send(`Our api server is working correctly`)
})

connedDb()
  .on(`error`, console.log)
  .on(`disconnect`, connedDb)
  .once(`open`, startServer)
