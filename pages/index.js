import Head from 'next/head'

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
      <Head_er/>
      <Main/>
      <Foot_er/>
    </div>
  )
}


function Head_er() {
  return (
    <div className="container">

    <header className="container mt-5">
      <div className="row">
        <div className="col-2 offset-1 Logo">
          <a >Общество с ограниченной ответственностью</a>
          <h2>"Верахим"</h2>
        </div>
        <div className="col-7 offset-1">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Главная <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Деятельность компании
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/description">Описание проекта</a>
                    <a className="dropdown-item" href="#">Что мы предлагаем</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Реквизиты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Обратная связь</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>




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
        margin-top:30px;
        background-color: rgba(255,252,217,.6);
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

function Foot_er(){
    return(
      <footer className="container">
        <div className="row">
          <div className="col-3 offset-5">
            <p>Благодарим за поддержку Фонд Содействия развитию малых форм предприятий в научно-технической сфере!</p>
          </div>
          <div className="col-3">
            <img src=""></img>
          </div>
        </div>
      </footer>
    )
}