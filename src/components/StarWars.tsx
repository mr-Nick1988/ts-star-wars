

import { starWarsInfo} from "../utils/constants.ts";
import WithErrorPage from "../hoc/WithErrorPage.tsx";

const StarWars = () => {

    return  (
            <div className={'text-[2em] text-justify tracking-[.2em] leading-normal'}>
                {starWarsInfo}
            </div>
        )

};

 export default WithErrorPage(StarWars);