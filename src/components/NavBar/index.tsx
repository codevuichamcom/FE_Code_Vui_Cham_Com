import './NavBar.scss'
import hamberger from '/src/assets/hamberger.svg'
import search from '/src/assets/search.svg'
import notification from '/src/assets/notification.svg'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__hamberger">
        <img src={hamberger} alt="hamberger" width={17.5} />
      </div>

      <div className="nav-bar__actions">
        <img src={search} alt="search" width={18} />
        <img src={notification} alt="notification" width={18} />
      </div>
    </nav>
  )
}
export default NavBar
