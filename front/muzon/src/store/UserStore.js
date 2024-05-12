import { makeAutoObservable } from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUserId(id) {
        this._UserId = id;
    }

    setIsAdmin(bool) {
        this._isAdmin = bool
    }


    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get userId() {
        return this._userId
    }

    get isAdmin() {
        return this._isAdmin
    }

    get user() {
        return this._user
    }
}