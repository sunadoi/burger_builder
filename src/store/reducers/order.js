import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
}

const purchaseInit = (state) => {
  return updateObject(state, { purchased: false })
}

const purchaseStart = (state) => {
  return updateObject(state, { loading: true })
}

const purchaseSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId })
  return updateObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true
  })
}

const purchaseFail = (state) => {
  return updateObject(state, { loading: false })
}

const fetchOrdersStart = (state) => {
  return updateObject(state, { loading: true })
}

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.fetchedOrders,
    loading: false
  })
}

const fetchOrdersFail = (state) => {
  return updateObject(state, { loading: false })
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.PURCHASE_BURGER_INIT: return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START: return purchaseStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseFail(state, action);
    case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:return fetchOrdersFail(state, action)
    default: return state;
  }
}

export default reducer;