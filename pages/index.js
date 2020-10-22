import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Home() {
  return (
    <div className="container">
      <Head title="Главная"/>
      <Header/>
      <Main/>
      <Footer/>
      <style jsx global>{`
      .HellowordsText{
        background-color: rgba(255,255,255,.8);
        font: normal normal 20px Arial,Helvetica,sans-serif;
        text-align:center;
        padding: 20px 10px 20px 10px;
      }
      .text{
        padding: 10px 10px 10px 10px;
      }
      .Logo{
        background-color: rgba(255,252,217,.6);
        border-radius:10px;
        text-align:center;
        color: #454545;
      }
      .navbar{
        font: normal normal 17px Arial,Helvetica,sans-serif;
        margin-top:6vh;
        background-color: rgba(255,252,217,.7);
      }
    `}
    </style>

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
    `}
    </style>
    </div>

  )
}








function Main(){
  return(
    <div className="container">
      <div className="container">

      </div>
      <div className="container">
        <div className="col-10 offset-1">
          <div className="HellowordsText">
            <p>Команда ООО 'ВЕРАХИМ приветствует Вас на официальном сайте нашей компании!</p>
            <p>Начиная с 2013 года мы успешно реализуем инновационные и наукоемкие проекты в области биотехнологии!</p>
            <p>Надеемся на Вашу заинтересованность и перспективное сотрудничество!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
