import React from 'react'
import Person from './Components/Person'
import Pairs from './Components/Pairs'
import slice from './pizza.jpeg';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: props.persons,
      newPerson: '',
      shuffledPersons: [],
    }
  }

  addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      id: this.state.persons.length + 1,
      name: this.state.newPerson,
    }

    const persons = this.state.persons.concat(personObject)

    this.setState({
      persons : persons,
      newPerson: ''
    })
  }

  handlePersonChange = (event) => {
    this.setState({ newPerson: event.target.value })
  }



  shuffle = () => {

    let persons = this.state.persons.slice(0)

    var currentIndex = persons.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = persons[currentIndex];
      persons[currentIndex] = persons[randomIndex];
      persons[randomIndex] = temporaryValue;
    }

    this.setState({
      shuffledPersons : persons,
    })
  }

  render() {
    return (
      <div>
        <h1>Pizzapari-generaattori</h1>
        <img src={slice} width="90" height="90"/>
        <form onSubmit={e => this.addPerson(e)}>
          <input class="myInput" value={this.state.newPerson} onChange={this.handlePersonChange}/>
          <div></div>
          <button class="myButton" type="submit">Lisää henkilö</button>
        </form>
        <ul>
          {this.state.persons.map(person => <Person key={person.id} person={person} />)}
        </ul>
        <button class="myButton" onClick={this.shuffle}>Arvo parit</button>
        <ul>
          {this.state.shuffledPersons.length > 0 && <Pairs persons={this.state.shuffledPersons}/>}
          </ul>
      </div>
    )
  }
}


export default App
