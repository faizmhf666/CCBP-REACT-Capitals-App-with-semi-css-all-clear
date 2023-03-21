import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({selectedId: event.target.value})
  }

  capitalFinder = () => {
    const {selectedId} = this.state
    const changedCapital = countryAndCapitalsList.find(
      each => each.id === selectedId,
    )
    return changedCapital.country
  }

  render() {
    const {selectedId} = this.state
    const selectedCountry = this.capitalFinder(selectedId)
    return (
      <div className="app-container">
        <div className="content-container">
          <h1>Countries And Capitals</h1>
          <div className="capital-container">
            <select className="drop-down" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <div>
            <p className="country">{selectedCountry}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
