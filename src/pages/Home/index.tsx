import { useEffect, useState } from 'react'
import { NavBar } from '~/components'
import HorizontalScrollList from '~/components/HorizontalScrollList'
import MenuMobile from '~/components/MenuMobile'
import Slide from '~/components/SlideShow'
import { CustomMouseEvent } from '~/types'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import './Home.scss'

const HomePage = (): JSX.Element => {
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
      <div className="home-page">
        <NavBar OnHambergerClick={onMenu} />
        <main className="home-page__main">
          <Slide />
          <div className="home-page__main__wrapper">
            <HorizontalScrollList />
            <HorizontalScrollList />
            <HorizontalScrollList />
            <HorizontalScrollList />
          </div>
        </main>
        <div className="home-page__footer">Footer</div>
      </div>
      <MenuMobile isShow={isShowMenu} />
    </>
  )
}

export default HomePage
