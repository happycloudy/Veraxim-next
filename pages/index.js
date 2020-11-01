import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Home() {
  return (
    <div className="container" style={{backgroundColor:"rgba(255, 255, 255, .8)",height:"100%", width: "100%"}}>
    <Head title="Главная"/>
      <Header/>
      <Main/>
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
        height: 100%;
      }
      .HellowordsText{
        background-color: rgba(255,255,255,.8);
        font: normal normal 1.5rem Arial,Helvetica,sans-serif;
        text-align:center;
        padding: 1.5vh 1vw 1.5vh 1vw;

      }
      .text{
        padding: 10px 10px 10px 10px;
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
        <div className="col text-center mb-5">
          <img src="veraximimg.webp" className="img-fluid"></img>
        </div>
      </div>
      <div className="row">
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
