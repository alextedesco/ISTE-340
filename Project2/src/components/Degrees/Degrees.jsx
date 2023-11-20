// Imports:
import React, { useState } from 'react'
import getData from '../../utils/getData'
import DegreeAccordion from './DegreeAccordion';


const Degrees = () => {
    //instance vars
    const [DegLoaded, setDegLoaded] = useState(false);
    const [degObj, setDegObj] = useState();

    const [progressValue, setProgressValue] = useState(0);

    // Gets the degree information from the API
    React.useEffect(() => {
        getData('degrees/')
            .then((json) => {
                setProgressValue(25);
                setProgressValue(50);
                setDegObj(json);
                setProgressValue(75);
                setDegLoaded(true);
                setProgressValue(100);
            })
    }, []);

    // Check if degObj is not available yet
    if (!DegLoaded) {
        return (
            <section className="Degrees">
                <h1>iSchool Degrees</h1>
                <h2>Loading...</h2>
                <progress value={progressValue} max="100"></progress>
            </section>
        );
    }

    return (
        <>
            <h1>Degrees</h1>
            <h2>Undergrad</h2>
            {/* This map passes all the Undergraduate Degree information into an Accordion helper component */}
            <div className="degreeList">
                {degObj.undergraduate.map((d, index) =>
                    <div key={index}>
                        <DegreeAccordion {...d} />
                    </div>
                )}
            </div>
            <h2>Graduate</h2>
            <div className="degreeList">
                {/* This map passes all the Graduate Degree information into an Accordion helper component */}
                {degObj.graduate.filter((d) => d.concentrations && d.degreeName && d.description && d.title)
                    .map((d, index) =>
                        <div key={index}>
                            <DegreeAccordion {...d} />
                        </div>
                    )}
            </div>
        </>
    );
};
export default Degrees;