import React,{ Component } from 'react'
import axios from 'axios'

const HOC = (WrappedComponent) => {
  class WithTableHOC extends Component{
    state = {
      characters : []
    }

    getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          this.setState({ characters : res.data.results })
        })
    }

    render = () => {
      return (
        <WrappedComponent
          getCharacters = { this.getCharacters }
          characters = { this.state.characters }
        />
      )
    }
  }
  return WithTableHOC
}

export default HOC