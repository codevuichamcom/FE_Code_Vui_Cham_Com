import {
  faHouse,
  faLightbulb,
  faNewspaper,
  faPlus,
  faRoad
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VerticalList } from '~/components'
import { PAGE } from '~/constants'
import './SideBar.scss'

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__create-btn">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <VerticalList
        data={[
          { id: 1, icon: faHouse, title: 'Home', link: PAGE.HOME },
          { id: 2, icon: faRoad, title: 'Lộ trình', link: PAGE.LEARNING_PATH },
          { id: 3, icon: faLightbulb, title: 'Học', link: PAGE.COURSES },
          { id: 4, icon: faNewspaper, title: 'Blog', link: PAGE.BLOG }
        ]}
      />
    </div>
  )
}

export default SideBar
