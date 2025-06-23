import React from 'react'

const Section_3 = () => {
    return (
        <div className='section-3'>
            <div className="container">
                <div data-aos="fade-up" className='main-steps'>
                    <h2 data-aos="fade-up" className='section-3-mini-text'>MAIN STEPS</h2>
                    <h1 data-aos="fade-up" className='section-3-text'>Online learning process</h1>

                    <div data-aos="fade-down" className="steps">
                        <div data-aos="fade-up" className='step'>
                            <h2>01  <span>---------------------------</span></h2>
                            <p>Watching online video lectures</p>
                            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                        </div>
                        <div data-aos="fade-down" className='step'>
                            <h2>02  <span>---------------------------</span></h2>
                            <p>Passing Test</p>
                            <p>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.</p>
                        </div>
                        <div data-aos="fade-up" className='step'>
                            <h2>03  <span>---------------------------</span></h2>
                            <p>Curator's feedback</p>
                            <p>Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.</p>
                        </div>
                        <div data-aos="fade-down" className='step'>
                            <h2>04  <span>---------------------------</span></h2>
                            <p>Corrections if needed</p>
                            <p>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
                        </div>
                    </div>
                </div>

                <div className="discount-form">
                    <div className="discount-left">
                        <h2 data-aos="fade-right">20% discount for early birds!</h2>
                        <form>
                            <div className="input-group">
                                <div data-aos="fade-down">
                                    <label>Full name</label>
                                    <input type="text" placeholder="Your full name" />
                                </div>
                                <div data-aos="fade-up">
                                    <label>Email</label>
                                    <input type="email" placeholder="Your working email" />
                                </div>
                                <div data-aos="fade-down">
                                    <label>Phone</label>
                                    <input type="tel" placeholder="Your phone number" />
                                </div>
                                <button data-aos="fade-right" type="submit">Join the course</button>
                            </div>
                        </form>
                    </div>

                    <div className="discount-right">
                        <div data-aos="fade-down" className="countdown">
                            <div>
                                <span>06</span>
                                <small>Days</small>
                            </div>
                            <div>
                                <span>18</span>
                                <small>Hours</small>
                            </div>
                            <div>
                                <span>24</span>
                                <small>Mins</small>
                            </div>
                            <div>
                                <span>12</span>
                                <small>Sec</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_3