// Imports
import AboutImageList from './AboutImageList';

const About = ({ aboutObj }) => {

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
            {/* About API information for the iSchool */}
            <h1>Welcome to the iSchool</h1>
            <h2>{aboutObj.title}</h2>
            <h3>{aboutObj.description}</h3>
            <div className="aboutQuote">
                <h5 className="quote">{aboutObj.quote}</h5>
                <h5>{aboutObj.quoteAuthor}</h5>
            </div>

            {/* Image List of Golisano */}
            <AboutImageList />

            <h3><a href='https://people.rit.edu/act2076/ISTE340/assets/golisano.pdf' style={{ color: "#F76902" }}>Map of Golisano</a></h3>

            {/* Google Maps embed of Golisano */}
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
