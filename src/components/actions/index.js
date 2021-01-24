import { FETCH_USER, FETCH_INGREDIENT } from './type';
import axios from 'axios';
import { API } from '../../apis/keys';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchIngredient = ingr => async dispatch => {
    const res = await axios.get(
        API.URL,
        {
            params: {
                app_id: API.ID,
                app_key: API.KEY,
                ingr: ingr
            }
        });
    dispatch({ type: FETCH_INGREDIENT, payload: res.data });
}