import events from "../../upcoming-events.json";

import { List } from "../List/List.jsx";

export const Events = () => {
    return (
        <section>
            <div>
                <h1>Upcoming events</h1>
            </div>
            <List events={events} />
        </section>
    );
}