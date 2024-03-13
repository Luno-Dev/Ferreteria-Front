import "./footer.css"
const Footer = () => {

  const data = import.meta.env.VITE_PORT;

  return (
    <footer className="footer text-light back position-relative bottom-0 p-4" style={styles.footer}>
      <div className="container-fluid">
        <div className="row cntainer-fluid d-flex flex-row justify-content-center">
          <div className="col-lg-6">
            <div className="d-flex justify-content-start flex-column align-items-start">
                 <h3 className="text-center align-self-center">Links</h3>
            <ul className="fs-5">
              <li><a className="link-light" href="/">Home</a></li>
              <li><a className="link-light" href="/ayuda">Ayuda</a></li>
            </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center flex-column align-items-center">
                  <h3>Contacto</h3>
            <ul>
              <li>Email: infocorralon@corralononline.com</li>
              <li>WhatsApp: +54 9 236 451-9612 - +54 9 2364 38-0471</li>
              <li>Instagram: @corralontelollevo</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="text-center m-2">
          <p className="fs-6">© Copyright 2024 Te lo LLevo. All rights reserved - Desarrollado por Luno y Neuro Marketing</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

const styles = {
  footer: {
    marginTop: 'auto',
    width : '100%',
  }
}