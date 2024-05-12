import { makeAutoObservable } from "mobx";

export default class BasketStore {
  _baskets = [];
  _userBasket = [];

  constructor() {
    makeAutoObservable(this);
  }

  setBaskets = (baskets) => {
    this._baskets = baskets;
  };

  setUserBasket = (userBasket) => {
    this._userBasket = userBasket;
  };

  get baskets() {
    return this._baskets;
  }

  get userBasket() {
    return this._userBasket;
  }
}