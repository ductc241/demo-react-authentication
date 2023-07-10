import { AxiosResponse } from "axios";
import { authorizedRequest } from "./instance";

const userServices = {
  profile: (): Promise<AxiosResponse<any, any>> => {
    const url = "/v3/user/profile";
    return authorizedRequest.get(url)
  }
}

export default userServices