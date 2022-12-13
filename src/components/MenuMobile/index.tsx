import classnames from 'classnames'
import { CustomMouseEvent } from '~/types'
import VerticalList from '../VerticalList'
import {
  faUser,
  faBookOpen,
  faHouse,
  faRoad,
  faLightbulb,
  faNewspaper,
  faRightFromBracket,
  faBookmark,
  faCircleInfo,
  faUsers
} from '@fortawesome/free-solid-svg-icons'

import './MenuMobile.scss'

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
                { id: 1, icon: faUser, title: 'Trang cá nhân', link: '#' },
                { id: 2, icon: faBookOpen, title: 'Khóa học của tôi', link: '#' }
              ]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__menu">
            <VerticalList
              data={[
                { id: 1, icon: faHouse, title: 'Trang chủ', link: '#' },
                { id: 2, icon: faRoad, title: 'Lộ trình', link: '#' },
                { id: 3, icon: faLightbulb, title: 'Khóa học', link: '#' },
                { id: 4, icon: faNewspaper, title: 'Blog', link: '#' }
              ]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__saved">
            <VerticalList
              data={[{ id: 1, icon: faBookmark, title: 'Bài viết đã lưu', link: '#' }]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__reference">
            <VerticalList
              data={[
                { id: 1, icon: faCircleInfo, title: 'Giới thiệu', link: '#' },
                { id: 2, icon: faUsers, title: 'Cơ hội việc làm', link: '#' }
              ]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__logout">
            <VerticalList
              data={[{ id: 1, icon: faRightFromBracket, title: 'Đăng xuất', link: '#' }]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuMobile
