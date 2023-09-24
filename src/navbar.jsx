
function NavBar(){
    return (<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><sapan className="title">WARGERS</sapan></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><span className="p-5">Home</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><span className="p-5">Features</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><span className="p-5">Home</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}

export default NavBar