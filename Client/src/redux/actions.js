import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./types"
export function  addFavorite (obj) {
    return {type: ADD_FAVORITE , payload: obj}
} 
export function deleteFavorite (id) {
    return {type: DELETE_FAVORITE, payload: id}
}
export function filterCards(filter) {
    return { type: FILTER, payload: filter}
}
export function orderCards(order) {
    return { type: ORDER, payload: order}
}