import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {HeroNameContext} from "./utils/context.ts";


function App() {
    const [heroName, setHeroName] = useState('Star Wars');

    return (
        <div>
        <HeroNameContext.Provider value={{heroName, setHeroName }}>
            <Header/>
            <Main/>
        </HeroNameContext.Provider>
        <Footer/>
        </div>
    )
}

export default App