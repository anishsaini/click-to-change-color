import './change-color.css'
import { useRef } from 'react'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const ChangeColor = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    const randomColor = getRandomColor()
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = randomColor
    }
  }

  return (
    <div>
      <button className='btn' ref={buttonRef} onClick={handleClick}>click me</button>
    </div>
  )
}

export default ChangeColor
