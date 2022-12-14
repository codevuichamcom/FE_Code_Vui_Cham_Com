import { HorizontalScrollList } from '~/components'
import { SlideShow } from '~/components'
import Layout from '~/pages/Layout'
import './Home.scss'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Layout>
        <SlideShow />
        <div className="home-page__wrapper">
          <HorizontalScrollList />
          <HorizontalScrollList />
          <HorizontalScrollList />
          <HorizontalScrollList />
        </div>
      </Layout>
    </>
  )
}

export default HomePage
