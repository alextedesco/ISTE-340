import React, {useState} from 'react'
import { Tab } from 'semantic-ui-react'
import EmploymentTable from './EmploymentTable'
import getData from '../../utils/getData'

const Employment = () => {
    const [empLoaded, setEmpLoaded] = useState(false);
    const [empObj, setEmpObj] = useState();

    React.useEffect(() => {
        getData('employment/')
            .then((json) => {
                console.log('degrees', json);
                setEmpObj(json);
                setEmpLoaded(true);
            })
    }, []);

    if(!empLoaded) return(
        <>
            <h1>Our People</h1>
            <h3>Loading...</h3>
        </>
    )

    console.log (empObj.coopTable.coopInformation);
    console.log (empObj.employmentTable.professionalEmploymentInformation);

    const panes = [
        { menuItem: 'Employer Table', render: () => <Tab.Pane>
            <EmploymentTable empObj={empObj.coopTable.coopInformation}/>
        </Tab.Pane> },
        { menuItem: 'Co-Op Table', render: () => <Tab.Pane>
            <EmploymentTable empObj={empObj.employmentTable.professionalEmploymentInformation}/>
        </Tab.Pane> }
    ]

    return(
       <>
            <h1>H1</h1>
           <Tab panes={panes}/>
       </>
    )
}

export default Employment;



