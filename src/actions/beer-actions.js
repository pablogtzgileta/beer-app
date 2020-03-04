import axios from 'axios';
import {
    GET_ALL_BEERS,
    GET_BEERS_BY_ALCOHOL,
    GET_BEERS_BY_IS_ORGANIC,
    GET_BEER,
    BEER_ERROR,
    CLEAR_BEERS
} from '../constants/action-types';

import secrets from '../config/secrets';
import config from '../config';

// Get All Beers
export const getAllBeers = (pageNumber) => async dispatch => {
    try {
        const res = await axios.get(`${ config.api }/beers/?key=${ secrets.BREWERY_KEY }&p=${ pageNumber }`);

        dispatch({
            type: GET_ALL_BEERS,
            payload: res.data.data,
        });
    } catch (e) {
        dispatch({ type: BEER_ERROR });
    }
};

// Get Beers By Alcohol
export const getBeersByAlcohol = (pageNumber, quantity) => async dispatch => {
    try {
        const res = await axios.get(`${ config.api }/beers/?key=${ secrets.BREWERY_KEY }&p=${ pageNumber }&abv=${ quantity }`);

        dispatch({
            type: GET_ALL_BEERS,
            payload: res.data.data,
        });
    } catch (e) {
        dispatch({ type: BEER_ERROR });
    }
};

// Get Beers By Checking if is organic or not
export const getBeersByOrganic = (pageNumber, checkOrganic) => async dispatch => {
    try {
        const res = await axios.get(`${ config.api }/beers/?key=${ secrets.BREWERY_KEY }&p=${ pageNumber }&isOrganic=${ checkOrganic === 1 ? 'Y' : 'N' }`);

        dispatch({
            type: GET_BEERS_BY_IS_ORGANIC,
            payload: res.data.data,
        });
    } catch (e) {
        dispatch({ type: BEER_ERROR });
    }
};

// Get Beers By Two Filters
export const getBeersByBothFilters = (pageNumber, quantity, checkOrganic) => async dispatch => {
    console.log('Searching with ' + pageNumber + ' ' + quantity + ' ' + checkOrganic);
    try {
        const res = await axios.get(`${ config.api }/beers/?key=${ secrets.BREWERY_KEY }&p=${ pageNumber }&isOrganic=${ checkOrganic === 1 ? 'Y' : 'N' }&abv=${ quantity }`);

        dispatch({
            type: GET_BEERS_BY_IS_ORGANIC,
            payload: res.data.data,
        });
    } catch (e) {
        dispatch({ type: BEER_ERROR });
    }
};

// Clear Beers
export const clearBeers = () => async dispatch => {
    dispatch({
        type: CLEAR_BEERS
    });
};
