import axios from 'axios';
import { FETCH_LIST } from './types';

export const fetchList = () => {
    return async function(dispatch) {
        const response = await axios.get('/api');
        console.log('response ', response);
        dispatch({ type: FETCH_LIST, payload: response });
    }
};