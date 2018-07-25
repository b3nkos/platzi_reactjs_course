import React, { Component } from 'react'
import SearchWidget from '../components/search-widget'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value)
  }

  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <SearchWidget
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
        handleInputChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default SearchContainer
