import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Connection(title) {
  return (
    <div className="container">
      <Head title="Обратная связь | Veraxim"/>
      <Header/>

      <div className="jumbotron jumbotron-fluid mt-5">
        <h1>Вы можете написать нам электронную почту VERAXIM@MAIL.RU или отправить свой вопрос здесь: </h1>

        <form className="col-10 offset-1">
        <div className="form-group">
          <label htmlFor="YourName">Имя</label>
          <input type="text" className="form-control" id="YourName" placeholder="Иван"/>
        </div>
        <div className="form-group">
          <label htmlFor="YourEmail">Email</label>
          <input type="text" className="form-control" id="YourEmail" placeholder="example@mail.ru"/>
        </div>
        <div className="form-group">
          <label htmlFor="YourQuestion">Сообщение</label>
          <input type="text" className="form-control" id="YourQuestion" placeholder="Сообщение"/>
        </div>
        <button id="ButtonSumbit" type="submit" className="btn" onClick={btnClick()}>Отправить</button>
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
    `}
    </style>
    </div>
  )
}

function btnClick(){
   /* let email=document.getElementById("YourEmail");
    let name=document.getElementById("YourName");
    let question=document.getElementById("YourQuestion");
    console.log(email+' '+name+' '+question+' ');*/
  console.log("123");
}