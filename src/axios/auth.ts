import { AxiosResponse } from "axios";
import { authorizedRequest, unauthorizedRequest } from "./instance";
import { ILoginResponse } from "../interfaces/auth";

interface IAccount {
  email: string,
  password: string
}

interface IRefreshToken {
  access_token: string
}

const authServices = {
  login: (account: IAccount): Promise<AxiosResponse<ILoginResponse, any>> => {
    const url = "/v3/auth/login";
    return unauthorizedRequest.post(url, account)
  },

  refreshToken: (): Promise<AxiosResponse<IRefreshToken, any>> => {
    const url = "/v3/auth/refresh-token";
    return authorizedRequest.get(url)
  }
}

export default authServices