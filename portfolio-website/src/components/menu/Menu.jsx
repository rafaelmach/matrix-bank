import "./menu.scss"

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active") }>

            {/* Lembrar de isolar esta tabela em um componente e chamar onClick uma única vez */}

            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
