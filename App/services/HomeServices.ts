import ApiClient from "@config/axios.config"

import {
  UsersRequestPayload,
  UsersSuccessPayload,
} from "@redux/HomeRedux/types";

export async function getUsers({ pageParam, per_page }: UsersRequestPayload) {
  try {
    // const response = await ApiClient.get<UsersSuccessPayload>(`${env.API_URL}/users`, {
    //   params: {
    //     ...(pageParam && {
    //       page: pageParam,
    //     }),
    //     ...(per_page && {
    //       per_page,
    //     }),
    //   },
    // });
    // return response.data;
    return "";
  } catch (error) {
    console.error('getUsers - Error: ', error);
    throw error;
  }
}
