import {
    GET_ALL_BEERS,
    GET_BEERS_BY_ALCOHOL,
    GET_BEERS_BY_IS_ORGANIC,
    GET_BEER,
    BEER_ERROR,
    BEERS_ERROR,
    CLEAR_BEERS
} from '../constants/action-types';

const initialState = {
    beers: [],
    beer: null,
    loading: true,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_BEERS:
        case GET_BEERS_BY_ALCOHOL:
        case GET_BEERS_BY_IS_ORGANIC:
            return {
                beers: [...state.beers, ...payload],
                loading: false,
            };
        case GET_BEER:
            return {
                ...state,
                beer: payload,
                loading: false,
            };
        case BEER_ERROR:
            return {
                ...state,
                beer: null,
                loading: false,
            };
        case BEERS_ERROR:
            return {
                ...state,
                beers: [],
                loading: false,
            };
        case CLEAR_BEERS:
            return {
                ...state,
                beers: [],
                loading: true,
            };
        default:
            return state;
    }
};
