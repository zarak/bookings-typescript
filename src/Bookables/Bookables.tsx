import React from "react";
import { Room, Kit, Bookable, bookablesData } from '../bookablesData';

const Bookables: React.FunctionComponent<{bookablesByGroup: Bookable}> = ({ bookablesByGroup }) => {
    const group = "rooms";
    const bookables = bookablesByGroup[group] || [];
    const bookableIndex = 0;
    return (
        <ul className="bookables">
            {bookables.map((b, i) => (
                <li key={b.title} className={i == bookableIndex ? "selected" : ""}>
                    {b.title}
                </li>
            ))}
        </ul>
    );
}

export default Bookables;
