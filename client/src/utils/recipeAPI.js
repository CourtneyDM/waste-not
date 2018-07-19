import axios from 'axios';

export default {


    getFoodDetails: query => {
        const X_APP_KEY = 'c3b26ca2cb01642505add4d1060c2b6e';
        const X_APP_ID = '72c10b6c';
        return axios( {
            method: 'get',
            url: `https://api.edamam.com/search`,
            headers: {
                'e-app-key': X_APP_KEY,
                'e-app-key': X_APP_ID
            }
        } );
    },

    getBarcodeDetails: query => {
        const X_APP_KEY = 'c3b26ca2cb01642505add4d1060c2b6e';
        const X_APP_ID = '72c10b6c';
        return axios( {
            method: 'get',
            url: `https://api.edamam.com/search`,
            headers: {
                'e-app-key': X_APP_KEY,
                'e-app-key': X_APP_ID
            }
        });
    }
}