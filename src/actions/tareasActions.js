import axios from "axios";
import { CARGANDO, TRAER_TODAS, ERROR } from "../types/tareasTypes";

export const traerTodas = () => async (dispatch) => {

    dispatch({
        type: CARGANDO,        
    });

    try{
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos')   
        dispatch({
            type: TRAER_TODAS,
            payload: respuesta.data
        });
    }catch(error){        
        dispatch({
            type: ERROR,
            payload: 'Información de tareas no disponible'
        });
    }
};