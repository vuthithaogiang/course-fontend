import axios from '~/api/axios';
import useAuth from './useAuth';
import { AxiosHeaders } from 'axios';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();
    console.log(auth.accessToken);

    const refresh = async () => {
        if (auth?.accessToken) {
            //const headers = { Authorization: `Bearer ${auth.accessToken}` };
            const headers = new AxiosHeaders({ Authorization: `Bearer ${auth.accessToken}` });

            const response = await axios.post('/auth/refresh-token', headers);

            setAuth((prev) => {
                console.log(response);
                console.log(response.data.access_token);
                return { ...prev, accessToken: response.data.access_token };
            });

            return response.data.access_token;
        } else {
            console.log('no access token');
        }
    };

    return refresh;
};

export default useRefreshToken;
