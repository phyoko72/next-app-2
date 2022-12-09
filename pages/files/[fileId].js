import { useRouter } from "next/router";

const FileId = ({files}) => {
    const router = useRouter()
    if(router.isFallback){
        return <h1>Loading . . .</h1>
    }
    return ( <>
        <h2>{files.title}</h2>
        <h6>{files.price}</h6>
        <p>{files.description}</p>
    </> );
}
 
export default FileId;

export async function getStaticPaths(){
    return({
        paths:[{
            params:{fileId:'1'}
        }],
        fallback: true
    })
}

export async function getStaticProps(context){

    const {params} = context
    console.log('Generating Data');
    const res = await fetch(`http://localhost:4000/products/${params.fileId}`)
    const data = await res.json()

    if(!data.id){
        return{
            notFound:true
        }
    }

    return({
        props:{
            files: data
        }
    })
}