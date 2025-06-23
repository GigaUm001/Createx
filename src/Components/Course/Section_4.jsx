import React, { useState } from 'react'
import hero from './../../assets/img/Section_4_hero.png'

const lessons = [
    {
        title: 'Lesson 1. Aliquet lectus urna viverra in odio.',
        content:
            'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisl, tempus risus, odio mi suscipit sed...',
    },
    {
        title: 'Lesson 2. Orci commodo, viverra orci mollis ut euismod.',
        content:
            'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisl, tempus risus, odio mi suscipit sed...',

    },
    {
        title: 'Lesson 3. Sagittis vitae facilisi rutrum amet mauris quisque vel.',
        content:
            'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisl, tempus risus, odio mi suscipit sed...',

    },
    {
        title: 'Lesson 4. In id dolor quis nunc, urna hendrerit pharetra.',
        content:
            'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisl, tempus risus, odio mi suscipit sed...',

    },
    {
        title: 'Lesson 5. Est, ut tempus id rutrum facilisi.',
        content:
            'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisl, tempus risus, odio mi suscipit sed...',

    },
    {
        title: 'Lesson 6. Amet nec in pellentesque.',
        content:
            'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisl, tempus risus, odio mi suscipit sed...',

    },
    {
        title: 'Lesson 7. Massa vel arcu mauris, id vel rhoncus mattis quis.',
        content:
            'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisl, tempus risus, odio mi suscipit sed...',

    },
    {
        title: 'Lesson 8. Neque, cursus sapien nullam id.',
        content:
            'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisl, tempus risus, odio mi suscipit sed...',

    },
]

const Section_4 = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="section-4 container">
            {/* Left Block */}
            <div className="left-block">
                <div data-aos="fade-right">
                    <p className="subheading">FOR WHOM?</p>
                    <h2 className="heading">Who will benefit from the course:</h2>
                </div>
                <ul data-aos="fade-left" className="benefit-list">
                    <li>Specialists with more than 1 year of active work experience</li>
                    <li>Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</li>
                    <li>Professional designers who want to feel more confident in UX</li>
                    <li>Specialists who would like to structure their knowledge, fill in the gaps</li>
                </ul>
            </div>

            {/* Right Block */}
            <div className="right-block">
                <div>
                    <p className="subheading">COURSE PROGRAM</p>
                    <h2 className="heading">What will you learn</h2>
                    <div data-aos="fade-right" className="accordion">
                        {lessons.map((lesson, idx) => (
                            <div
                                key={idx}
                                className={`accordion-item ${activeIndex === idx ? 'active' : ''}`}
                                onClick={() => setActiveIndex(idx)}
                            >
                                <div className="accordion-title">
                                    <span className="symbol">{activeIndex === idx ? '−' : '+'}</span>
                                    <span className="lesson-title">{lesson.title}</span>
                                </div>

                                <div className={`accordion-content-wrapper ${activeIndex === idx ? 'open' : ''}`}>
                                    <p className="accordion-content">{lesson.content}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <img data-aos="fade-left" src={hero} alt="student illustration" />
            </div>
        </div>
    )
}

export default Section_4
