//imports
import React, { useState } from 'react'
// import './Menu.css'

const About = ({ aboutObj }) => {

    console.log('Received data in About component:', aboutObj);


    // Check if aboutObj is not available yet
    if (!aboutObj) {
        return (
            <section className="About">
                <h2>Loading...</h2>
            </section>
        );
    }

    return (
        <section className="About">
            <h1>Welcome to the iSchool</h1>
            <h2>{aboutObj.title}</h2>
            <h3>{aboutObj.description}</h3>
            <div className="aboutQuote">
                <h5 className="quote">{aboutObj.quote}</h5>
                <h5>{aboutObj.quoteAuthor}</h5>
            </div>

            <h3><a href='../../assets/golisano.pdf'>Map of Golisano</a></h3>

            <iframe
                src="https://maps.google.com/maps?width=300%25&amp;height=600&amp;hl=en&amp;q=Golisano%20Computing+(My%20Business%20Name)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{
                    border: 0,
                    padding: "1em",
                    width: "700px",
                    height: "500px"

                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>


        </section>

    );
};

export default About;
