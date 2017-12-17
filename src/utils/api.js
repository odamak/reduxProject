// const API_ID = process.env.REACT_APP_API_ID
// const APP_KEY = process.env.REACT_APP_APP_KEY7
const API_ID = 'aff48845'
const APP_KEY = 'a06b0c4fed74effbd2dc7867ebf35ea0'

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}