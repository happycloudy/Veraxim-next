export default  function Header() {
    return (
      <div className="container">

      <header className="container mt-5 mb-5">
        <div className="row">
          <div className="col-2 offset-1 Logo">
            <a >Общество с ограниченной ответственностью</a>
            <h2>"Верахим"</h2>
          </div>
          <div className="col-7 offset-1">
          <nav className="navbar navbar-expand-lg ">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Главная <span className="sr-only">(current)</span></a>
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
                    <a className="nav-link" href="#" >Реквизиты</a>
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
        .nav-link{
            color:#454545;
            alink:black;
            vlink:#454545;
            active:black;
        }
    `}
    </style>
    </div>
  )
}
