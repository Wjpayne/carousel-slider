/** @jsxRuntime classic */
/** @jsx jsx */
import  { memo } from 'react'
import { css, jsx } from '@emotion/react'
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      css={css`
        display: flex;
        position: absolute;
        top: 50%;
        ${direction === 'right' ? `right: 25px` : `left: 25px`};
        height: 50px;
        width: 50px;
        justify-content: center;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        transition: transform ease-in 0.1s;
  
        &:hover {
          transform: scale(1.1);
        }
  
        img {
          transform: translateX(${direction === 'left' ? '-2' : '2'}px);
  
          &:focus {
            outline: 0;
          }
        }
      `}
    >
      {direction === 'right' ? <img alt = "right arrow" src={rightArrow} /> : <img alt = "left arrow" src={leftArrow} />}
    </div>
  )
}

export default memo(Arrow)