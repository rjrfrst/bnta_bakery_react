// insert the destructured data
// have to pass the props from the container 

const Cake = ({cake}) => {
    return ( 
        <>
        <h3>{cake.cakeName}</h3>
        <p>ingredients: {cake.ingredients.join(' ')}</p>
        <p>price: {cake.price}</p>
        <p>rating: {cake.rating}</p>
        <hr />

        </>
     );
}
 
export default Cake;