import {
  faChevronDown,
  faCirclePlay,
  faCompactDisc,
  faLock,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Collapsible from 'react-collapsible'
import './LearningMenu.scss'

const ColapsibleTrigger = () => {
  return (
    <div className="learning-menu__colapsible__trigger">
      <div className="learning-menu__colapsible__trigger__contents">
        <h3 className="learning-menu__colapsible__trigger__contents__title">
          1. Khái niệm kỹ thuật cần biết
        </h3>
        <p className="learning-menu__colapsible__trigger__contents__description">0/3 | 23:09</p>
      </div>
      <div className="learning-menu__colapsible__trigger__toggle-btn">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  )
}

export interface LearningMenuProps {
  isShowMenu: boolean
  onHambergerClick: () => void
}
const LearningMenu = ({ isShowMenu, onHambergerClick }: LearningMenuProps) => {
  if (!isShowMenu) return null
  return (
    <div className="learning-menu">
      <div className="learning-menu__header">
        <h1 className="learning-menu__header__title">Nội dung khóa học</h1>
        <button className="learning-menu__header__close-btn" onClick={onHambergerClick}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <Collapsible
        className="learning-menu__colapsible"
        open={true}
        trigger={<ColapsibleTrigger />}>
        <ul>
          <li className="learning-menu__colapsible__items learning-menu__colapsible__items--active">
            <div className="learning-menu__colapsible__items__wrapper">
              <h3 className="learning-menu__colapsible__items__wrapper__title">
                1. Mô hình Client - Server là gì?
              </h3>
              <p className="learning-menu__colapsible__items__wrapper__description">
                <FontAwesomeIcon icon={faCompactDisc} />
                <span>11:35</span>
              </p>
            </div>
          </li>
          <li className="learning-menu__colapsible__items">
            <div className="learning-menu__colapsible__items__wrapper">
              <h3 className="learning-menu__colapsible__items__wrapper__title">
                1. Mô hình Client - Server là gì?
              </h3>
              <p className="learning-menu__colapsible__items__wrapper__description">
                <FontAwesomeIcon icon={faCirclePlay} />
                <span>11:35</span>
              </p>
            </div>
            <div className="learning-menu__colapsible__items__actions">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </li>
          <li className="learning-menu__colapsible__items">
            <div className="learning-menu__colapsible__items__wrapper">
              <h3 className="learning-menu__colapsible__items__wrapper__title">
                1. Mô hình Client - Server là gì?
              </h3>
              <p className="learning-menu__colapsible__items__wrapper__description">
                <FontAwesomeIcon icon={faCirclePlay} />
                <span>11:35</span>
              </p>
            </div>
            <div className="learning-menu__colapsible__items__actions">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </li>
        </ul>
      </Collapsible>
      <Collapsible className="learning-menu__colapsible" trigger={<ColapsibleTrigger />}>
        <ul>
          <li className="learning-menu__colapsible__items">
            <div className="learning-menu__colapsible__items__wrapper">
              <h3 className="learning-menu__colapsible__items__wrapper__title">
                1. Mô hình Client - Server là gì?
              </h3>
              <p className="learning-menu__colapsible__items__wrapper__description">
                <FontAwesomeIcon icon={faCirclePlay} />
                <span>11:35</span>
              </p>
            </div>
            <div className="learning-menu__colapsible__items__actions">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </li>
          <li className="learning-menu__colapsible__items">
            <div className="learning-menu__colapsible__items__wrapper">
              <h3 className="learning-menu__colapsible__items__wrapper__title">
                1. Mô hình Client - Server là gì?
              </h3>
              <p className="learning-menu__colapsible__items__wrapper__description">
                <FontAwesomeIcon icon={faCirclePlay} />
                <span>11:35</span>
              </p>
            </div>
            <div className="learning-menu__colapsible__items__actions">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </li>
        </ul>
      </Collapsible>
      <Collapsible className="learning-menu__colapsible" trigger={<ColapsibleTrigger />}>
        <ul>
          <li className="learning-menu__colapsible__items">
            <div className="learning-menu__colapsible__items__wrapper">
              <h3 className="learning-menu__colapsible__items__wrapper__title">
                1. Mô hình Client - Server là gì?
              </h3>
              <p className="learning-menu__colapsible__items__wrapper__description">
                <FontAwesomeIcon icon={faCirclePlay} />
                <span>11:35</span>
              </p>
            </div>
            <div className="learning-menu__colapsible__items__actions">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </li>
          <li className="learning-menu__colapsible__items">
            <div className="learning-menu__colapsible__items__wrapper">
              <h3 className="learning-menu__colapsible__items__wrapper__title">
                1. Mô hình Client - Server là gì?
              </h3>
              <p className="learning-menu__colapsible__items__wrapper__description">
                <FontAwesomeIcon icon={faCirclePlay} />
                <span>11:35</span>
              </p>
            </div>
            <div className="learning-menu__colapsible__items__actions">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </li>
        </ul>
      </Collapsible>
    </div>
  )
}

export default LearningMenu
