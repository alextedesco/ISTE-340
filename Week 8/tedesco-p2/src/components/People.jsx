// imports
import React, {useState} from "react";
import getData from "../assets/utils/getData";
// Get the CSS
import "./People.css"

const People=()=> {
    // instance vars
    const [peopleLoaded, setPeopleLoaded] = useState (false);
    const [peopleObj, setPeopleObject] = useState ();

    const panes = [
    {menuItem: "Faculty", render: () => <Tab.Pane>
        <PeopleGroup title="Faculty" peopleGroupObj={peopleObj.faculty}></PeopleGroup>
        </Tab.Pane> },
        {menuItem: "Staff", render: () => <Tab.Pane>
        <PeopleGroup title="Staff" peopleGroupObj={peopleObj.staff}></PeopleGroup>
        </Tab.Pane> }
]

    React.useEffect (()=>{
        getData ("people/") 
            .then ((json)=> {
                console.log ("people", json);
                setPeopleObject (json);
                setPeopleLoaded (true);
            })
    }, []);

    if (!peopleLoaded) return (

        <> 
        <h1>Our People</h1>
        <h3>Loading...</h3>
        
        </>

    )

    return (
        <>
            <h2>{peopleObj.title}</h2>
            <h3></h3>

            {peopleObj.faculty.map((p) =>
                <div>
                    <h3>{p.name}</h3>
                    <img src={p.imagePath} alt="person"/>
                </div>
            )}
        </>
    )

}

export default People;



// const People = () => <Tab panes={panes} />

// export default People