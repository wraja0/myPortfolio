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
            <div className='media-link-container'>
            <a href='https://github.com/wraja0'>
                <img className='github-thumbnail' src='https://i.imgur.com/bDxI74T.png'></img>
            </a>
            <p>
                    Github
                </p>
            </div>
        </div>
    )
}
export default NavConsole