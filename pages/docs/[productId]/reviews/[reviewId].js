import { useRouter } from "next/router";

const Review = () => {
    const router = useRouter()
    const {reviewId} = router.query
    console.log('review: ',reviewId);
    return ( <div>
        <h1>Review Id: {reviewId} </h1>
    </div> );
}
 
export default Review;