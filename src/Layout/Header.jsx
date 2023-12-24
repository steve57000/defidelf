import '../App.css';
import Logo from '../logo.png'

function Header() {
    return (
        <header className="App-header">
            <img className={"Logo"} src={Logo} alt={""} width={"150px"}></img>
        </header>
    )
}
export default Header
