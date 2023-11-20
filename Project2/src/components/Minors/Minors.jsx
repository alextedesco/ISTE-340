//imports
import React, { useState } from 'react'
import getData from '../../utils/getData'
import MinorAccordion from './MinorAccordion';

const Minors = () => {
    //instance vars
    const [minLoaded, setMinLoaded] = useState(false);
    const [minObj, setMinObj] = useState();
    const [courseObj, setCourseObj] = React.useState(null);
    const [courseLoaded, setCourseLoaded] = React.useState(false);

    // Gets the minor information from the API
    React.useEffect(() => {
        getData('minors/')
            .then((json) => {
                setMinObj(json);
                setMinLoaded(true);
            })
    // Gets course information of every course in iSchool from the API
        getData('course/')
            .then((json) => {
                setCourseObj(json);
                setCourseLoaded(true);
            })
    }, []);

    // Check if minObj or courseObj is not available yet
    if (!minLoaded || !courseLoaded) {
        return (
            <section className="MinorsCourses">
                <h1>iSchool Minors</h1>
                <h2>Loading...</h2>
            </section>
        );
    }

    return (
        <>
            <h1>Minors</h1>
            <div className="minorList">
                {minObj.UgMinors.map((m, index) =>
                    <div key={index}>
                        {/* Passes all the course and minor information into an accordion */}
                        <MinorAccordion {...{courseObj: courseObj, ...m }} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Minors;
