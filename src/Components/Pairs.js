import React from 'react'
import slice from '../pizza.jpeg';

const Pairs = ({ persons }) => {

  let text = []

  console.log(persons)

  for (let i = 0; i < persons.length; i++) {

    if (i % 2 === 1) {
      text.push(<td>{persons[i].name}</td>)
      text.push(<tr></tr>)
    } else {
      text.push(<td>{persons[i].name}</td>)
      text.push(<td><img src={slice} width='20' height='20'></img></td>)
    }
  }

  return (
    <table>
      <tr>
        <th>Parit:</th>
      </tr>
      {text}
    </table>
  )
}

export default Pairs
