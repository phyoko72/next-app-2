import { useRouter } from "next/router";

const Post = ({post}) => {
    // console.log('props of PostId: ',post);

    const router = useRouter()
    const result = router.isFallback

    if(result){
        return <h1>Loading...</h1>
    }

    console.log('result: ',result);
    return ( 
    <>
        {/* <h1>Post Id Page of Posts Folder</h1>
        <hr /> */}
        <h1>{post.id}./ {post.title}</h1>
        <p>Body: {post.body}</p>
    </> );
}
 
export default Post;

export async function getStaticPaths(){
    const req = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await req.json()
    // const paths = posts.map(x=>({
    //     params:{postId:x.id.toString()},
    // }))

    const paths = [
                    {
                        params: {postId:'1'}
                    },
                    {
                        params: {postId:'2'}
                    },            
                    {
                        params: {postId:'3'}
                    }
                ]

    return{
        paths,
        fallback: 'blocking'
    }
};

// export async function getStaticPaths(){
//     return{
//         paths:[
//             {
//                 params: {postId:'1'}
//             },
//             {
//                 params: {postId:'2'}
//             },            
//             {
//                 params: {postId:'3'}
//             }
//         ],
//         fallback: false
//     }
// };

export async function getStaticProps(context){
    const {params} = context
    console.log('params@props: ',context);
    const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await req.json()



    if(!data.id){
        return{
            notFound: true
        }
    }

    console.log('data: ',data);

    return({
        props:{
            post: data
        }
    })
}