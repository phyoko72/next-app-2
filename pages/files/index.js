const File = (props) => {
    console.log('props: ',props);
    return ( <>
        <h1>File Page</h1>
        <ul>
            {props.products.map(x=>(
                <li key={x.id}>
                    <h1>{x.title}</h1>
                    <p>{x.price}</p>
                </li>
            ))}
        </ul>
    </> );
}
 
export default File;

export async function getStaticProps(){
    const res = await fetch('http://localhost:4000/products')
    const data = await res.json()

    return({
        props:{
            products: data
        }
    })
}