import data from '../data/product.json';
import aa from '../data/productData';

const Home = () => {
  const info = data

  const detail = aa

  detail.map((x,y)=>console.log('what is x: ',y))

  const bb = [
    {
        pro1: {
            feature:'This is Product 1 Feature',
            concept:"This is Product 1 Concept"
            }
    },
    {
        pro2: {
            feature:"This is Product 2 Feature",
            concept:"This is Product 2 Concept"
            }
    },
    {
        pro3: {
            feature:"This is Product 3 Feature",
            concept:"This is Product 3 Concept"
            }
    }
];

console.log('bb: ',typeof bb);

const maindb = {
  
    title1:['This is Title 1 Text 1','This is Title 1 Text 2','This is Title 1 Text 3']
  ,
  
    title2:['This is Title 2 Text 1','This is Title 2 Text 2','This is Title 2 Text 3']
  ,
  
    title3:['This is Title 3 Text 1','This is Title 3 Text 2','This is Title 3 Text 3']
  
};


  return ( <>
    <h1>Home Page</h1>
    {/* <ul>
      {info.map(x=><li>{x.pro1.feature}</li>)}
    </ul> */}
  </> );
}
 
export default Home;