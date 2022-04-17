import NavConsole from './NavConsole'
import AppBody from './AppBody'
import '../styles/AppContainer.css'
const AppContainer = ()=> {
    return (
        <div className="app-container">
            <NavConsole />
            <AppBody />
        </div>
    )
}
export default AppContainer