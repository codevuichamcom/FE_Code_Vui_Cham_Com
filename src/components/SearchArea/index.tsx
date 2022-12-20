import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './SearchArea.scss'

export interface SearchAreaProps {
  placeholder?: string
  onInputChange?: (text: string, e: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchArea = ({ placeholder = 'Place holder...', onInputChange }: SearchAreaProps) => {
  const [text, setText] = useState('')
  const [isShowClear, setIsShowClear] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value
    if (text !== '') {
      setIsShowClear(true)
    } else {
      setIsShowClear(false)
    }
    if (onInputChange) {
      onInputChange(text, e)
    }
    setText(text)
  }
  const onClearText = () => {
    setText('')
    setIsShowClear(false)
  }
  return (
    <div className="search-area">
      <FontAwesomeIcon icon={faSearch} />
      <input placeholder={placeholder} value={text} onChange={onChange} />
      {isShowClear && <FontAwesomeIcon icon={faClose} onClick={onClearText} />}
      {isShowClear && (
        <div className="search-area__result">
          <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchArea
