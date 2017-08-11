import React from 'react'
import {connect} from 'react-redux'

import wines from '../../data/wines'
import {navigate} from '../actions'

const WineList = (props) => {
  const navigate = props.navigate
  return (
    <div className='wine-list'>
      <h3>Wine Cellar List</h3>
      <button>Add new</button><br></br>
      {wines.map((wine) => {
        return (
          <div key={wine.id}>
            <p>{wine.name}</p><button onClick={() => navigate('wineInfo')}>Info</button><br/>
          </div>
        )
      })}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    target: state.target
  }
}

const mapDispatchToProps = {
  navigate: navigate
}
export default connect(mapStateToProps, mapDispatchToProps)(WineList)
