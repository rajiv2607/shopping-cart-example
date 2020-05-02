import * as ActionConstants from "../actions/ActionConstants";

const initialState = {
    items: [
        {               id:1,
                        name: "Samsung Series 4",
                        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        price: {
                            actual: 13999,
                            display: 22500
            },
                        discount: 37,
                        quantity:0
        },
        {                id:2,
                        name: "Samsung Super 6",
                        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        price: {
                            actual: 35999,
                            display: 66900
            },
                        discount: 46,
                        quantity:0
        },
        {                id:3,
                        name: "Samsung The Frame",
                        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        price: {
                            actual: 84999,
                            display: 133900
            },
                        discount: 36,
                        quantity:0
        },
        {                id:4,
                        name: "Thomson B9 Pro",
                        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        price: {
                            actual: 9999,
                            display: 16999
            },
                        discount: 41,
                        quantity:0
        },
        {                id:5,
                        name: "LG Ultra HD",
                        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        price: {
                            actual: 39990,
                            display: 79990
            },
                        discount: 50,
                        quantity:0
        },
        {                id:6,
                        name: "Vu Ready LED TV",
                        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        price: {
                            actual: 7999,
                            display: 17e3
            },
                        discount: 52,
                        quantity:0
        },
        {                id:7,
                        name: "Koryo Android TV",
                        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        price: {
                            actual: 55999,
                            display: 199990
            },
                        discount: 71,
                        quantity:0
        },
        {                id:8,
                        name: "Micromax LED Smart",
                        image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        price: {
                            actual: 9999,
                            display: 27990
            },
                        discount: 64,
                        quantity:0
        },
        {               id:1,
            name: "Samsung Series 9",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 17998,
                display: 29500
},
            discount: 47,
            quantity:0
}
    ],
    addedItems: [],
    total: 0,
    searchList : [],
    searchMode : false
}


const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionConstants.QUANTITY_INCREASES:
            {
                let addedItem = state.items.find(item => item.id === action.id)
                let existed_item = state.addedItems.find(item => action.id === item.id)
                if (existed_item) {
                    addedItem.quantity += 1
                    return {
                        ...state,
                        total: state.total + addedItem.price.actual
                    }
                }
                else {
                    addedItem.quantity = 1;
                    //calculating the total
                    let newTotal = state.total + addedItem.price.actual

                    return {
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total: newTotal
                    }

                }
            }

        case ActionConstants.QUANTITY_DECREASED: {
            let itemToRemove = state.addedItems.find(item => action.id === item.id)
            let new_items = state.addedItems.filter(item => action.id !== item.id)

            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }

        case ActionConstants.SORT_BY_DISCOUNT: {
            state.items.sort(function(a,b) {
               return  b.discount - a.discount
            })
            return  {
                ...state
            }
        } 

        case ActionConstants.SORT_HEIGH_TO_LOW: {
            state.items.sort(function(a,b) {
               return  b.price.actual - a.price.actual
            })
            return  {
                ...state
            }
        }
    
        case ActionConstants.SORT_LOW_TO_HEIGHT: {
            state.items.sort(function(a,b) {
                return  a.price.actual - b.price.actual
            })
            return  {
                ...state
            }
        }

        case ActionConstants.FILTER_ELEMENT: {
            state.items.filter( function (price ) {
                return price.price.actual < action.to && price.price.actual>action.from
            })
            return {
                ...state
            }
        }

        case  ActionConstants.SEARCH_ELEMENT: {
            state.items.searchList = state.items.filter(function(data) {
                if(action.searchString !== '') {
                    state.searchMode = true
                }
                else {
                    state.searchMode = false
                }
                return data.name.indexOf(action.searchString) !== -1
            })
            return {
               ...state,
               searchList : state.items.searchList
            }
            

        }
        default:
            return state;

    }
}

export default addToCartReducer
