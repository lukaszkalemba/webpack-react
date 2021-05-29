import { useState } from 'react';
import webpack from '../images/webpack.png';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 1,
};

const Recipes = () => {
  const [recipe, setRecipe] = useState(elvenShieldRecipe);

  return (
    <div>
      <img src={webpack} alt='' width='100' />
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield</button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlets
      </button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
