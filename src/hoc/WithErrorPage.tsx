
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { SWContext } from "../utils/context.ts";
import { characters, defaultHero } from "../utils/constants.ts";
import ErrorPage from "../components/ErrorPage.tsx";

interface WithErrorPageProps {
    heroId?: string;
}

const WithErrorPage = <P extends WithErrorPageProps>(WrappedComponent: React.ComponentType<P>) => {
    return (props: P) => {
        const { heroId = defaultHero } = useParams<{ heroId: string }>();
        const { changeHero, setError, error } = useContext(SWContext); // Получаем ошибку из контекста

        useEffect(() => {
            if (characters[heroId]) {
                changeHero(heroId);
                setError(undefined);
            } else {
                setError("O-o-ops, something went wrong!");
            }
        }, [heroId, changeHero, setError]);

        if (error) {
            return <ErrorPage message={error} />;
        }
        if (characters[heroId]) {
            return <WrappedComponent {...props} />;
        }

    };
};

export default WithErrorPage;














