let nextWordId = 0
let nextWineId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
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
