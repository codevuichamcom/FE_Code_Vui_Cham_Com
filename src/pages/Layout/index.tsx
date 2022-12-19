import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import { MenuMobile, NavBar } from '~/components'
import { BANNER_HEIGHT } from '~/constants'
import { CustomMouseEvent } from '~/types'

import './Layout.scss'
export interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [isTransparentNav, setTransparentNav] = useState(true)

  const onMenu = (e: CustomMouseEvent) => {
    e.stopPropagation()
    setIsShowMenu(true)
    disableBodyScroll(document.body)
  }

  const offMenu = () => {
    setIsShowMenu(false)
    enableBodyScroll(document.body)
  }

  const onscroll = () => {
    if (window.scrollY >= BANNER_HEIGHT) {
      setTransparentNav(false)
    } else {
      setTransparentNav(true)
    }
  }
  useEffect(() => {
    document.body.addEventListener('click', offMenu)
    window.addEventListener('scroll', onscroll)
    return () => {
      document.body.removeEventListener('click', offMenu)
      window.removeEventListener('scroll', onscroll)
    }
  }, [])

  const transparentNavClass = isTransparentNav ? ['layout', 'transparent-nav'] : ['layout']
  return (
    <>
      <div className={classnames(...transparentNavClass)}>
        <NavBar OnHambergerClick={onMenu} />
        <>{children}</>
        <footer className="layout__footer">Footer</footer>
      </div>
      <MenuMobile isShow={isShowMenu} />
    </>
  )
}

export default Layout
