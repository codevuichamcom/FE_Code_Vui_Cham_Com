import { useEffect, useState } from 'react'
import { NavBar } from '../../components'
import { CustomMouseEvent } from '../../types'
import './Home.scss'

const HomePage = (): JSX.Element => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const onMenu = (e: CustomMouseEvent) => {
    e.stopPropagation()
    setIsShowMenu(true)
  }

  const offMenu = () => {
    setIsShowMenu(false)
  }

  const onMenuClick = (e: CustomMouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    document.body.addEventListener('click', offMenu)
    return () => {
      document.body.removeEventListener('click', offMenu)
    }
  }, [])

  return (
    <div className="home-page">
      <NavBar OnHambergerClick={onMenu} />
      <main className="home-page__main">
        <section className="home-page__main__slide">Slide</section>
        <section>Pro course</section>
        <section>Free course</section>
        <section>Highlight article</section>
        <section>Highlight video</section>
      </main>
      <footer>Footer</footer>
      <div className={'home-page__overlay' + `${isShowMenu ? ' home-page__overlay--show' : ''}`}>
        <div className="home-page__menu" onClick={onMenuClick}>
          MENU
        </div>
      </div>
    </div>
  )
}

export default HomePage
