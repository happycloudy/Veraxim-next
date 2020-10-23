export default  function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="col-3 Logo">
          <a >Общество с ограниченной ответственностью</a>
          <h2>"Верахим"</h2>
        </div>


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
        .nav-link{
            color:#454545;
            alink:black;
            vlink:#454545;
            active:black;
            width:
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
            border-radius:10px;
          }
        `}
        </style>
      </nav>
  )
}
    //   <div>
    //   <header className=" mb-3" style={{backgroundColor: "rgba(255,252,217,.7)"}}>
    //     <div className="row" >
    //       <div className="col-3 Logo">
    //         <a >Общество с ограниченной ответственностью</a>
    //         <h2>"Верахим"</h2>
    //       </div>
    //       <div className="col-7 offset-2 d-flex align-center" style={{borderRadius: "10px"}}>
    //         <nav className="navbar navbar-expand-lg" style={{backgroundColor:"rgba(250, 227, 92, 0.6)"}}>
    //           <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //             <ul className="navbar-nav">
    //               <li className="nav-item active">
    //                 <a className="nav-link" href="/">Главная <span className="sr-only">(current)</span></a>
    //               </li>
    //               <li className="nav-item dropdown">
    //                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                   Деятельность компании
    //                 </a>
    //                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //                   <a className="dropdown-item" href="/description">Описание проекта</a>
    //                   <a className="dropdown-item" href="/suggested">Что мы предлагаем</a>
    //                 </div>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link" href="/requisites" >Реквизиты</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link" href="/connection">Обратная связь</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </nav>
    //       </div>
    //     </div>
    //   </header>
    //   <style jsx global>{`
    //     .nav-link{
    //         color:#454545;
    //         alink:black;
    //         vlink:#454545;
    //         active:black;
    //     }
    //     .Logo{
    //         border: 1px solid;
    //         border-radius: 10px;
    //         text-align:center;
    //         color: #454545;
    //         font-size: 1.1rem;
    //         background-color: rgba(250, 227, 92, 0.6);
    //       }
    //       .navbar{
    //         font: normal normal 1rem Arial,Helvetica,sans-serif;
    //         border-radius:10px;
    //       }
    // `}
    // </style>
    // </div>