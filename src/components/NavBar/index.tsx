import { faBars, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CustomMouseEvent } from '../../types'
import './NavBar.scss'

interface NavBarProps {
  OnHambergerClick: (e: CustomMouseEvent) => void
}
const NavBar = ({ OnHambergerClick }: NavBarProps) => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__hamberger" onClick={OnHambergerClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="nav-bar__actions">
        <div className="nav-bar__actions__search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="nav-bar__actions__bell">
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </nav>
  )
}
export default NavBar
