import expect from 'expect';
import addToCartReducer from '../src/js/reducers/addToCartReducer';

describe('addToCartReducer', () => {
  it('should handle actions', () => {
    let state;
    state = addToCartReducer(undefined, {});
    expect(state).toEqual({items:{items:[{id:1,title:'Winter body',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',price:110},{id:2,title:'Adidas',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',price:8},{id:3,title:'Vans',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',price:120},{id:4,title:'White',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',price:260}],addedItems:[],total:0}});
  });
});