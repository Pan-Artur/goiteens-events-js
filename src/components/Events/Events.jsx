import events from "../../upcoming-events.json";

import { List } from "../List/List";

export const Events = () => {
    return (
        <section>
            <h1>Upcoming events</h1>
            <List events={events} />
        </section>
    );
}