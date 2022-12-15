import { HorizontalScrollList } from '~/components'
import { SlideShow } from '~/components'
import Layout from '~/pages/Layout'
import './Home.scss'

const HomePage = (): JSX.Element => {
  return (
    <Layout>
      <main className="home-page">
        <SlideShow />
        <div className="home-page__list">
          <HorizontalScrollList />
          <HorizontalScrollList />
          <HorizontalScrollList />
          <HorizontalScrollList />
        </div>
      </main>
    </Layout>
  )
}

export default HomePage
