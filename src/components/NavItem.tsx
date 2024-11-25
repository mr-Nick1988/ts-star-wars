import {Item} from "../utils/types";
import {NavLink} from "react-router-dom";

interface Props {
    item: Item,
}
const NavItem = ({item}: Props) => {
    return (
            <NavLink
                className={
                `bg-red-color 
                border-black 
                border-2 
                rounded-[5px] 
                px-3 
                py-2 
                cursor-pointer 
                hover:text-white 
                hover:bg-red-500`
            }
               to={`/${item.path}`}> {item.title}
            </NavLink>
            );
};

export default NavItem;
