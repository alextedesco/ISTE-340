//imports
import React, { useState } from 'react'
import getData from '../../utils/getData'
import MinorAccordion from './MinorAccordion';
// import './Menu.css'

const Minors = () => {
    //instance vars
    const [minLoaded, setMinLoaded] = useState(false);
    const [minObj, setMinObj] = useState();
    const [progressValue, setProgressValue] = useState(0);

    React.useEffect(() => {
        getData('minors/')
            .then((json) => {
                setProgressValue(25);
                console.log('minors', json);
                setProgressValue(50);
                setMinObj(json);
                setProgressValue(75);
                setMinLoaded(true);
                setProgressValue(100);
            })
    }, []);

    // Check if minObj is not available yet
    if (!minLoaded) {
        return (
            <section className="Minors">
                <h2>Loading...</h2>
                <progress value={progressValue} max="100"></progress>
            </section>
        );
    }

    console.log ("Hi");
    console.log(minObj.UgMinors);

    return (
        <>
        <h1>Minors</h1>
            <div className="minorList">
                {minObj.UgMinors.map((m) =>
                    <div>
                        <MinorAccordion {...m} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Minors;
