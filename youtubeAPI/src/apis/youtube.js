import axios from 'axios';

const KEY = 'KEY was removed due to privacy issues';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        maxResults: 5, 
        key: KEY
    }
});
