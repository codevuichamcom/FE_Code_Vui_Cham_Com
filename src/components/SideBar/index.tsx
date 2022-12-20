import {
  faHouse,
  faLightbulb,
  faNewspaper,
  faPlus,
  faRoad
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VerticalList } from '~/components'
import './SideBar.scss'

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__create-btn">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <VerticalList
        data={[
          { id: 1, icon: faHouse, title: 'Home', link: '/' },
          { id: 2, icon: faRoad, title: 'Lộ trình', link: '/learning-path' },
          { id: 3, icon: faLightbulb, title: 'Học', link: '/course' },
          { id: 4, icon: faNewspaper, title: 'Blog', link: '/blog' }
        ]}
      />
    </div>
  )
}

export default SideBar
