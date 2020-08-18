import axios from 'axios'
import { Cookies } from 'react-cookie'

const serverUrl = 'http://localhost:3001';

const cookies = new Cookies();
export class AuthController {
    constructor() { }

    static async loginAsync() {
        console.log('login')
        const response = await axios.get(serverUrl + '/api/login')
        const token = response.data.token;
        let d = new Date();
        d.setTime(d.getTime() + (60*60*1000));
        cookies.set('token', token, {path: "/", expires: d});
        return token;
    }
}