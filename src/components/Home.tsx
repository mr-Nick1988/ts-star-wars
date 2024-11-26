import withErrorPage, {WithErrorPageProps} from "../hoc/withErrorPage.tsx";
import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import ErrorPage from "./ErrorPage.tsx";


const Home = ({ hero }: WithErrorPageProps) => {
    return hero ? (
        <main>
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    ) : <ErrorPage />;
};

export default withErrorPage(Home);









//
// const Home = () => {
//     const {heroId = defaultHero} = useParams();
//     const {changeHero} = useContext(SWContext);
//     useEffect(() => {
//         if (!characters[heroId]) {
//             return;
//         }
//         changeHero(heroId);
//     }, [heroId]);
//
//     return characters[heroId] ? (
//         <main>
//             <Hero/>
//             <DreamTeam/>
//             <FarGalaxy/>
//         </main>
//     )
//         :<ErrorPage/>
// };
//
// export default Home;