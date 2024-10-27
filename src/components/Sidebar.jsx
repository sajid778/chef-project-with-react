/* eslint-disable react/prop-types */


const Sidebar = ({recepeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories,totalTime,totalCalories}) => {
    return (

        
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 ">
         {/* want to Cook */}

         <div className="overflow-x-auto">
            <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-600 text-center pb-2">
                Want To Cook: {recepeQueue.length}
            </h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calaroies</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
{recepeQueue.map((recipe, idx) =>  
     <tr className="hover" key={idx}>
   <th>{idx + 1}</th>
   <td>{recipe.recipe_name}</td>
   <td>{recipe.preparing_time}</td>
   <td>{recipe.calories}</td>
   <td> <button onClick={ () => {handleRemove(recipe.recipe_id)
    calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
   }}
    className="btn bg-green-400 rounded-full px-2 py-1 md:px-6 md:py-2 text-gray-800 mt-6 font-medium">Preparing</button></td>
 </tr>)}
</tbody>
  </table>
          </div>
        
  {/* Currenty Cooking Table */}

  <div className="overflow-x-auto mt-8">
            <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-600 text-center pb-2">
                Currently Cooking: {preparedRecipe.length}
            </h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calaroies</th>
      </tr>
    </thead>
    <tbody>
{preparedRecipe.map((recipe, idx) =>  
     <tr className="hover" key={idx}>
   <th>{idx + 1}</th>
   <td>{recipe.recipe_name}</td>
   <td>{recipe.preparing_time}</td>
   <td>{recipe.calories}</td>
  
 </tr>)}
 <tr className="border-none">
 <th></th>
   <td></td>
   <td>total Time = {totalTime}</td>
   <td>Total Calories = {totalCalories}</td>
 </tr>

</tbody>
  </table>
          </div>

        </div>
    );
};

export default Sidebar;

