import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.scss";

SwiperCore.use([Autoplay, Pagination]);

const testimonialsData = [
  {
    quote:
      "Muhammed\u2019s expertise and problem-solving skills were instrumental in our project\u2019s success. His dedication and ability to quickly adapt to new challenges made working with him a seamless experience. Highly recommended for anyone seeking a committed and skilled developer.",
    image: "/image/Burak Kaya.jpg",
    name: "Burak Kaya",
    position: "Frontend Developer",
    country: "Turkey",
  },
  {
    quote:
      "Muhammed\u2019s creativity and technical expertise significantly enhanced our project. His ability to tackle complex problems and deliver results on time was impressive. Working with him was a fantastic experience, and his contributions were invaluable.",
    image: "/image/Can Aydin.jpg",
    name: "Can Aydin",
    position: "Full Stack Developer",
    country: "Turkey",
  },
  {
    quote:
      "Muhammed consistently delivered high-quality work and demonstrated exceptional technical skills throughout our collaboration. His proactive approach and attention to detail greatly contributed to the project\u2019s success. A true professional who is a pleasure to work with.",
    image: "/image/Serkan Arslan.jpg",
    name: "Serkan Arslan",
    position: "Website Developer",
    country: "Turkey",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p className="justify">
          Hear what others have to say about their experience working with me,
          and discover how my skills and dedication have made a difference.
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
          }}
          className="init-swiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p className="justify">
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.position}</h4>
                <h4>{testimonial.country}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
