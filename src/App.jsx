import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipe from "./components/OurRecipe";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recepeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const handleRemove = id =>{
    // find which recipe to remove
    const deleteRecipe = recepeQueue.find(recipe => recipe.recipe_id === id)

    // remove from want to Cook Table
    const updatedQueue = recepeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    setPreparedRecipe([...preparedRecipe, deleteRecipe])
  }
  
  const addRecipeToQueue = recipe => {
  const isExist = recepeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    
  if (!isExist) {
    setRecipeQueue([...recepeQueue, recipe])
  }
  else{
    alert('Recipe already exist in the que')
  }
  }
 
  const calculateTimeAndCalories = (time, calorie) =>{
      setTotalTime(totalTime+time)
      setTotalCalories(totalCalories+calorie)
  }
  
  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <section className="flex flex-col md:flex-row gap-6">
        {/* cards section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar handleRemove={handleRemove} recepeQueue={recepeQueue} preparedRecipe={preparedRecipe}
        calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
       totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;