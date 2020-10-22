import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Connection(title) {
  return (
    <div className="container">
      <Head title="Обратная связь | Veraxim"/>
      <Header/>

      <div className="jumbotron jumbotron-fluid">
        
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
      .jumbotron{
        opacity: .9;
      }
    `}
    </style>
    </div>
  )
}