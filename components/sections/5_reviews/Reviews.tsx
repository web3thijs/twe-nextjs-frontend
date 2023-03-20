import Button from "../../shared/Button";
import Title from "../../shared/Title";
import Image from "next/image";
import { GoogleReview } from "../../../types/reviews/GooleReviewsTypes";
import { FacebookReview } from "../../../types/reviews/FacebookReviewsTypes";
import ReviewCard from "./ReviewCard";

type Props = {
  googleReviews: GoogleReview[];
  facebookReviews: FacebookReview[];
};

const Reviews = ({ googleReviews, facebookReviews }: Props) => {
  return (
    <>
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:space-x-6">
          <div className="">
            <Title
              small={"Reviews"}
              big={"Wat vonden de klanten van onze service?"}
            ></Title>
            <div className="mt-6">
              <div className="flex content-center">
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
              </div>

              <div className="mt-6 flex content-center">
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
              </div>
            </div>
          </div>
          {facebookReviews.map((item: FacebookReview, index: number) => {
            if(!item.review_text) return
            return <ReviewCard text={item.review_text} key={index}/>
          })}

          {googleReviews.map((item: GoogleReview, index: number) => {
            if(!item.text) return
            return <ReviewCard text={item.text} key={index}/>
          })}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
