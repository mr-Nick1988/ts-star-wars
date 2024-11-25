export interface SWContextValue {
    page: string,
    changePage: (page: string) => void,
}

export interface HeroNameContextType {
    heroName: string;
    setHeroName: (name: string) => void;
}

export interface HeroInfo {
    name: string,
    gender: string,
    birth_year: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string
}

export interface Item {
    title: string,
    path: string
}

export interface Hero {
    name: string,
    img: string | object,
    url: string
}

export interface Characters {
    [key: string]: Hero;
}

