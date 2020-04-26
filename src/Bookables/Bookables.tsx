import React from "react";
import { Room, Kit, Bookable, bookablesData } from '../bookablesData';

const Bookables: React.FunctionComponent<{bookablesByGroup: Bookable}> = ({ bookablesByGroup }) => {
    const group = "rooms";
    const bookables = bookablesByGroup[group] || [];
    const bookableIndex = 0;
    return (
        <div></div>
    );
}

export default Bookables;
