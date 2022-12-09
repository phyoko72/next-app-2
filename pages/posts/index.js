import Link from 'next/link';
import {users} from '../data'

const PostList = ({posts}) => {

    console.log('posts: ',posts);

    return ( <>
        <h1>Post List</h1>

    <ol>
        {posts.map(x=>(
            <div key={x.id}>
                <Link href={`/posts/${x.id}`}>
                    <li>{x.title}</li>
                </Link>
            </div>

            
        ))}
    </ol>
    </> );
}
 
export default PostList;

export async function getStaticProps(){

    const req = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await req.json()

    // const data = users

    return({
        props:{
            posts:data.slice(0,3),
            params:'testing'
        }
    })
}