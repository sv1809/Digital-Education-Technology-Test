import { SIDE_MENU_ITEMS_LOADED } from "../constants/actionTypes";

export const getMenuItems = () => dispatch => Promise.resolve(mockMenuItems)
    .then(items => dispatch(menuItemsLoaded(items)));

const menuItemsLoaded = items => ({
    type: SIDE_MENU_ITEMS_LOADED,
    items
});

const mockMenuItems = [
    {
        text: "Элемент меню 1",
        link: "/1"
    },
    {
        text: "Элемент меню 2",
        link: "/2"
    },
    {
        text: "Элемент меню 3",
        link: "/3"
    },
];