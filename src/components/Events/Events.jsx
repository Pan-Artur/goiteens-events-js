import events from "../../upcoming-events.json";

import { List } from "../List/List.jsx";

import { StyledEvents } from "./Events.js";

export const Events = () => {
    return (
        <StyledEvents>
            <div>
                <h1>Upcoming events</h1>
            </div>
            <List events={events} />
        </StyledEvents>
    );
}