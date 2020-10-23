import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Connection(title) {
  return (
    <div className="container">
      <Head title="Обратная связь | Veraxim"/>
      <Header/>

      <div className="jumbotron jumbotron-fluid">
        <h1>Вы можете написать нам электронную почту VERAXIM@MAIL.RU или отправить свой вопрос здесь: </h1>

        <form>
        <div class="form-group col-10 offset-1">
          <label for="YourName">Имя</label>
          <input type="text" className="form-control" id="YourName" placeholder="Иван"></input>
        </div>
        <div class="form-group col-10 offset-1">
          <label for="YourMail">Email</label>
          <input type="text" className="form-control" id="YourMail" placeholder="example@mail.ru"></input>
        </div>
        <div class="form-group col-10 offset-1">
          <label for="YourQuestion">Сообщение</label>
          <input type="text" className="form-control ask" id="YourQuestion" placeholder="Сообщение"></input>
        </div>
      </form>

      </div>

      <Footer/>

      <style jsx global>{`
      body{
        background: url(mainBg.webp) no-repeat;
        background-size: cover;
        margin: 0;
        padding: 0;

        font: normal normal 14px Arial,Helvetica,sans-serif;
        color: #454545;
        text-decoration: none;
        text-align: left;
        line-height: 24px;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        text-transform: none;
        font-size: 14px;
      }
      .jumbotron{
        opacity: .9;
        text-align: center;
      }
      label{
        font: normal normal 20px Arial,Helvetica,sans-serif;
        margin: 1vw 0 1vw 0;
      }
      .ask{
        height: 7vw;
      }
    `}
    </style>
    </div>
  )
}