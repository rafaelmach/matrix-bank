import "./topbar.scss"

const Topbar = ({menuOpen, setMenuOpen}) => {
    

    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className="logo">R.</a>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Topbar

