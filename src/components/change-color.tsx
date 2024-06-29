import './change-color.css'
// import { useRef } from 'react'


const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const ChangeColor = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const randomColor = getRandomColor()
    const button = event.currentTarget
    button.style.backgroundColor = randomColor
  }

  return (
    <div>
        <div>
            <button className='btn' onClick={handleClick}>click me</button>
            <button className='btn' onClick={handleClick}>click me</button>
            <button className='btn' onClick={handleClick}>click me</button>
            <button className='btn' onClick={handleClick}>click me</button>
        </div>

        <div>
            <button className='btn' onClick={handleClick}>click me</button>
            <button className='btn' onClick={handleClick}>click me</button>
            <button className='btn' onClick={handleClick}>click me</button>
            <button className='btn' onClick={handleClick}>click me</button>
        </div>

        <div>
            <button className='btn' onClick={handleClick}>click me</button>
            <button className='btn' onClick={handleClick}>click me</button>
            <button className='btn' onClick={handleClick}>click me</button>
            <button className='btn' onClick={handleClick}>click me</button>
        </div>
    </div>
  )
}

export default ChangeColor
