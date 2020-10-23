import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Suggested(title) {
  return (
    <div className="container" style={{backgroundColor:"rgba(255, 255, 255, .8)",height:"100%"}}>
      <Head title="Что мы предлагаем | Veraxim"/>
      <Header/>

      <div className="container" style={{width:"60%"}}>
        <div className="container suggest mt-5">
            <img src ="/otoplenie.png" className="image"></img>
            <h1>Установка по производству кормовой добавки</h1>
        </div>
        <div className="container suggest" >
            <img src ="/fufaika.png" className="image"></img>
            <h1>Технология под ключ</h1>
        </div>
        <div className="container suggest">
            <img src ="/pole.png" className="image"></img>
            <h1>Кормовая добавка</h1>
        </div>
        <div className="container suggest" >
            <img src ="/biotech.png" className="image"></img>
            <h1>НИОКР в области биотехнологии</h1>
        </div>
      </div>

      <Footer/>

      <style jsx global>{`
      body{
        background: url(descrBg.webp) no-repeat;
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
      .suggest{
        text-align: center;
      }
      .image{
          width: 35%;
          height: 20%;
      }
    `}
    </style>
    </div>
  )
}