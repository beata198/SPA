import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: [],
      pageNum:1,
    }
  }
  componentDidMount() {
    const url = 'https://rickandmortyapi.com/api/character/?page=${this.state.pageNum}';

    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({ character: res.results}))
  }
  render() {
    const { character } = this.state;

    return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Rick and Morty</h1>
    </div>
    <div className="box">
      { character.map((character) => (
        <div className="card" key={character.id}>
          <div className="card-header">
            <h4>{character.name}</h4> 
            <img class="card-img-top" src={character.image} alt="fota"></img>
          </div>
          <div className="card-body">
             <p className="card-text">Status - {character.status}</p>
            <p className="card-text">Species - {character.species}</p>
            <p className="card-text"> Gender - {character.gender}</p>

          </div>
          </div>
      ))}
    </div>
    </div>
    )
  }
}

export default App;
