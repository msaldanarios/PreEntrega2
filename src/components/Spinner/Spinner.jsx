import React from 'react'
import {RingLoader} from 'react-spinners'
import style from './spinner.module.css'

const Spinner = () => {
  return (
    <div className={style.container}>
        <RingLoader color="#87ceeb" />
    </div>
  )
}

export default Spinner