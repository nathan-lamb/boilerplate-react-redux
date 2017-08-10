import React from 'react'

// I think this will need to be a class based function when state is introduced

const AddWine = () => {
  return (
    <div className='add-wine'>
      <h3>Add Wine</h3>
      <input type="text" name="Wine Name" placeholder="Wine Name"/>
      <br/>
      <input type="text" name="Type" placeholder="Type"/>
      <br/>
      <input type="text" name="Year" placeholder="Year"/>
      <br/>
      <input type="text" name="Winery" placeholder="Winery"/>
      <br/>
      <button>Submit</button>
    </div>
  )
}

export default AddWine
