//imports
import React, {useState} from 'react'
import { Tab } from 'semantic-ui-react'
import PeopleGroup from './PeopleGroup'
import getData from '../../utils/getData'

//get the css
import './People.css'

const People = () => {
     //instance vars
     const [pepLoaded, setPepLoaded] = useState(false);
     const [pepObj, setPepObj] = useState();

     React.useEffect(()=>{
         getData('people/')
             .then((json) =>{
                 setPepObj(json);
                 setPepLoaded(true);
             })
     }, []);
     
 
     if(!pepLoaded) return(
         <>
             <h1>Our People</h1>
             <h3>Loading...</h3>
         </>
     )

     const panes = [
        { menuItem: 'Faculty', render: () => <Tab.Pane>

            <PeopleGroup title="Faculty" pepGroupObj={pepObj.faculty}/>
        </Tab.Pane> },
        { menuItem: 'Staff', render: () => <Tab.Pane>
            
            <PeopleGroup title="Staff" pepGroupObj={pepObj.staff}/>
        </Tab.Pane> }
      ]

     //where all is loaded...
     return(
        <>
            <h1>{pepObj.title}</h1>
            <h3>{pepObj.subTitle}</h3>
            <Tab panes={panes}/>
        </>
     )
}

export default People