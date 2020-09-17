import dayjs from "dayjs";
import randomId from 'random-id';

const dateDeparture = dayjs().add(10, 'day');
const dateArrival = dateDeparture.add(10, 'hour');

const data = [
    {
        "id": `${randomId(32, 'a0')}`,
        "departure": {
            "city": "Moscow",
            "airport_code": "SVO",
            "date": `${dateDeparture.format('D MMMM, YYYY')}`,
            "time": `${dateDeparture.format('HH:mm')}`
        },
        "arrival": {
            "city": "New York",
            "airport_code": "JFK",
            "date": `${dateArrival.format('D MMMM, YYYY')}`,
            "time": `${dateArrival.format('HH:mm')}`
        },
        "airline": "Aeroflot",
        "price": "23 924 ₽"
    },
    {
        "id": `${randomId(32, 'a0')}`,
        "departure": {
            "city": "Moscow",
            "airport_code": "SVO",
            "date": `${dateDeparture.format('D MMMM, YYYY')}`,
            "time": `${dateDeparture.format('HH:mm')}`
        },
        "arrival": {
            "city": "New York",
            "airport_code": "JFK",
            "date": `${dateArrival.format('D MMMM, YYYY')}`,
            "time": `${dateArrival.format('HH:mm')}`
        },
        "airline": "Aeroflot",
        "price": "23 924 ₽"
    },
    {
        "id": `${randomId(32, 'a0')}`,
        "departure": {
            "city": "Moscow",
            "airport_code": "SVO",
            "date": `${dateDeparture.format('D MMMM, YYYY')}`,
            "time": `${dateDeparture.format('HH:mm')}`
        },
        "arrival": {
            "city": "New York",
            "airport_code": "JFK",
            "date": `${dateArrival.format('D MMMM, YYYY')}`,
            "time": `${dateArrival.format('HH:mm')}`
        },
        "airline": "Aeroflot",
        "price": "23 924 ₽"
    },
    {
        "id": `${randomId(32, 'a0')}`,
        "departure": {
            "city": "Moscow",
            "airport_code": "SVO",
            "date": `${dateDeparture.format('D MMMM, YYYY')}`,
            "time": `${dateDeparture.format('HH:mm')}`
        },
        "arrival": {
            "city": "New York",
            "airport_code": "JFK",
            "date": `${dateArrival.format('D MMMM, YYYY')}`,
            "time": `${dateArrival.format('HH:mm')}`
        },
        "airline": "Aeroflot",
        "price": "23 924 ₽"
    },
    {
        "id": `${randomId(32, 'a0')}`,
        "departure": {
            "city": "Moscow",
            "airport_code": "SVO",
            "date": `${dateDeparture.format('D MMMM, YYYY')}`,
            "time": `${dateDeparture.format('HH:mm')}`
        },
        "arrival": {
            "city": "New York",
            "airport_code": "JFK",
            "date": `${dateArrival.format('D MMMM, YYYY')}`,
            "time": `${dateArrival.format('HH:mm')}`
        },
        "airline": "Aeroflot",
        "price": "23 924 ₽"
    },
    {
        "id": `${randomId(32, 'a0')}`,
        "departure": {
            "city": "Moscow",
            "airport_code": "SVO",
            "date": `${dateDeparture.format('D MMMM, YYYY')}`,
            "time": `${dateDeparture.format('HH:mm')}`
        },
        "arrival": {
            "city": "New York",
            "airport_code": "JFK",
            "date": `${dateArrival.format('D MMMM, YYYY')}`,
            "time": `${dateArrival.format('HH:mm')}`
        },
        "airline": "Aeroflot",
        "price": "23 924 ₽"
    }
];

export default data