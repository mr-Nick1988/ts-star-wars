import withErrorPage from "../hoc/withErrorPage.tsx";
import{WithErrorPageProps} from "../hoc/withErrorPage.tsx";
import ErrorPage from "./ErrorPage.tsx";

const AboutMe = ({ hero }: WithErrorPageProps) => {
    return hero ? (
        <div className={`text-[2em] text-justify tracking-[.2em] leading-normal ml-8`}>
            {Object.keys(hero).map(key => (
                <p key={key}>
                    <span className={`text-[1.25em] capitalize`}>{key.replace('_', ' ')}:</span> {hero[key]}
                </p>
            ))}
        </div>
    ) : <ErrorPage />;
};

export default withErrorPage(AboutMe);













