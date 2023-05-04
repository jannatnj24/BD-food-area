import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import { Container, Row } from 'react-bootstrap';

const ViewRecipe = () => {
    const  RecipeData=useLoaderData();
  
  console.log(RecipeData);
  const {ViewRecipes}=RecipeData;
  
    return (
      <div>
      <Container>
      <Row>
   
      {
         ViewRecipes.map(r=> <Recipe
         
         
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