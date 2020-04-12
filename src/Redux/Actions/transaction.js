import Axios from 'axios';
import qs from 'qs';

export const topUp = (amount, idUser) => {
  var topupAmount = qs.stringify({
    amount,
  });

  console.log('amount action', amount);
  console.log('id action: ', idUser);
  return {
    type: 'TOPUP',
    payload: Axios.patch(
      'http://10.0.3.2:2010/api/v1/transaction/topUp/' + idUser,
      topupAmount,
    ),
  };
};
