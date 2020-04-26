import React from "react";
import { Room, Kit, BookablesData, bookablesData } from '../bookablesData';

const Bookables: React.FunctionComponent<{bookablesByGroup: BookablesData}> = ({ bookablesByGroup }) => {
    const group = "rooms";
    const bookables: Array<Room> | Array<Kit> = bookablesByGroup[group] || [];
    const bookableIndex = 0;
    return (
        <ul className="bookables">
            {bookables.map((b, i) => (
                <li key={b.title} className={i == bookableIndex ? "selected" : ""} data-testid={i} >
                    {b.title}
                </li>
            ))}
        </ul>
    );
}

export default Bookables;
