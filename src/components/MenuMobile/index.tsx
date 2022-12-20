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
                { id: 1, icon: faUser, title: 'Trang cá nhân', link: '/profile' },
                { id: 2, icon: faBookOpen, title: 'Khóa học của tôi', link: '/my-course' }
              ]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__menu">
            <VerticalList
              data={[
                { id: 1, icon: faHouse, title: 'Trang chủ', link: '/' },
                { id: 2, icon: faRoad, title: 'Lộ trình', link: '/lerning-path' },
                { id: 3, icon: faLightbulb, title: 'Khóa học', link: '/course' },
                { id: 4, icon: faNewspaper, title: 'Blog', link: '/blog' }
              ]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__saved">
            <VerticalList
              data={[{ id: 1, icon: faBookmark, title: 'Bài viết đã lưu', link: '/bookmark' }]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__reference">
            <VerticalList
              data={[
                { id: 1, icon: faCircleInfo, title: 'Giới thiệu', link: '/about' },
                { id: 2, icon: faUsers, title: 'Cơ hội việc làm', link: '/carrer' }
              ]}
            />
          </div>
          <div className="menu-mobile__contents__wrapper__logout">
            <VerticalList
              data={[{ id: 1, icon: faRightFromBracket, title: 'Đăng xuất', link: '/logout' }]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuMobile
