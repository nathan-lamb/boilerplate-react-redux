export const navigate = (target) => {
  return {
    type: 'NAVIGATE',
    location: target
  }
}

export const addWine = (wine) => {
  return {
    type: 'ADD_WINE',
    id: nextWineId++,
    wineName: 'null',
    wineType: 'null',
    year: 'null',
    winery: 'null'
  }
}
