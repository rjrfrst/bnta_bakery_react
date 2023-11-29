import { useState } from "react";
import Cake from "../components/cake";

const CakeContainer = () => {

    // Containers should have states therefore: 
    const [victoriaSponge, setvictoriaSponge] = useState({
        cakeName: "Victoria Sponge",
           ingredients: [
               "eggs",
              "butter",
              "sugar",
              "self-raising flour",
              "baking powder",
              "milk"
          ],
            price: 5,
            rating: 5
    });

    const [teaLoaf, setTeaLoaf] = useState({
            cakeName: "Tea Loaf",
              ingredients: [
                  "eggs",
                 "oil",
                 "dried fruit",
                 "sugar",
                 "self-raising flour",
                 "strong tea",
             ],
             price: 2,
             rating: 3
       });
    const [carrotCake, setCarrotCake] = useState({
        cakeName: "Carrot Cake",
          ingredients: [
           "carrots",
             "walnuts",
             "oil",
             "cream cheese",
             "flour",
             "sugar",
          ],
          price: 8,
          rating: 5
   } );


    return ( 
        <>
        <h1>BNTA Bakery (React)</h1>
        {/*Properties here will be stored in an object */}
        {/*properties = {product="Victoria Sponge",  price=10, rating=5}*/} 

        <Cake
            cake = {victoriaSponge}
        />

        <Cake 
            cake = {teaLoaf}
        />

        <Cake
            cake ={carrotCake}    
        />

        </>
        

     );
}
 
export default CakeContainer;