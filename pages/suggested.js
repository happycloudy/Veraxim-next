import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Requisites(title) {
  return (
    <div className="container">
      <Head title="Что мы предлагаем"/>
      <Header/>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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
    `}
    </style>
    </div>
  )
}