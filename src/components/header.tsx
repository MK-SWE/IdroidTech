export default function Header() {
    return (
        <>
        {/*Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">IDroid Tech</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    {/*Masthead*/}
    <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-8 align-self-end">
                    <h3 className="text-white font-weight-bold">Hello World!</h3>
                    <hr className="divider" />
                </div>
                <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 mb-5"  id="typewriter"></p>
                    <a className="btn btn-primary btn-xl" href="#about">Why?</a>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}
