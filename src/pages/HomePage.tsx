import { Link } from 'react-router-dom'

const HomePage = (): JSX.Element => {
  return (
    <div className="HomePage">
      <h1>Home page</h1>
      <Link to={'/about'}>About us</Link>
    </div>
  )
}

export default HomePage
