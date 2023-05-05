import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import { Container, Row } from 'react-bootstrap';

const ViewRecipe = () => {
    const  RecipeData=useLoaderData();
    const [liked,setLiked] = useState([])
  
  console.log(RecipeData);
  const {ViewRecipes}=RecipeData;
  
    return (
      <div>
      <Container>
      <Row>
   
      {
         ViewRecipes.map(r=> <Recipe
          liked={liked} 
          setLiked={setLiked}
         
        r={r}
         
         ></Recipe>
         )
      }
     
      </Row>
     </Container>

</div>

    );
};

export default ViewRecipe;