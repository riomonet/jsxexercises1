const Person = ({ age, hobbies, name}) => {

    const  message = (age > 18) ? "Please go vote !" : "You must be over 18"
    const nombre =  (name.length >=8) ?  name.slice(0,6) : name;
    
    return (
	<div>
	    <p> Learn some information about {nombre}</p>
	    <h3> { message } </h3>
	    <ul> {hobbies.map( h => (<li> {h} </li>))} </ul>
	</div>
    )
}


const FirstComponent = () => {

    return <h1> My First Component</h1>
}

const NamedComponent = (props) => {
    return <p> My name is {props.name} </p>;
}

const Tweet = (props) => {
    return (
	<div className="tweet">
	<h2> {props.username} <span>{props.name}</span>  . <span> {props.date}</span></h2>
	<p> {props.message} </p>
	</div>)
}

const App = () => {
    return (
	
	    <div>
	    <FirstComponent />
	    <NamedComponent name="BOB ZOMBOBSKI" />
	    <Tweet  username="@Sam I am" name="Sammy Feldman" date="12/2/24" message="Had a great time in camp this summer !" />
	    <Tweet  username="@Jono" name="John Oritz" date="09/10/19" message="Hey Man meet me at Zablozki's!" />
	    <Tweet  username="@simmy" name="Simmy Bangkof" date="1/2/192" message="I love Exeter street!" />
	    <Person age={15} hobbies={["parachuting","horseback riding"]} name="arielZablozki"/>
	    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root") )


