import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Pagination,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { closeMessage } from "../../functions/message";
import { MyContext } from "@/src/context";
import formatDate from "../../functions/formatDate";

const Review = ({ setOpen, productId, numReviews }) => {
  const { messageApi, user } = useContext(MyContext);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disabledPagination, setDisabledPagination] = useState(false);
  const limit = 10;
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    getReviews(value);
  };
  async function getReviews(page) {
    setLoading(true);
    setDisabledPagination(true);
    const { data } = await axios.post("/api/product/review/get", {
      userId: user && user._id,
      product: productId,
      page: page,
      limit: limit,
    });
    setLoading(false);
    if (data.status === 200) {
      setReviews(data.data);
    } else closeMessage(messageApi, data.msg, "error");
    setDisabledPagination(false);
  }

  useEffect(() => {
    if (numReviews && !reviews && !loading) {
      getReviews(1);
    }
  }, []);
  return (
    <>
      {!numReviews ? (
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ mb: 2 }}
          >
            No reviews yet. Be the first to leave a review!
          </Typography>

          <ReviewBtn setOpen={setOpen} user={user} productId={productId} />
        </div>
      ) : loading && !reviews ? (
        <Stack>
          <Skeleton variant="text" height={40} width={150} />
          <Skeleton variant="text" height={20} width={250} />
          <Skeleton sx={{ marginTop: "-20px" }} variant="text" height={180} />
        </Stack>
      ) : (
        <>
          <ReviewBtn setOpen={setOpen} user={user} productId={productId} />
          {/* <button
            type="submit"
            onClick={() => setOpen(true)}
            id="submit"
            name="send"
            className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md"
          >
            Leave a Review
          </button> */}
          {reviews &&
            reviews.map((review, index) => {
              return (
                <div className="mt-8 first:mt-0" key={index}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {/* <Image
                    src={item.image}
                    width={45}
                    height={45}
                    className="h-11 w-11 rounded-full shadow"
                    alt=""
                  /> */}

                      <div className="ms-3 flex-1">
                        <p
                          //   href=""
                          className="text-lg font-semibold hover:text-orange-500 duration-500"
                        >
                          {review.user.name}{" "}
                          {user && user._id === review.user._id && "(You)"}
                        </p>
                        <p className="text-sm text-slate-400">
                          {formatDate(review.createdAt)}
                        </p>
                      </div>
                    </div>

                    {/* <button
                  onClick={() => setOpen(true)}
                  className="text-slate-400 hover:text-orange-500 duration-500 ms-5"
                >
                  <i className="mdi mdi-reply"></i> Reply
                </button> */}
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                    <Rating
                      name="rating"
                      defaultValue={review.rating}
                      precision={0.5}
                      size="small"
                      readOnly
                    />

                    <p className="text-slate-400 italic">{review.review}</p>
                  </div>
                </div>
              );
            })}
          {numReviews > limit && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Pagination
                count={Math.ceil(numReviews / limit)}
                page={page}
                onChange={handleChange}
                disabled={disabledPagination}
              />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Review;

function ReviewBtn({ user, setOpen, productId }) {
  return !user ? (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      sx={{ mb: 2 }}
    >
      Login To write a review.{" "}
      <Link href={`/auth/login?callbackUrl=/product/${productId}`}>
        <Button variant="text">Login</Button>
      </Link>
    </Typography>
  ) : (
    <button
      type="submit"
      onClick={() => setOpen(true)}
      id="submit"
      name="send"
      className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md"
    >
      Leave a Review
    </button>
  );
}

// comment form
{
  /* <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                <form className="mt-8">
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <div className="form-icon relative mt-2">
                          <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            placeholder="Name :"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <div className="form-icon relative mt-2">
                          <FiMail className="w-4 h-4 absolute top-3 start-4"></FiMail>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            placeholder="Email :"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-start">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <div className="form-icon relative mt-2">
                          <FiMessageCircle className="w-4 h-4 absolute top-3 start-4"></FiMessageCircle>
                          <textarea
                            name="comments"
                            id="comments"
                            className="ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            placeholder="Message :"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div> */
}
