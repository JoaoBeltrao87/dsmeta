import logo from '../../assets/img/qoma2.jpg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="qoma-logo-container">
                <img src={logo} alt="Qoma Burger" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/qomaburger.ig">@qomaburger.ig</a>
                </p>
            </div>
        </header>
    )
}

export default Header