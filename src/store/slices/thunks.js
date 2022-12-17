import { kittenApi } from "../../api/kittenApi";
import { setLoading, getKittens } from "./kittenSlice";



export const getKittensThunk = () => {
    return async (dispatch, getState) => {
        dispatch(setLoading());
        const { data } = await kittenApi.get('/api/kittens')
        dispatch(getKittens(data))
    }
}