import instance from '@/helper/axios';

const axios = instance({ baseURL: 'https://easy-mock.com/mock/5c7b997cd764b271d20acae8' });

const base = '/admin';

const flights = () => axios.get(`${base}/flights`);

export default {
    flights,
};
