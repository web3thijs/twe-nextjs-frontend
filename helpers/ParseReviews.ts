import { parse } from "path"
import { FacebookReview } from "../types/reviews/FacebookReviewsTypes"
import { GoogleReview } from "../types/reviews/GooleReviewsTypes"
import dateToTimeDescription from "./DateToTimeDescription"
import shuffleArray from "./ShuffleArray"

export type ParsedReview = {
    origin: 'Facebook' | 'Google' | unknown
    text: string
    author: string
    user_img: string
    created_on: string
}

const parseReviews = (googleReviews: GoogleReview[], facebookReviews: FacebookReview[]): ParsedReview[] => {
    const combinedReviews: (GoogleReview | FacebookReview)[] = [
        ...googleReviews,
        ...facebookReviews,
    ];

    const parsedReviews: ParsedReview[] = combinedReviews.map((review) => {
        let origin
        let text = ''
        let author = ''
        let user_img = ''
        let created_on = ''

        if ('text' in review) {
            origin = 'Google'
            text = review.text;
            author = review.author_name ?? '';
            user_img = review.profile_photo_url ?? '';
            created_on = review.relative_time_description
        } else if ('review_text' in review) {
            origin = 'Facebook'
            text = review.review_text
            author = 'Anoniem'
            user_img = '/reviews/user.svg'
            created_on = dateToTimeDescription(review.created_time);
        }

        return {
            text,
            author,
            user_img,
            created_on,
            origin,
        };
    });

    const trimmedReviews = parsedReviews.filter((review) => review.text !== "");

    const googleReviewsParsed = trimmedReviews.filter((review) => review.origin === 'Google');
    const nonGoogleReviews = trimmedReviews.filter((review) => review.origin === 'Facebook');

    const slicedGoogleReviews = googleReviewsParsed.slice(0, 3);
    const slicedNonGoogleReviews = nonGoogleReviews.slice(0, 5);

    const firstGoogleReview = slicedGoogleReviews[0];
    const remainingShuffledGoogleReviews = slicedGoogleReviews.slice(1);

    const shuffledReviews = [
        firstGoogleReview,
        ...shuffleArray([
            ...remainingShuffledGoogleReviews,
            ...slicedNonGoogleReviews,
        ]),
    ];

    return shuffledReviews;
};

export default parseReviews