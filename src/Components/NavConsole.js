import '../styles/NavConsole.css'
const NavConsole = ()=> {
    return (
        <div className="console">
            <h3 className='name-header'>Wajeah Raja</h3>
            <img className='profile-thumbnail' src='https://i.imgur.com/jyPZwXI.png'  />
            <ul>
                <li><a href='#'>About me</a></li>
                <li><a href='#'>My work</a></li>
                <li><a href='#'>Contact me</a></li>
            </ul>
        </div>
    )
}
export default NavConsole