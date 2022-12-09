import { NavBar } from '../../components'
import './Home.scss'
const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      <NavBar />
      <main className="home-page__main">
        <section className="home-page__main__slide">Slide</section>
        <section>Pro course</section>
        <section>Free course</section>
        <section>Highlight article</section>
        <section>Highlight video</section>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default HomePage
