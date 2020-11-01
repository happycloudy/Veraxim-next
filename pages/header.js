export default  function Header() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="col-lg-3 col-md-12 Logo">
          <a >Общество с ограниченной ответственностью</a>
          <h2>"Верахим"</h2>
        </div>
        <button className="navbar-toggler" id="navButton" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse offset-3" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Главная </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Деятельность компании
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/description">Описание проекта</a>
                <a className="dropdown-item" href="/suggested">Что мы предлагаем</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/requisites">Реквизиты</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/connection">Обратная связь</a>
            </li>
          </ul>
        </div>




        <style jsx global>{`
        @media (max-width:991px) {
          #navButton{
            display:block;
            margin-top:5vw;
          }
        }
        .nav-link{
            color:#454545;
            alink:black;
            vlink:#454545;
            active:black;
        }
        .Logo{
            border: 1px solid;
            border-radius: 10px;
            text-align:center;
            color: #454545;
            font-size: 1.1rem;

          }
          .navbar{
            font: normal normal 1rem Arial,Helvetica,sans-serif;
          }
        `}
        </style>
      </nav>
  )
}