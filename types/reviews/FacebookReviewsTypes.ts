export interface FacebookReviewsResponse {
    data: FacebookReview[];
}

export interface FacebookReview {
    created_time:        string;
    has_rating:          boolean;
    has_review:          boolean;
    recommendation_type: string;
    review_text:         string;
}

