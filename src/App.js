import { useEffect, useState } from 'react'
import './App.css'
import Recipes from './components/Recipes'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SkeletonCard from './components/SkeletonCard'

const url = 'https://django-recipe-app.herokuapp.com'

function App() {
  const [recipes, setRecipes] = useState(null)

  async function fetchData() {
    const res = await axios.get(url)
    const data = await res.data
    setRecipes(data)
    console.log(data)
  }

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
    })
    AOS.refresh()

    const timer = setTimeout(() => {
      fetchData()
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <div className='container'>
        <div className='title text-center sticky-top mt-5'>
          <h1>
            <span>Recipe APP</span>
          </h1>
        </div>
        <div>
          {recipes &&
            recipes.map((recipe) => {
              return <Recipes key={recipe.id} {...recipe} />
            })}
        </div>
        {!recipes && <SkeletonCard />}
      </div>
      <footer className='text-center text-white'>@no right</footer>
    </div>
  )
}

export default App
