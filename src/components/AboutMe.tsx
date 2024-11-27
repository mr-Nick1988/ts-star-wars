
import withErrorPage from "../hoc/withErrorPage.tsx";
import { WithErrorPageProps } from "../hoc/withErrorPage.tsx";
import ErrorPage from "./ErrorPage.tsx";
import {HeroInfo} from "../utils/types";


const AboutMe = ({ hero }: WithErrorPageProps) => {
    return hero ? (
        <div className={`text-[2em] text-justify tracking-[.2em] leading-normal ml-8`}>
            {Object.keys(hero).map((key) => {
                const typedKey = key as keyof HeroInfo;
                return (
                    <p key={typedKey}>
                        <span className={`text-[1.25em] capitalize`}>{typedKey.replace('_', ' ')}:</span> {hero[typedKey]}
                    </p>
                );
            })}
        </div>
    ) : (
        <ErrorPage />
    );
};

export default withErrorPage(AboutMe);












