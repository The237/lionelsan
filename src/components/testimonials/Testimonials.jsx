import React from "react";
import "./testimonials.css";
import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.jpg";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AV1,
    name: "Elvira ONDOUA",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis veritatis debitis commodi necessitatibus dolores sint! Ad totam autem corrupti omnis deleniti quos maxime laborum incidunt voluptate ipsa. Fugit, fugiat.",
  },
  {
    id: 2,
    avatar: AV2,
    name: "Elvira ONDOUA",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae itaque impedit quos neque sapiente dolorem non vel sit autem, iure molestiae veniam fugit! Sapiente, nemo, ipsum molestiae amet illum dignissimos debitis deserunt tempore iure dolorum, in rem obcaecati non.",
  },
  {
    id: 3,
    avatar: AV3,
    name: "Edouard OWONA",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ipsa repellat nisi adipisci atque magni recusandae eligendi doloremque laboriosam quasi, eos inventore animi iste quod voluptatibus enim dignissimos hic optio a aspernatur! Laborum porro architecto veritatis veniam sunt! Totam adipisci, laboriosam nulla aspernatur aliquid optio reiciendis distinctio molestias culpa porro.",
  },
  {
    id: 4,
    avatar: AV4,
    name: "Yvan ABESSOLO",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis veritatis debitis commodi necessitatibus dolores sint! Ad totam autem corrupti omnis deleniti quos maxime laborum incidunt voluptate ipsa. Fugit, fugiat.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
