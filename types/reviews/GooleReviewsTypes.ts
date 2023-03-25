export interface GoogleReviewsResponse {
    html_attributions: any[];
    result: Result;
    status: string;
}

export interface Result {
    reviews: GoogleReview[];
}

export interface GoogleReview {
    author_name: string;
    author_url: string;
    language?: string;
    original_language?: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
    translated: boolean;
}
