import Axios from 'axios';
import { makeAutoObservable } from 'mobx';


class Profile {

    _users = [];
    _usersEndpointUrl = `${process.env.PUBLIC_URL}/data/users.json`;
    //'https://61669f4013aa1d00170a65df.mockapi.io/users';

    constructor() {
        makeAutoObservable(this);
        this.fetchUser();
    }

    fetchUser() {
        Axios.get(this._usersEndpointUrl)
            .then((result) => {
                this.users = result.data;
                console.log(this.users);
            })
    }

    get users() {
        return this._users;
    }

    set users(users) {
        this._users = users;
    }
}

export default new Profile();