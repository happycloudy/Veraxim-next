import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Главная | Veraxim</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </Head>
      <Header/>
      <Main/>
      <Footer/>
      <style jsx global>{`
      .HellowordsText{
        background-color: rgba(255,255,255,.8);
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
