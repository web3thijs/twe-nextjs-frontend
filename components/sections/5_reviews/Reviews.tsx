import Button from "../../shared/Button";
import Title from "../../shared/Title";
import Image from "next/image";
import { GoogleReview } from "../../../types/reviews/GooleReviewsTypes";
import { FacebookReview } from "../../../types/reviews/FacebookReviewsTypes";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import parseReviews, { ParsedReview } from "../../../helpers/ParseReviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { CalendarIcon } from "@heroicons/react/24/outline";

type Props = {
  googleReviews: GoogleReview[];
  facebookReviews: FacebookReview[];
};

const Reviews = ({ googleReviews, facebookReviews }: Props) => {
  const [reviews, setReviews] = useState<ParsedReview[]>();

  useEffect(() => {
    setReviews(parseReviews(googleReviews, facebookReviews));
  }, [googleReviews, facebookReviews]);

  if (!reviews) return <p>No reviews</p>;

  return (
    <>
      <div className="container">
        <Title
          outline="center"
          small={"Reviews"}
          big={"Wat vonden de klanten van onze service?"}
        ></Title>
        <div className="grid lg:grid-cols-2 lg:space-x-6">
          <div className="">
            <div className="mt-6">
              {/* <div className="flex content-center">
                <div className="relative w-8 h-8">
                  <Image
                    alt="Facebook logo"
                    src={"/reviews/facebook.svg"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex my-auto ml-5">
                  {[...Array(5)].map((x, i) => (
                    <div key={i} className={"relative ml-2 w-6 h-6"}>
                      <Image
                        alt="Star filled"
                        src={"/reviews/star-fill.svg"}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </div>
              </div> */}

              {/* <div className="mt-6 flex content-center">
                <div className="relative w-8 h-8">
                  <Image
                    alt="Google logo"
                    src={"/reviews/google.svg"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex my-auto ml-5">
                  {[...Array(5)].map((x, i) => (
                    <div key={i} className={"relative ml-2 w-6 h-6"}>
                      <Image
                        alt="Star filled"
                        src={"/reviews/star-fill.svg"}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
          {/* {facebookReviews.map((item: FacebookReview, index: number) => {
            if(!item.review_text) return
            return <ReviewCard text={item.review_text} key={index}/>
          })}

          {googleReviews.map((item: GoogleReview, index: number) => {
            if(!item.text) return
            return <ReviewCard text={item.text} key={index}/>
          })} */}
          <div></div>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {reviews.map((review: ParsedReview) => (
              <div
                key={review.author}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${review.text}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-50 relative">
                      <Image
                        src={review.user_img}
                        layout="fill"
                        alt="user_avatar"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {review.author}
                      </div>
                      <div className="text-gray-600 flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-1" />
                        {`${review.created_on}`}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
