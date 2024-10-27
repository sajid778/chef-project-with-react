import { useEffect } from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Recipes = ({addRecipeToQueue}) => {
    // const [recipes, setRecipes] = useState([])

    // useEffect(() => {
    //     fetch('./recipes.json')
    //     .then(res => res.json())
    //     .then(data => setRecipes(data))
    // }, [])

    const [recipes, setRecipes] = useState([]);

    useEffect( () =>{
     fetch('recipes.json')
     .then(res => res.json())
     .then(data => setRecipes(data))
    }, [])

    // console.log(recipes);
    
    return (
        <div className="w-2/3 my-6"> 
    
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {recipes.map(recipe => (
           <div key={recipe.recipe_id} className="card bg-base-100 shadow-xl border-2 rounded-lg">
           <figure className="px-8 pt-6">
             <img className="md:h-52 w-full rounded-xl"
               src={recipe.recipe_image}
               alt="Shoes" />
           </figure>
           <div className="card-body p-9">
             <h2 className="card-title font-bold text-xl text-gray-800">{recipe.recipe_name}</h2>
             <p>{recipe.short_description}</p>
             <h3 className="text-lg text-gray-800">Igredients: {recipe.ingredients.length}</h3>
             <ul className="p-4">
              {recipe.ingredients.map((item,idx) => <li className="text-gray-600 list-disc" key={idx}>{item}</li>)}

             </ul>
             <div className="flex gap-4">
              <div className="flex items-center ">
              <i className="fa-regular fa-clock mr-2 text2xl"></i>
              <p>{recipe.preparing_time} minute.</p>
              <i className="fa-solid fa-fire-flame-curved ml-4 mr-2 text2xl"></i>
          
              <p>{recipe.calories} Calories.</p>
              </div>
             </div>
             <div className="card-actions ">
               <button onClick={() => addRecipeToQueue(recipe)} className="btn bg-green-400 rounded-full px-8 py-3 text-xl text-gray-800 mt-6 font-medium">Want To Cook</button>
             </div>
           </div>
         </div>
            ))}
           </div>
         </div>

    );
};

export default Recipes;