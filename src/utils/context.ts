import {createContext} from "react";
import {HeroNameContextType, SWContextValue} from "./types";

export const SWContext = createContext<SWContextValue>({
    page: 'Home',
    changePage: (page: string) => console.log(page),
});

export const HeroNameContext = createContext<HeroNameContextType>({
    heroName: '',
    setHeroName: (name: string) => console.log(name),
});

