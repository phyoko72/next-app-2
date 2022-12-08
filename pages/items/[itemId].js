import { useRouter } from "next/router";

const Item = () => {
    const router = useRouter()
    const itemId = router.query.itemId
    return ( <>
        <h1>Item Page - {itemId} </h1>
    </> );
}
 
export default Item;