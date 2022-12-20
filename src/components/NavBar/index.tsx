import {
  faBars,
  faBell,
  faCheck,
  faEllipsis,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomMouseEvent } from '~/types'
import SearchArea from '../SearchArea'
import './NavBar.scss'

interface NavBarProps {
  OnHambergerClick: (e: CustomMouseEvent) => void
}
const NavBar = ({ OnHambergerClick }: NavBarProps): JSX.Element => {
  const [isShowNotiPopup, setIsShowNotiPopup] = useState(false)
  const [isShowNotiOptionsPopup, setIsShowNotiOptionsPopup] = useState(false)

  useEffect(() => {
    document.body.addEventListener('click', hideNotiPopup)
    return () => {
      document.body.removeEventListener('click', hideNotiPopup)
    }
  }, [])
  const onClickNotiPopup = (e: CustomMouseEvent): void => {
    e.stopPropagation()
    setIsShowNotiOptionsPopup(false)
  }
  const showNotiPopup = (e: CustomMouseEvent): void => {
    e.stopPropagation()
    setIsShowNotiPopup(!isShowNotiPopup)
  }
  const showNotiOptionsPopup = (e: CustomMouseEvent): void => {
    e.stopPropagation()
    setIsShowNotiOptionsPopup(!isShowNotiOptionsPopup)
  }
  const hideNotiPopup = (): void => {
    setIsShowNotiPopup(false)
    setIsShowNotiOptionsPopup(false)
  }

  return (
    <nav className="nav-bar">
      <div className="nav-bar__hamberger" onClick={OnHambergerClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="nav-bar__logo">
        <Link to="/">
          <img
            src="https://webbynat.files.wordpress.com/2017/05/logo-funnylinecode-01.jpg?w=521"
            alt="logo"
          />
        </Link>
        <h4>Code là phải vui</h4>
      </div>
      <div className="nav-bar__search-area">
        <SearchArea placeholder="Tìm kiếm khóa học, bài viết, video, ..." />
      </div>

      <div className="nav-bar__actions">
        <div className="nav-bar__actions__search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="nav-bar__actions__my-course">
          <h4>Khóa học của tôi</h4>
        </div>
        <div className="nav-bar__actions__bell" onClick={showNotiPopup}>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="nav-bar__actions__avatar">
          <img
            src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
            alt="avatar"
          />
        </div>
        {isShowNotiPopup && (
          <div className="nav-bar__actions__noti-popup" onClick={onClickNotiPopup}>
            <div className="nav-bar__actions__noti-popup__header">
              <div className="nav-bar__actions__noti-popup__header__title">Thông báo</div>
              <div
                className="nav-bar__actions__noti-popup__header__options"
                onClick={showNotiOptionsPopup}>
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
              {isShowNotiOptionsPopup && (
                <div className="nav-bar__actions__noti-popup__header__options__popup">
                  <div className="nav-bar__actions__noti-popup__header__options__popup__wrapper">
                    <FontAwesomeIcon icon={faCheck} />
                    Đánh dấu tất cả đã đọc
                  </div>
                </div>
              )}
            </div>
            <div className="nav-bar__actions__noti-popup__wrapper">
              <div className="nav-bar__actions__noti-popup__wrapper__image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nQji8v4BZ_itcdrHK0EIXeHRywB3zkYZIA&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <div className="nav-bar__actions__noti-popup__wrapper__contents">
                <div className="nav-bar__actions__noti-popup__wrapper__contents__message">
                  Chào mừng Code Vui Chấm Com. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới
                  cùng bạn nhé ❤️
                </div>
                <div className="nav-bar__actions__noti-popup__wrapper__contents__time">
                  2 năm trước
                </div>
              </div>
            </div>
            <div className="nav-bar__actions__noti-popup__wrapper">
              <div className="nav-bar__actions__noti-popup__wrapper__image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nQji8v4BZ_itcdrHK0EIXeHRywB3zkYZIA&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <div className="nav-bar__actions__noti-popup__wrapper__contents">
                <div className="nav-bar__actions__noti-popup__wrapper__contents__message">
                  Hề Lố ❤️
                </div>
                <div className="nav-bar__actions__noti-popup__wrapper__contents__time">
                  2 năm trước
                </div>
              </div>
            </div>
            <div className="nav-bar__actions__noti-popup__wrapper">
              <div className="nav-bar__actions__noti-popup__wrapper__image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nQji8v4BZ_itcdrHK0EIXeHRywB3zkYZIA&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <div className="nav-bar__actions__noti-popup__wrapper__contents">
                <div className="nav-bar__actions__noti-popup__wrapper__contents__message">
                  Test thông báo ❤️
                </div>
                <div className="nav-bar__actions__noti-popup__wrapper__contents__time">
                  2 năm trước
                </div>
              </div>
            </div>
            <div className="nav-bar__actions__noti-popup__wrapper">
              <div className="nav-bar__actions__noti-popup__wrapper__image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nQji8v4BZ_itcdrHK0EIXeHRywB3zkYZIA&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <div className="nav-bar__actions__noti-popup__wrapper__contents">
                <div className="nav-bar__actions__noti-popup__wrapper__contents__message">
                  Học đi nhìn cái giề ❤️
                </div>
                <div className="nav-bar__actions__noti-popup__wrapper__contents__time">
                  2 năm trước
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
