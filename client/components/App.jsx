import React from 'react'
import WineList from './WineList'
import WineInfo from './WineInfo'
import AddWine from './AddWine'

const App = () => (
  <div className='app-container'>
    <WineList />
    <WineInfo />
    <AddWine />
  </div>
)

export default App
