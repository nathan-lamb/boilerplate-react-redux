const initialState = {wine: []}

const wines = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WINE':
      return {
        wine: [
          ...state.wine,
          {
            id: action.id,
            wineName: action.wineName,
            wineType: action.wineType,
            year: action.year,
            winery: action.winery
          }
        ]
      }

    default:
      return state
  }
}

export default wines
