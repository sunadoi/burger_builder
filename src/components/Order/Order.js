import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  // const ingredients = [];

  // for (let ingredientName in props.ingredients) {
  //   ingredients.push({
  //     name: ingredientName,
  //     amount: props.ingredients[ingredientName]
  //   })
  // }

  // const ingredientOutput = ingredients.map(ig => {
  //   return <span
  //     style={{
  //       textTransform: 'capitalize',
  //       display: 'inline-block',
  //       margin: '0 8px',
  //       border: '1px solid #ccc',
  //       padding: '5px'
  //     }}
  //     key={ig.name}>{ig.name} ({ig.amount})</span>
  // })

  const ingredientOutput = Object.keys(props.ingredients)
    .map(igKey => {
      return <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}
        key={igKey}>{igKey} ({props.ingredients[igKey]})</span>
    })

  return (
    <div className={classes.Order}>
      {/* <p>{props.ingredients.map((ingredient, index) => {
        return (ingredient[index])
      })}</p> */}
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default order;