const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mailer = require('./ExpressServer/mailer')

app.prepare().then(() => {
  const server = express()



  server.use(bodyParser.urlencoded({ extended: false }))

  server.post('/sendform', async (req, res) => {

    let name = req.body.yourname
    let email = req.body.youremail
    let message = req.body.yourquestion

    mailer({
      to: "veraxim@mail.ru",
      subject: "Сообщение от " + name,
      text: message + "\nЭл. почта: " + email
    })

    res.redirect("/connection")
  })


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(58154, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:58154')
  })
})