import React from 'react'
import {connect} from 'react-redux'
import WineList from './WineList'
import WineInfo from './WineInfo'
import AddWine from './AddWine'

const App = (props) => {
  const location = props.location
  let page
  if (location === 'addWine') {
    page = <div><WineList /><AddWine /></div>
  } else if (location === 'wineInfo') {
    page = <div><WineList /><WineInfo /></div>
  } else {
    page = <WineList />
  }
  return (
    <div className='app-container'>
      {page}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    location: state.navigation.location
  }
}

export default connect(mapStateToProps)(App)
