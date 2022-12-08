import User from "../components/User";

const Users = (props) => {

    console.log('props of Users: ',props);

    // fetch('https://api.weatherapi.com/v1/current.json?key=9d1ae1ea330b47a9bdc41506220812&q=London&aqi=no')    
    fetch('http://api.weatherapi.com/v1/current.json?key=9d1ae1ea330b47a9bdc41506220812&q=London&aqi=no')
    .then(res=>res.json())
    .then(data=>{
        console.log('weather: ',data);

    })
    .catch(err=>console.log(err))

    return ( 
    <>
        <h1>Users</h1>
        <h2>Static Generation</h2>
        <User username={props.nextText}/>
        <User username='Yokohama'/>
        <hr />
        <ul>
            {props.data.map(x=>(
                <div key={x.id}>
                   <li>{x.name}</li>
                    <li>{x.email}</li>
                </div>

            ))}
        </ul>
    </> );
}
 
export default Users;

export async function getStaticProps(){
    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await req.json()

//9d1ae1ea330b47a9bdc41506220812
    const test = 'Hello World';
    return({
        props:{
            texting: test,
            nextText: 'Yamaguchi',
            data: res
        }
    })
}