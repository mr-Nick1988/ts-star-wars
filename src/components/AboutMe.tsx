import {useContext, useEffect, useState} from "react";
import { characters, defaultHero, period_month} from "../utils/constants.ts";
import { HeroInfo} from "../utils/types";
import {useParams} from "react-router-dom";
import {HeroNameContext} from "../utils/context.ts";


const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    let {heroID = defaultHero} = useParams();
    const {setHeroName} = useContext(HeroNameContext);


    useEffect(() => {
        if(!characters[heroID]) {
            heroID = defaultHero;
        }
        const hero = JSON.parse(localStorage.getItem(heroID)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
            setHeroName(hero.payload.name);
        } else {
            fetch(characters[heroID].url)
                .then(response => response.json())
                .then(data => {
                    const info: HeroInfo = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    setHeroName(info.name);
                    localStorage.setItem(heroID, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
        return() =>
            setHeroName(characters[defaultHero].name)
    }, [])

    return (
        <>
            {(!!hero) &&
                <div className={`text-[2em] text-justify tracking-[.2em] leading-normal ml-8`}>
                    {Object.keys(hero).map(key =>
                        <p key={key}>
                            <span
                             className={`text-[1.25em] capitalize`}>{key.replace('_', ' ')}:
                            </span>
                          {hero[key as keyof HeroInfo]}
                        </p>)}
                </div>
            }
        </>
    );
}

export default AboutMe;