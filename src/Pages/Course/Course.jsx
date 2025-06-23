import React from 'react'
import Header from '../../Components/Course/Header'
import Section_1 from '../../Components/Course/Section_1'
import Section_2 from '../../Components/Course/Section_2'
import Section_3 from '../../Components/Course/Section_3'
import Section_4 from '../../Components/Course/Section_4'
import Section_5 from '../../Components/Course/Section_5'
import Footer from '../../Components/Course/Footer'

const Course = () => {
  return (
    <div>
      <Header />
      <main>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Course