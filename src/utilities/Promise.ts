import Axios from 'axios';
/*--服务类AJAX-Promise--*/
class Promise {
    constructor() {

    }

    static resource(type: string, url: string, param: {}): any {
        let BaseUrl = `http://localhost:8000/v1/${url}`;
        return Axios({
            method: type,
            url: url,
            responseType: 'stream'
        })
    }
}

export default Promise;