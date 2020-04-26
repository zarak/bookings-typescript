export type Room = {
    title: string,
    notes: string,
};

export type Kit = {
    title: string,
    notes: string,
};

export type BookablesData = {
    rooms: Array<Room>,
    kit: Array<Kit>
};

export const bookablesData: BookablesData = {
    rooms: [
        {
            title: "Lounge",
            notes: "A relaxing place to hang out."
        },
        {
            title: "Meeting Room",
            notes: "Formal. Seats 12."
        },
        {
            title: "Games Room",
            notes: "Table tennis, table football, pinball!"
        }
    ],
    kit: [
        {
            title: "Projector",
            notes: "Powerful and sharp."
        },
        {
            title: "Wireless mics",
            notes: "Really handy but don't forget to switch them off."
        }
    ]
};
