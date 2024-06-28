import './change-color.css'
import { useRef } from 'react'

const ChangeColor = () => {
  const buttonRef = useRef(null)

  const handleClick = () => {
    const buttonElement = buttonRef.current as HTMLButtonElement | null
    if (buttonElement && buttonElement.style.backgroundColor === 'red') {
      buttonElement.style.backgroundColor = ''
    } else if (buttonElement) {
      buttonElement.style.backgroundColor = 'red'
    }
  }

  return (
    <div>
      <button className='btn' ref={buttonRef} onClick={handleClick}>click me</button>
    </div>
  )
}

export default ChangeColor
