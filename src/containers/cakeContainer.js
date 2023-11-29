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

    const [teaLoafCount, setTeaLoafCount] = useState(0);
    const [carrotCakeCount, setCarrotCakeCount] = useState(0);


    return ( 
        <>
        <h1>BNTA Bakery (React)</h1>
        {/*Properties here will be stored in an object */}
        {/*properties = {product="Victoria Sponge",  price=10, rating=5}*/} 

        <Cake
            cake = {victoriaSponge}
        />

        </>

     );
}
 
export default CakeContainer;