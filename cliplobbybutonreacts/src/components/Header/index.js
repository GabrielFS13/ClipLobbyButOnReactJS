import './Header.css'

const Header = () =>{
    return (
        <header className="header">
            <h1>ClipLobby</h1>
            <nav>
                <ul>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Registrar</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header