// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART';


//Action Creators

export const addItem = (item: any) => ({

    type: ADD_TO_CART,
    payload: item,
});


export const removeItem = (itemId: string) => ({

    type: REMOVE_FROM_CART,
    payload: itemId,
});

export const updateItem = (item: any) => ({

    type: UPDATE_QUANTITY,
    payload: item,
});

export const clearCart = () => ({

    type: EMPTY_CART
});

