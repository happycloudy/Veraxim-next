import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Suggested(title) {
  return (
    <div className="container" style={{backgroundColor:"rgba(255, 255, 255, .8)",height:"100%", width:"100%"}}>
      <Head title="Что мы предлагаем | Veraxim"/>
      <Header/>

      <div className="container" style={{width:"60%"}}>
        <div className="container suggest mt-5">
            <img src ="/otoplenie.png" className="img-fluid"/>
            <h1>Установка по производству кормовой добавки</h1>
        </div>
        <div className="container suggest mt-5" >
            <img src ="/fufaika.png" className="img-fluid"/>
            <h1>Технология под ключ</h1>
        </div>
        <div className="container suggest mt-5">
            <img src ="/pole.png" className="img-fluid"/>
            <h1>Кормовая добавка</h1>
        </div>
        <div className="container suggest mt-5" >
            <img src ="/biotech.png" className="img-fluid"/>
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
        height: 100%;
      }
      .suggest{
        text-align: center;

      }
      @media (max-width: 600px){
        h1{
          font-size: 1.3rem;
        }
      }

    `}
    </style>
    </div>
  )
}