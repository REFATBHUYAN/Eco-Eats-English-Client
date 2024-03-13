import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

const reviews = [
  {
    id: 1,
    description:
      "Can't cook Eid al-Adha beef without Chui Jhal? So I ordered from Equots to get authentic thick Chui Jhal. Thank you for sending very good quality fresh Chui Jhal. The Chui Jhal was delivered wrapped in a banana leaf and then packed to prevent spoilage.",
    name: "Shoeb Mahmood",
    address: "Dhaka",
    url: "https://www.facebook.com/shoaib.mahmood.12/posts/pfbid07ZLq2GpXtCvPe7mgsW1D9jqmsFXsnpNiNEFrEGmmJkxHZAiJpbh5TZo5T4g1jwfal",
    photo: "/media/review/review-1.jpg",
  },
  {
    id: 2,
    description:
      "Alhamdulillah. Ordered Chui Jhal for the first time. I am impressed with their credibility and hospitality. Especially the payment after receiving the product is not only a reflection of their deep faith in customers but also a business strategy of trusting them. I wish the company all the success.",
    name: "Shafiqul Islam Manna",
    address: "Barisal",
    url: "https://www.facebook.com/safiqul.islammanna/posts/pfbid0FAmdkh6gCB6eJUsuidJdnf9VSECXxapu1JW8chax4UupgVhHy4YEJMv554BczLN9l",
    photo: "/media/review/review-2.jpg",
  },
  {
    id: 3,
    description:
      "When my brother realized that I had absolutely no idea about Chui, he sent me a bunch of Chui trees as a gift along with the Chui that I ordered. And nothing to say about the test, first class Chui.",
    name: "Mallik Ghalib Shahriar",
    address: "Dhaka",
    url: "https://www.facebook.com/Mallik.Galib.Shahriar/posts/pfbid02HatJzFtG2Abkhr9ogCKh9eag9kngoQvHtNuL9xKKk7gDPL6DxtDdzTL9PMJnmdK5l",
    photo: "/media/review/review-3.jpg",
  },
  {
    id: 4,
    description:
      "Where can I get good quality Chuizhal at a low price? I was looking for a long time and finally I found it at Ekoits. I really liked the fast delivery and packaging of the page. It was wrapped in a banana leaf and then delivered in a package. ",
    name: "Shahnoor Islam",
    address: "Dhaka",
    url: "https://www.facebook.com/tania.islamtina/posts/pfbid02DdmBs4T6JNn6Boh8oVHtfQWHLL6Q3vdYTTNJETKbHGej3w7n44YFZUKXwY3E9W1bl",
    photo: "/media/review/review-4.jpg",
  },
  {
    id: 5,
    description:
      "I received the delivery today. Your product quality is very good. So I am very happy. Thank you very much.",
    name: "Jasim Raihan",
    address: "Narayanganj",
    url: "https://www.facebook.com/jasim.rayhan.3/posts/pfbid0SeQVwxD2c7cgMMGu1jJrYNHUKKdRBJ4gNAqvq33v3sAq4vRi2KNAQ1h4g4upD7wZl",
    photo: "/media/review/review-5.jpg",
  },
  {
    id: 6,
    description:
      "Played with meat for the first time today. Alhamdulillah liked it. Thanks for sending good stuff and good luck.",
    name: "Rashedul Hasan Shrabon",
    address: "Dhaka",
    url: "https://www.facebook.com/rashedulhasan.srabon/posts/pfbid02xMXENRWvzBAVYQMFK8D3pKKvUDHMfmdUwTz9bZAKah1gtqnLbTxNPTEs1pswsJ8Tl",
    photo: "/media/review/review-6.jpg",
  },
  {
    id: 7,
    description:
      "Thank you Narsingdi, Madhavadi for arranging to enjoy the taste of fresh Chui Jhal. First time in my life.",
    name: "Suman Ahmed",
    address: "Narsingdi",
    url: "https://www.facebook.com/somon.ahammad.9634/posts/pfbid02bRS4J8VJTywUojkow4GruQS5bvoYcmdRzAaX7oYMMzQRPTFWX5iRgZAze6eeumLol",
    photo: "/media/review/review-7.jpg",
  },
  {
    id: 8,
    description:
      "I love the chuis. It really enhances the flavor of the beef. Highly recommend the equites to everyone. Thank you.",
    name: "Syeda Sunny",
    address: "Dhaka",
    url: "https://www.facebook.com/syeda.sani/posts/pfbid02QeKB84PLUbjQaaBL2L9debKtXAqeNvpjPtS1PjnxMzoBDpkKXfRvxiyYcWK5AkRpl",
    photo: "/media/review/review-8.jpg",
  },
  {
    id: 9,
    description:
      "Best product with best Chui. Ordered yesterday and got delivery today. Service and quality is 100 out of 100. All the best for Ecoits.",
    name: "SA Shashi",
    address: "Dhaka",
    url: "https://www.facebook.com/bechara.shoshi/posts/pfbid021CYDpeBTMAHwd3T11LCamQtv49dLViJsct2Kv4BccB7oKt29pK4uDnBvK2FjUGYZl",
    photo: "/media/review/review-9.jpg",
  },
  {
    id: 10,
    description:
      "Received very good service. Product quality is great. And the product is organic. Appreciate this page. Thank you.",
    name: "Sagar Hossain",
    address: "Dhaka",
    url: "https://www.facebook.com/howlader.sagor.520/posts/pfbid038Pq63p89DMNQVwGGnrwibhMNGi6tbGouyzwLui54jviPgcgjiwf4yB5aUuntFRaSl",
    photo: "/media/review/review-10.jpg",
  },
  {
    id: 11,
    description:
      "I have ordered twice and both times I got the best quality Chuizhal, I also ordered from other places. But no one can give the best like them.",
    name: "Alam Ahmed Hriday",
    address: "Dhaka",
    url: "https://www.facebook.com/TofayelAlamBD/posts/pfbid02u6a6iQEoKofFpEwwrxLMDiVYofy1c64sb71uQyX1zZEEGkfh8MUWVUAqizBukoLXl",
    photo: "/media/review/review-11.jpg",
  },
  {
    id: 12,
    description:
      "I trust them to send money before receiving the product and they keep my faith. Got the product right and recommend it.",
    name: "Sajjad Hussain",
    address: "Dhaka",
    url: "https://www.facebook.com/shazzad.hossain1/posts/pfbid0wP9rufPMoDzTDkCLJGvXz2HBRZMCSDwVZwJBAxnMKxFHHWLh2UY9doH8zrVnHdT3l",
    photo: "/media/review/review-12.jpg",
  },
  {
    id: 13,
    description:
      "Thank you very much to Equites for giving me the freshest chews and teaching me how to use them. The price is very reasonable for the product.",
    name: "Beach Width",
    address: "Chittagong",
    url: "https://www.facebook.com/saikot.bapai01/posts/pfbid02E7GSMxhNWL6FfXc6FQQhhWfgX2PKarFLjc8PVX9XDVX34g5aDVNTnhT5ZAMamTQMl",
    photo: "/media/review/review-13.jpg",
  },
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div id="review" className="">
      {/* chevron-right */}
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-1 top-28 z-50 bg-slate-200 hover:bg-green-500 active:bg-green-600 ease-in duration-75 rounded-full p-1 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-left text-white"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-1 top-28 z-50 bg-slate-200 hover:bg-green-500 active:bg-green-600 ease-in duration-75 rounded-full p-1 ml-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right text-white"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </button>
    </div>
  );
};

const Review = () => {
  return (
    <div id="review" className="my-28">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-12">
        Customer Reviews
      </h1>
      <div>
        <div className="App relative">
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              //   slidesPerView="auto"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="group cursor-pointer">
                    <a href={review.url} target="_blank">
                      <div className="h-72 w-full bg-slate-50 rounded-lg p-9 group-hover:bg-slate-100 ease-in duration-75">
                        <div className="flex gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((item) => (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-star-filled text-amber-400"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path
                                d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                                stroke-width="0"
                                fill="currentColor"
                              />
                            </svg>
                          ))}
                        </div>
                        <p className="text-slate-400 mb-8 line-clamp-3 font-light">
                          {review.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-4">
                            <img
                              className="h-11 w-11 rounded-full"
                              src={review.photo}
                              alt=""
                            />
                            <div className="text-start">
                              <h1 className="text-slate-600 group-hover:text-green-500 font-semibold line-clamp-1">
                                {review.name}
                              </h1>
                              <p className="text-slate-500">{review.address}</p>
                            </div>
                          </div>
                          <a
                            href={review.url}
                            target="_blank"
                            className="hover:text-green-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-brand-facebook"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}

              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
