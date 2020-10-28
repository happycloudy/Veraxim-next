export default function Footer(){
    return(
      <footer className="container mt-5" >
        <div className="row">
          <div className="col text-center"> <img src="fondimg.webp"/></div>
        </div>

        <div className="row">
          <div className="col text-center mt-3 mb-5" style={{fontWeight:"600", fontSize:"1.5rem"}}>
            Благодарим за поддержку Фонд Содействия развитию малых форм предприятий в научно-технической сфере!
          </div>
        </div>

        <div className="row">
          <div className="col text-center mt-3" style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
            <a className="btn button1" role="button" href="http://veraxim.website/">
              Veraxim.website
            </a>
          </div>
        </div>
        <style jsx global>{`
        .button1{
          width: 13vw;
          height: 6vh;
          background-color:#ffbe4d;
          display:flex;
          align-items: center;
          justify-content: center;
          color: black !important;

          font: normal normal 1.2rem Arial,Helvetica,sans-serif;
          color: #454545;
          text-decoration: none;
          text-align: left;
          line-height: 24px;
          margin: 0;
          padding: 0;
          text-transform: none;
          font-weight: 600;
        }
        `}
      </style>
      </footer>
    )
  }

