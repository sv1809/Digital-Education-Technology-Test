import { FIRST_DATA_LOADED, SET_FISR_IS_ARCHIVED } from "../constants/actionTypes";
import Card from "../model/Card";

export const getFirstData = () => dispatch => Promise.resolve(mock)
    .then(data => dispatch(firstDataLoaded(data)));

const firstDataLoaded = data => ({
    type: FIRST_DATA_LOADED,
    data,
});

export const changeIsArchive = (id, value) => ({
    type: SET_FISR_IS_ARCHIVED,
    id,
    value,
});

const colors = ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB",
    "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"];

const mock = {
    title: "Данные 1",
    description: "Тут <i>будет</i> описание <b>Данных 1</b>",
    items: getItems(),
    colors
};

function getItems() {
    const res = [];
    for (let i = 0; i < 253; i++) {
        const card = new Card({
            id: i,
            title: "card number " + i,
            isArchive: !!getRandomIntInclusive(0, 3),
            color: getCardColor(0, 2),
        });
        res.push(card);
    }
    return res;
}

function getCardColor() {
    return colors[getRandomIntInclusive(0, colors.length - 1)];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}