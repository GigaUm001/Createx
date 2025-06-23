import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import hero from './../../assets/img/Section_5_hero.png';
const testimonials = [
    {
        quote: `This course gave me the confidence to finally switch careers. The instructors explained everything clearly, and the real-world projects made a huge difference.`,
        name: 'Ele Pena',
        position: 'Junior Web Developer, Career Change Program',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        quote: `I was looking for something to boost my resume, and this course did exactly that. I gained practical skills that helped me stand out during interviews.`,
        name: 'Dleanor Sena',
        position: 'Marketing Assistant, Digital Media Course',
        avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
    },
    {
        quote: `Before the course, I struggled to understand how to use design tools properly. Now, I can confidently manage UI projects and collaborate with developers.`,
        name: 'Lanor Nena',
        position: 'Product Designer, Creative Design Track',
        avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
    },
    {
        quote: `The lessons were well-paced, and I appreciated the quick feedback from mentors. I applied what I learned immediately at my job.`,
        name: 'Canor Seida',
        position: 'Operations Manager, Business Automation Program',
        avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
    },
    {
        quote: `The course completely exceeded my expectations. The instructors were knowledgeable and supportive throughout. I’ve gained skills that helped me land a new job within a month.`,
        name: 'Sophia Carter',
        position: 'Marketing Specialist, Digital Strategy Program',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
        quote: `I loved how practical and hands-on the program was. The projects made learning engaging and I now feel confident using the tools in my daily work.`,
        name: 'Liam Johnson',
        position: 'UI/UX Designer, Product Design Course',
        avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    },
    {
        quote: `This program was a game-changer for my career. The structure was clear, and the mentorship was incredibly helpful. Highly recommend it to anyone looking to upskill.`,
        name: 'Emily Nguyen',
        position: 'Data Analyst, Data Science Bootcamp',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
        quote: `I had no tech background before joining, but the course made everything digestible. I now work full-time as a developer and love what I do!`,
        name: 'James Robinson',
        position: 'Frontend Developer, Web Development Program',
        avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
        quote: `The community and support system were amazing. I always had someone to turn to for feedback or help. I’d definitely take another course here.`,
        name: 'Olivia Brown',
        position: 'Project Manager, Agile & Scrum Workshop',
        avatar: 'https://randomuser.me/api/portraits/women/76.jpg',
    },
];


const Section_5 = () => {
    return (
        <div className="section-5 container">
            {/* Testimonials */}
            <div className="testimonials">
                <p className="subheading">TESTIMONIALS</p>
                <h2 className="heading">What our students say</h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    className="testimonial-swiper"
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card">
                                <p className="quote">“{t.quote}”</p>
                                <div className="author">
                                    <img src={t.avatar} alt={t.name} />
                                    <div>
                                        <p className="name">{t.name}</p>
                                        <p className="position">{t.position}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Registration */}
            <div className="registration">
                <div data-aos="fade-right" className="img-block">
                    <img src={hero} alt="illustration" />
                </div>

                <form className="register-form">
                    <p data-aos="fade-right" className="offer">LEAVE A REQUEST NOW AND GET 20% OFF!</p>
                    <h2 data-aos="fade-left" className="heading">Register for the course</h2>

                    <input data-aos="fade-right" type="text" placeholder="Your full name" />
                    <input data-aos="fade-left" type="email" placeholder="Your working email" />
                    <input data-aos="fade-right" type="tel" placeholder="Your phone number" />

                    <button data-aos="fade-left" type="submit">Join the course</button>
                </form>
            </div>
        </div>
    )
}

export default Section_5
