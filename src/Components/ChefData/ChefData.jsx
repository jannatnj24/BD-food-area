import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ChefInfoCard from '../ChefInfoCard/ChefInfoCard';

const ChefData = () => {
    const [LoadCardData, setLoadCardData] = useState([]);

    useEffect(() => {
      fetch("https://bd-food-area-server-e-jannatnj24.vercel.app/ChefData")
        .then((response) => response.json())
        .then((data) => setLoadCardData(data));
    }, []);

    console.log(LoadCardData);
    return (
        <Container >
        <Row>
      
         {
            LoadCardData.map(info=> <ChefInfoCard    
            key={info.id}
            info={info}
            ></ChefInfoCard>
            
            )
         }
         </Row>
       
    </Container>
    );
};

export default ChefData;