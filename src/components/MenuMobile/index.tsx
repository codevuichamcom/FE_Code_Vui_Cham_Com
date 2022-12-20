import {
  faBookmark,
  faBookOpen,
  faCircleInfo,
  faHouse,
  faLightbulb,
  faNewspaper,
  faRightFromBracket,
  faRoad,
  faUser,
  faUsers
} from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import { CustomMouseEvent } from '~/types'
import { VerticalList } from '~/components'
import './MenuMobile.scss'
import { PAGE } from '~/constants'

export interface MenuMobile {
  isShow: boolean
}
const MenuMobile = ({ isShow }: MenuMobile) => {
  const onMenuClick = (e: CustomMouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className={classnames('menu-mobile__overlay', { 'menu-mobile__overlay--show': isShow })}>
      <div className="menu-mobile__contents" onClick={onMenuClick}>
        <div className="menu-mobile__contents__user">
          <div className="menu-mobile__contents__user__image">
            <img src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" />
          </div>
          <div className="menu-mobile__contents__user__username">Code Vui Chấm Com</div>
        </div>
        <div className="menu-mobile__contents__wrapper">
          <div className="menu-mobile__contents__wrapper__profile">
            <VerticalList
              data={[
                { id: 1, icon: faUser, title: 'Trang cá nhân', link: PAGE.PROFILE },
                { id: 2, icon: faBookOpen, title: 'Khóa học của tôi', link: PAGE.MY_COURSE }
              ]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__menu">
            <VerticalList
              data={[
                { id: 1, icon: faHouse, title: 'Trang chủ', link: PAGE.HOME },
                { id: 2, icon: faRoad, title: 'Lộ trình', link: PAGE.LEARNING_PATH },
                { id: 3, icon: faLightbulb, title: 'Khóa học', link: PAGE.COURSES },
                { id: 4, icon: faNewspaper, title: 'Blog', link: PAGE.BLOG }
              ]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__saved">
            <VerticalList
              data={[{ id: 1, icon: faBookmark, title: 'Bài viết đã lưu', link: PAGE.BOOKMARK }]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__reference">
            <VerticalList
              data={[
                { id: 1, icon: faCircleInfo, title: 'Giới thiệu', link: PAGE.ABOUT },
                { id: 2, icon: faUsers, title: 'Cơ hội việc làm', link: PAGE.CARRER }
              ]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__logout">
            <VerticalList
              data={[{ id: 1, icon: faRightFromBracket, title: 'Đăng xuất', link: PAGE.LOGOUT }]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuMobile
