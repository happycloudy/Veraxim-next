const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mailer = require('./ExpressServer/mailer')

app.prepare().then(() => {
  const server = express()


  // server.use(bodyParser.json())
  // var jsonParser = bodyParser.json()


  server.use(bodyParser.urlencoded({ extended: false }))

  server.post('/sendform', async (req, res) => {


    // const { name ,email , message } = req.body
    // let {name,email,message} = {...req.body}
    let name = req.body.yourname
    let email = req.body.youremail
    let message = req.body.yourquestion

    mailer({
      to: email,
      subject: "test subject",
      text: "test text"
    })

    res.redirect("/connection")
  })


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})