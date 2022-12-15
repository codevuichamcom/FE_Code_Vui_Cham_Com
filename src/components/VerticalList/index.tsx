import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './VerticalList.scss'

export type VerticalListDataType = {
  id: number
  icon: IconDefinition
  title: string
  link: string
}
export interface VerticalListProps {
  data: VerticalListDataType[]
}
const VerticalList = ({ data }: VerticalListProps) => {
  return (
    <ul className="vertical-list">
      {data.map(({ id, icon, title, link }) => (
        <li key={id} className="vertical-list__wrapper">
          <Link to={link}>
            <FontAwesomeIcon icon={icon} />
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default VerticalList
