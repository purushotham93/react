import { Reducer } from "redux";
import { ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART, EMPTY_CART } from "../actions/cartActions";

const initalSatate = { items: [] };

interface CartState {

    items: any[];
  
  }
  

interface Action {
    type: string;
    payload?: any;
}

const cartReducer: Reducer<CartState> = (state = initalSatate, action: Action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, items: [...state.items, action.payload] };
        case REMOVE_FROM_CART:
            return { ...state, items: state.items.filter((item: any) => item.id !== action.payload) };
        case UPDATE_QUANTITY:
            return {...state, items: state.items.map((item: any) => {
                item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
            })};

        case EMPTY_CART:
            return {...state, items: []};
        default:
            return state;
    }
}

export default cartReducer;