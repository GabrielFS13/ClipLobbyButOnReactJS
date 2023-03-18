import './Header.css'
import { Link } from 'react-router-dom'

const Header = () =>{
    return (
        <header className="header">
            <Link to='/' className='titleLink'>ClipLobby</Link>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Registrar</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header