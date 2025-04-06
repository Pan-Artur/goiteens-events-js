import { Item } from "../Item/Item.jsx";

import { StyledList } from "./List.js";

export const List = ({ events }) => {
    return (
        <StyledList>
            {events.map((happening) => (
               <Item name={happening.name} location={happening.location} speaker={happening.speaker} type={happening.type} time={happening.time} /> 
            ))}
        </StyledList>
    );
}