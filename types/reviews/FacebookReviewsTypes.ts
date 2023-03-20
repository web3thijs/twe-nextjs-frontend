export interface FacebookReviewsResponse {
    data: FacebookReview[];
}

export interface FacebookReview {
    created_time:        string;
    recommendation_type: string;
    review_text:         string;
}
