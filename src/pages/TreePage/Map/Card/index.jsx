import React from 'react'
import s from "./index.module.scss"

const Card = ({title, description}) => {
  return (
    <div className={s.root}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
    </div>
  )
}

export default Card