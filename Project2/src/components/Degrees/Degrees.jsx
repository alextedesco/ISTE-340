//imports
import React, { useState } from 'react'
import getData from '../../utils/getData'
import DegreeAccordion from './DegreeAccordion';

// import './Menu.css'

const Degrees = () => {
    //instance vars
    const [DegLoaded, setDegLoaded] = useState(false);
    const [degObj, setDegObj] = useState();
    const [progressValue, setProgressValue] = useState(0);

    React.useEffect(() => {
        getData('degrees/')
            .then((json) => {
                setProgressValue(25);
                console.log('degrees', json);
                setProgressValue(50);
                setDegObj(json);
                setProgressValue(75);
                setDegLoaded(true);
                setProgressValue(100);
            })
    }, []);

    // Check if minObj is not available yet
    if (!DegLoaded) {
        return (
            <section className="Degrees">
                <h2>Loading...</h2>
                <progress value={progressValue} max="100"></progress>
            </section>
        );
    }

    console.log ("Hi");
    console.log(degObj);

    return (
        <>
        <h1>Degrees</h1>
        <h2>Undergrad</h2>
            <div className="degreeList">
                {degObj.undergraduate.map((d) =>
                    <div>
                        <DegreeAccordion {...d} />
                    </div>
                )}
            </div>
        <h2>Graduate</h2>
            <div className="degreeList">
                {degObj.graduate.filter((d) => d.concentrations && d.degreeName && d.description && d.title)
                .map((d) =>
                    <div>
                        <DegreeAccordion {...d} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Degrees;
