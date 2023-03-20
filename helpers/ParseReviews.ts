import { FacebookReview } from "../types/reviews/FacebookReviewsTypes"
import { GoogleReview } from "../types/reviews/GooleReviewsTypes"

type Props = {
    googleReviews: GoogleReview[]
    facebookReviews: FacebookReview[]
}

type ParsedReviews = {
    text: string
    author?: string 
}

const ParseReviews = ({}: Props): string => {
    return ""
}