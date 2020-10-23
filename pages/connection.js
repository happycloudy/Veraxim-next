import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Connection(title) {
  return (
    <div className="container" style={{backgroundColor:"rgba(255, 255, 255, .8)",height:"100%"}}>
      <Head title="Обратная связь | Veraxim"/>
      <Header/>

      <div className="jumbotron jumbotron-fluid mt-5" style={{boxShadow: "0px 0px 30px 0px rgba(159, 154, 161, 1)", borderRadius: "10px" }}>
        <h1>Вы можете написать нам электронную почту VERAXIM@MAIL.RU или отправить свой вопрос здесь: </h1>
        <form className="col-10 offset-1" action="/sendform" method="POST">
        <div className="form-group">
          <label >Имя</label>
          <input type="text" className="form-control" name="yourname"  id="YourName" placeholder="Иван" required/>
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type="text" className="form-control" name="youremail" id="YourEmail" placeholder="example@mail.ru" required/>
        </div>
        <div className="form-group">
          <label >Сообщение</label>
          <input type="text" className="form-control" name="yourquestion" id="YourQuestion" placeholder="Сообщение" required/>
        </div>
        <button id="ButtonSumbit" type="submit" className="btn">Отправить</button>
      </form>
      </div>

      <Footer/>

      <style jsx global>{`
      body{
        background: url(mainBg.webp) no-repeat;
        background-size: cover;
        margin: 0;
        padding: 0;

        font: normal normal 1.2rem Arial,Helvetica,sans-serif;
        color: #454545;
        text-decoration: none;
        text-align: left;
        line-height: 24px;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        text-transform: none;
      }
      .jumbotron{
        opacity: .9;
        text-align: center;
      }
      label{
        font: normal normal 1.5rem Arial,Helvetica,sans-serif;
        margin: 1vw 0 1vw 0;
      }
      .ask{
        height: 7vw;
      }
      .btn{
        border-radius:10px;
        border:1px solid grey;
        -webkit-box-shadow: 6px 4px 16px 0px rgba(50, 50, 50, 0.6);
        -moz-box-shadow:    6px 4px 16px 0px rgba(50, 50, 50, 0.6);
        box-shadow:         6px 4px 16px 0px rgba(50, 50, 50, 0.6);
      }
    `}
    </style>
    </div>
  )
}
