const initialState = {location: 'default'}

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        location: action.location
      }
    default:
      return state
  }
}

export default navigation
