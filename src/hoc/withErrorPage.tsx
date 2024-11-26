import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { characters, period_month } from "../utils/constants.ts";
import ErrorPage from "../components/ErrorPage.tsx";
import { SWContext } from "../utils/context.ts";
import {HeroInfo} from "../utils/types";


export interface WithErrorPageProps {
    heroId: string;
    hero: HeroInfo | null;
}

const withErrorPage = (WrappedComponent: React.ComponentType<WithErrorPageProps>) => {
    return (props: any) => {
        const { heroId } = useParams<{ heroId: string }>();
        const { changeHero } = React.useContext(SWContext);
        const [hero, setHero] = useState<HeroInfo | null>(null);

        useEffect(() => {
            if (!heroId || !characters[heroId]) {
                return;
            }
            changeHero(heroId);

            const storedHero = JSON.parse(localStorage.getItem(heroId)!);
            if (storedHero && (Date.now() - storedHero.timestamp) < period_month) {
                setHero(storedHero.payload);
            } else {
                fetch(characters[heroId].url)
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
                            eye_color: data.eye_color,
                        };
                        setHero(info);
                        localStorage.setItem(heroId, JSON.stringify({
                            payload: info,
                            timestamp: Date.now(),
                        }));
                    });
            }
        }, [heroId, changeHero]);

        if (!heroId || !characters[heroId]) {
            return <ErrorPage />;
        }

        return <WrappedComponent {...props} hero={hero} heroId={heroId} />;
    };
};

export default withErrorPage;
