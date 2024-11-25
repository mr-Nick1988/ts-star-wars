import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {HeroNameContext} from "../utils/context.ts";


const Header = () => {
    const {heroName } = useContext(HeroNameContext);
    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{heroName}</h1>
        </header>
    );
};

export default Header;