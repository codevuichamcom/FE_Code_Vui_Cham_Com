import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import React, { useEffect, useState } from 'react'
import { MenuMobile, NavBar } from '~/components'
import { CustomMouseEvent } from '~/types'

export interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const onMenu = (e: CustomMouseEvent) => {
    e.stopPropagation()
    setIsShowMenu(true)
    disableBodyScroll(document.body)
  }

  const offMenu = () => {
    setIsShowMenu(false)
    enableBodyScroll(document.body)
  }

  useEffect(() => {
    document.body.addEventListener('click', offMenu)

    return () => {
      document.body.removeEventListener('click', offMenu)
    }
  }, [])

  return (
    <>
      <div className="layout">
        <NavBar OnHambergerClick={onMenu} />
        <main className="layout__main">{children}</main>
        <div className="layout__footer">Footer</div>
      </div>
      <MenuMobile isShow={isShowMenu} />
    </>
  )
}

export default Layout
