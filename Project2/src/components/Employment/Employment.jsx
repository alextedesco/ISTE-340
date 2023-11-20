// Imports
import React, { useState } from 'react'
import { Tab } from 'semantic-ui-react'
import EmploymentTable from './EmploymentTable'
import getData from '../../utils/getData'

const Employment = () => {
    const [empLoaded, setEmpLoaded] = useState(false);
    const [empObj, setEmpObj] = useState();
    const [progressValue, setProgressValue] = useState(0);

// Gets the employment information from the API
    React.useEffect(() => {
        getData('employment/')
            .then((json) => {
                setProgressValue(25);
                setProgressValue(50);
                setEmpObj(json);
                setProgressValue(75);
                setEmpLoaded(true);
                setProgressValue(100);
            })
    }, []);

    // Check if empObj is not available yet
    if (!empLoaded) {
        return (
            <section className="Employment">
                <h1>iSchool Employment</h1>
                <h2>Loading...</h2>
                <progress value={progressValue} max="100"></progress>
            </section>
        );
    }

    // Stores the employment tables inside a pane
    const panes = [
        {
            menuItem: 'Employer Table', render: () => <Tab.Pane>
                <EmploymentTable empObj={empObj.employmentTable.professionalEmploymentInformation} />
            </Tab.Pane>
        },
        {
            menuItem: 'Co-Op Table', render: () => <Tab.Pane>
                <EmploymentTable empObj={empObj.coopTable.coopInformation} />
            </Tab.Pane>
        }
    ]

    return (
        <>
            <h1>{empObj.introduction.title}</h1>

            {empObj.introduction.content.map((value, index) => (
                <div key={index}>
                    <h2>{value.title}</h2>
                    <h3>{value.description}</h3>
                    <br />
                </div>
            ))}

            <h3>{empObj.degreeStatistics.title}</h3>

            {empObj.degreeStatistics.statistics.map((stat, index) => (
                <div key={index}>
                    <h2>{stat.description}</h2>
                    <h3>{stat.value}</h3>
                    <br />
                </div>
            ))}

            <h2>{empObj.employers.title}</h2>


            { <ul>
            {empObj.employers.employerNames.map((employer, index) => (
                <li key={index}>{employer}</li>
            ))}
            </ul> }
            <br/>

            <Tab panes={panes} />
        </>
    )
}

export default Employment;