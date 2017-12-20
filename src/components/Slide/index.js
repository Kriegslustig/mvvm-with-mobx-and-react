import React from 'react'

const Slide = ({ title, content }) =>
  <section>
    <main>
      <h2>{title}</h2>
      <div>
        {content}
      </div>
    </main>
  </section>

export default Slide
