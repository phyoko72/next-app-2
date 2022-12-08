import Link from "next/link";

const Hello = () => {
    return ( <>
        <h1>This is Hello Page</h1>
        <strong>
        <Link href={'/users'}>Go To Users</Link>
        </strong>
        
    </> );
}
 
export default Hello;