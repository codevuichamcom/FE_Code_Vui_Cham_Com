import classnames from 'classnames'
import { CustomMouseEvent } from '~/types'
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
        MENU
      </div>
    </div>
  )
}

export default MenuMobile
