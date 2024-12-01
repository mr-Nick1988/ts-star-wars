
import { SWContext } from "../utils/context.ts";
import { characters } from "../utils/constants.ts";
import Navigation from "./Navigation.tsx";
import {useContext} from "react";

const Header = () => {
    const { hero, error } = useContext(SWContext);

    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation />
            {error ? (
                <div className="text-red-500 text-xl text-center py-4">{error}</div>
            ) : (
                <h1 className="text-center py-6 text-3xl">{characters[hero]?.name}</h1>
            )}
        </header>
    );
};

export default Header;




