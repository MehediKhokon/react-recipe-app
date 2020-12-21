import { useEffect, useState } from 'react';
import './App.css';
import Recipes from './components/Recipes';
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

const url = 'https://django-recipe-app.herokuapp.com'

function App() {
  const [recipes, setRecipes] = useState([])

  async function fetchData(){
    const res = await axios.get(url)
    const data = res.data
    setRecipes(data)
    console.log(data)
  }

  useEffect(()=>{
    fetchData()
    AOS.init({
      offset:200,
      duration: 2000
    })
  }, [])

  return (
    <div>
      <div className="container">
		    <div className="title text-center sticky-top mt-5">
			    <h1><span>Recipe APP</span></h1>
		    </div>
		    <div>
          {recipes.map((recipe)=>{
          return(
            <Recipes key={recipe.id} {...recipe} />
          )
          })}  
        </div>  
	    </div>
      <footer className="text-center text-white">
        @no right 
      </footer>
    </div>

  );
}

export default App;
