import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import WithErrorPage from "../hoc/WithErrorPage.tsx";


const Home = () => {

    return (
        <main>
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    )

};

export default WithErrorPage(Home);