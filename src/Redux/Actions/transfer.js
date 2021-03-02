import Axios from 'axios'
import qs from 'qs';

export const transfer = (idpengirim, idpenenerima, amount) => {
    var postData = qs.stringify({
        amount
    });
    return {
        type: 'TRANSFER_USER',
        payload: Axios.patch(
            `http://192.168.100.199:2010/api/transaction/transfer/${idpengirim}/${idpenenerima}`,
            postData,
        ),
    };
};