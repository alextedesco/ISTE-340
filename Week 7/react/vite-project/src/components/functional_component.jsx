// simple component
const Welcome2=({name, age, newClass})=>{
    return (
        <>
        <section className={newClass}>
            <h1>Hello {name}, you are {age} years old!</h1>;
            <div>some text</div>
        </section> 
        </>
    );
    
}
export default Welcome2;