import * as ActionConstants from "./ActionConstants";

export function increment(id) {
    return{
        type : ActionConstants.QUANTITY_INCREASES,
        id
    }
}

export function decrement(id){
    return{
        type : ActionConstants.QUANTITY_DECREASED,
        id
    }
}

export function sortByHeightToLow() {
    return {
        type :  ActionConstants.SORT_HEIGH_TO_LOW,
    }
}
export function sortByDiscount() {
    return {
        type :  ActionConstants.SORT_BY_DISCOUNT,
    }
}
export function sortByLowToHeight() {
    return {
        type :  ActionConstants.SORT_LOW_TO_HEIGHT
    }
}

export function filterElements( to , from) {
    return {
        type : ActionConstants.FILTER_ELEMENT,
        to : to,
        from : from
}}

export function searchLemeennt( searchString) {
    return {
        type : ActionConstants.SEARCH_ELEMENT,
        searchString
}}