import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { characters, period_month, base_url } from "../utils/constants.ts";
import ErrorPage from "../components/ErrorPage.tsx";
import { SWContext } from "../utils/context.ts";
import { HeroInfo } from "../utils/types";

export interface WithErrorPageProps {
    heroId: string;
    hero: HeroInfo | null;
    planets: string[];
    openingCrawl: string;
}

const withErrorPage = (WrappedComponent: React.ComponentType<WithErrorPageProps>) => {
    return (props: any) => {
        const { heroId } = useParams<{ heroId: string }>();
        const { changeHero } = React.useContext(SWContext);
        const [hero, setHero] = useState<HeroInfo | null>(null);
        const [planets, setPlanets] = useState<string[]>(['wait...']);
        const [openingCrawl, setOpeningCrawl] = useState<string>('Loading...');


        useEffect(() => {
            if (!heroId || !characters[heroId]) {
                return;
            }
            changeHero(heroId);

            const storedHero = localStorage.getItem(heroId);
            if (storedHero) {
                const parsedHero = JSON.parse(storedHero);
                if (Date.now() - parsedHero.timestamp < period_month) {
                    setHero(parsedHero.payload);
                } else {
                    fetch(characters[heroId].url)
                        .then((response) => response.json())
                        .then((data) => {
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
            }
        }, [heroId, changeHero]);


        useEffect(() => {
            const cachedPlanets = localStorage.getItem('planets');
            if (cachedPlanets) {
                const planetsData = JSON.parse(cachedPlanets);
                if (Date.now() - planetsData.time < period_month) {
                    setPlanets(planetsData.payload);
                } else {
                    fetchPlanets(`${base_url}/v1/planets`);
                }
            } else {
                fetchPlanets(`${base_url}/v1/planets`);
            }
        }, []);

        const fetchPlanets = async (url: string) => {
            const response = await fetch(url);
            const data: Array<{ name: string }> = await response.json();
            const planetsList = data.map((item) => item.name);
            setPlanets(planetsList);
            localStorage.setItem('planets', JSON.stringify({
                payload: planetsList,
                time: Date.now(),
            }));
        };


        useEffect(() => {
            const cachedOpeningCrawl = sessionStorage.getItem('opening_crawl');
            if (cachedOpeningCrawl) {
                setOpeningCrawl(cachedOpeningCrawl);
            } else {
                const episode = Math.floor(1 + Math.random() * 6);
                fetch(`${base_url}/v1/films/${episode}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setOpeningCrawl(data.opening_crawl);
                        sessionStorage.setItem('opening_crawl', data.opening_crawl);
                    });
            }
        }, []);

        if (!heroId || !characters[heroId]) {
            return <ErrorPage />;
        }

        return (
            <WrappedComponent
                {...props}
                hero={hero}
                heroId={heroId}
                planets={planets}
                openingCrawl={openingCrawl}
            />
        );
    };
};

export default withErrorPage;





