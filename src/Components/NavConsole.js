import '../styles/NavConsole.css'
const NavConsole = ()=> {
    return (
        <div className="console">
            <h3 className='name-header'>Wajeah Raja</h3>
            <img className='profile-thumbnail' src='https://i.imgur.com/jyPZwXI.png'  />
            <ul className='sections-list'>
                <li><a href='#'>About me</a></li>
                <br></br>
                <li><a href='#'>My work</a></li>
                <br></br>
                <li><a href='#'>Contact me</a></li>
            </ul>
            <div className='media-link-container'>
                <a className='media-link' href='https://github.com/wraja0'>
                    <img className='media-thumbnail' src='https://i.imgur.com/bDxI74T.png'></img> 
                </a>
                <a className='media-link' href='https://www.linkedin.com/in/wajeahraja/'>
                    <img className='media-thumbnail' src='https://i.imgur.com/ZbeuUxU.png'></img>
                </a>
            </div>
            <h1>
               <a href='#'>My Blog</a>
            </h1>
        </div>
    )
}
export default NavConsole