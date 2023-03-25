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
import {
  CalendarIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

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

        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-10 lg:max-w-none lg:grid-cols-3"
        >
                {reviews.map((review, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {review.text}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {review.author}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {review.created_on}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={review.user_img}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
        </ul>
                    {/* <Image
                      className="h-14 w-14 object-cover"
                      src={review.user_img}
                      alt=""
                      width={56}
                      height={56}
                    /> */}
        <div className="flex justify-center mt-16">
          <div className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 flex items-center">
            <div className="hidden sm:block my-auto">
              <InformationCircleIcon className="h-5 w-5 text-blueish" />
            </div>
            <div className="text-left my-auto ml-4 text-sm">
              <p className="text-gray">
                Onze reviews worden dynamisch opgehaald van{" "}
                <a
                  className="cursor-pointer text-greenish underline text-sm"
                  href="https://www.google.com/maps/place/TW+Elek+BV/@51.1216653,5.162142,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6cbe8cf8533e3:0xf48f5de54e148f81!8m2!3d51.1216653!4d5.162142!16s%2Fg%2F11rn0wjv_l"
                  target={"_blank"} rel="noreferrer"
                >
                  <span className="text-sm">Google</span>
                </a>{" "}
                en{" "}
                <a
                  className="cursor-pointer text-greenish underline text-sm"
                  target={"_blank"} rel="noreferrer"
                  href="https://www.facebook.com/TwElekBV/reviews"
                >
                  <span className="text-sm">Facebook</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

function QuoteIcon(props: any) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}
