import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SWContext } from '../utils/context.ts';
import { characters, defaultHero } from '../utils/constants.ts';
import { SWContextValue } from '../utils/types';
import ErrorPage from "../components/ErrorPage.tsx"

interface WithErrorPageProps {
    heroId: string;
}

const WithErrorPage = <P extends WithErrorPageProps>(WrappedComponent: React.ComponentType<P>) => {
    return (props: P) => {
        const { heroId = defaultHero } = useParams<{ heroId: string }>();
        const { changeHero } = useContext(SWContext) as SWContextValue;

        useEffect(() => {

            if (!characters[heroId]) {
                console.error(`Hero with ID ${heroId} not found in characters.`);
                return;
            }

            changeHero(heroId);
        }, [heroId, changeHero]);

        if (!characters[heroId]) {
            return <ErrorPage />;
        }

        return <WrappedComponent {...props} />;
    };
};

export default WithErrorPage;