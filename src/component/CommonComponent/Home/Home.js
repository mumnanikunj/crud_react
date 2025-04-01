import Counter from "./Innercomponent/counter"


const Home = () =>{
    return(
        <div>
            <div>
                <h1 >Welcome to Home Page</h1>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <Counter/>
        </div>
    )
}

export default Home