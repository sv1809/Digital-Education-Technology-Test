import { FIRST_DATA_LOADED } from "../constants/actionTypes";
import RedCard from "../model/RedCard";
import BlueCard from "../model/BlueCard";
import GreenCard from "../model/GreenCard";

export const getFirstData = () => dispatch => Promise.resolve(mock)
    .then(data => dispatch(firstDataLoaded(data)));

const firstDataLoaded = data => ({
    type: FIRST_DATA_LOADED,
    data
});

const mock = {
    title: "Данные 1",
    description: "Тут <i>будет</i> описание <b>Данных 1</b>",
    items: getItems(),
};

function getItems() {
    const res = [];
    for (let i = 0; i < 253; i++) {
        const cardType = getRandomIntInclusive(0, 2);
        let card;
        if (cardType === 0) {
            card = new RedCard({
                id: i,
                title: "carn number " + i,
                isArchive: !!getRandomIntInclusive(0, 3)
            });
        } else if (cardType === 1) {
            card = new GreenCard({
                id: i,
                title: "carn number " + i,
                isArchive: !!getRandomIntInclusive(0, 3)
            });
        } else if (cardType === 2) {
            card = new BlueCard({
                id: i,
                title: "carn number " + i,
                isArchive: !!getRandomIntInclusive(0, 3)
            });
        }
        res.push(card);
    }
    return res;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}