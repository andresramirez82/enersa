import { SET_PROVIDER, GET_PROVIDER } from '../actions/providers';
// import { ALBUM_SAVED, ALBUM_UPDATED, ALBUM_DELETED } from '../actions/albums';
// import { sortArrayByField } from '../utils/common'; // Para ordenar

export default function providers(state = [], action) {
    switch(action.type) {
    case GET_PROVIDER:
      // creamos una copia del state actual
      const copy = Array.from(state);
      // modificamos lo que necesitamos
      //copy.push(action.payload.text)
      // retornamos el nuevo state
      return copy;
    case SET_PROVIDER:
          // creamos una copia del state actual
          const estado = Array.from(state);
          // modificamos lo que necesitamos
          estado.push(action.payload.provider)
          // retornamos el nuevo state
          return estado;
    default:
      // si el action.type no existe o no concuerda
      // con ningunos de los casos definidos
      // devolvemos el estado sin modificar
      return state;
    }
    
  }
