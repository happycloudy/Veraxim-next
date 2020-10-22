import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Requisites(title) {
  return (
    <div className="container">
      <Head title="Реквизиты"/>
      <Header/>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <p className="lead">
          <span style={{opacity:".8"}}>
          Общество с ограниченной ответственностью "ВЕРАХИМ"<br/>
          Генеральный директор: Солдатенок М.В. <br/> <br/>
          </span>
            Юридический и почтовый адрес: 125047, г.Москва, Миусская пл., д.9, стр.3 <br/>
            ИНН 7707798877 <br/>
            КПП 770701001 <br/>
            ОГРН 11377462054095 <br/>
            ОКПО 17251574 <br/>
            Банковские реквизиты: <br/><br/>
            ФИЛИАЛ ЦЕНТРАЛЬНЫЙ ПАО БАНКА "ФК ОТКРЫТИЕ"
          г.МОСКВА <br/>
            БИК: 044525297 <br/>
            К / счет: 30101810945250000297 <br/>
            Р / счет: 40702810324000026120 <br/>


          </p>
        </div>
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
      .lead{
        text-align: right;
        color: black;
        opacity: 1;
      }
      .jumbotron{
        opacity: .7;
      }
    `}
    </style>
    </div>
  )
}