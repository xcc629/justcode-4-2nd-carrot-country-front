import { SERVER_PORT } from 'config';

export async function getDistrictList() {
  return await fetch(`${SERVER_PORT}/infos`, {
    headers: {
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
  })
    .then(res => res.json())
    .then(result => result);
}

export async function getDistrictDetail(districtInfoId) {
  return await fetch(`${SERVER_PORT}/infos/${districtInfoId}`)
    .then(res => res.json())
    .then(result => result);
}
