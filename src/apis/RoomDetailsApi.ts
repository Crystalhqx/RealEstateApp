import axios from 'axios';

export const getRoomDetails = async () => {
  const BASE_URL = 'https://livestates.tech/api';
  const ENDPOINT = '/recommend/room_detail';
  const API_URL = `${BASE_URL}${ENDPOINT}`;
  const AUTH_TOKEN = 'dIVvUlwYUtJ7tFTpwzvHVmz_xdnRkgVFdcsMGOHuwATw';

  try {
    const response = await axios.post(
      API_URL,
      {
        id: 47,
      },
      {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      },
    );
    return response.data.data;
  } catch (error) {
    console.error('Error getting room details:', error);
    throw error;
  }
};
