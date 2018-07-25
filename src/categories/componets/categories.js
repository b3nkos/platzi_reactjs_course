import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search-container'

function Categories(props) {
  return (
    <div className="Categories">
      <Search/>
      {
        props.categories.map((category) => {
          return (
            <Category
              key={category.id}
              {...category}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories