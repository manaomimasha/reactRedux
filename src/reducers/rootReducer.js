import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
// import alertaReducer from './alertaReducer';

const rootReducer = combineReducers({
  productos: productosReducer
  //  Reductor para la porción del estado 'productos'
//   alerta: alertaReducer, 
});

export default rootReducer;

