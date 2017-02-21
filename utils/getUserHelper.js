/* eslint-disable */

import axios from 'axios';

const helpers = {
  proccessUsersInfo: () => {
    return axios.get('https://reqres.in/api/users?page=2')
      .then((response) => {
        return response.data.data;
      })
      .catch((err) => { console.log('err in proccessUsersInfo', err);});
  }
};

module.exports = helpers;
