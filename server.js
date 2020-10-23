const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mailer = require('./ExpressServer/mail')

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

    console.log(name, email, message)
    // console.log(req.body)
    mailer({ email, name, text: message }).then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send('badddd')
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