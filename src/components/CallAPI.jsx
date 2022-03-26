import axios from 'axios'

export default function CallAPI(UserId) {
    // create api endpoint
    const api = axios.create({
        baseURL: 'http://jsonplaceholder.typicode.com/users/'
    })   
    
    function getApi() {
        let cancel
        let data = api.get(`/${UserId}/todos`, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(({data}) => data)
        return {data, cancel}
    }
    return getApi()
}