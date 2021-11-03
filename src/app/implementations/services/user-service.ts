import { ok } from "../../data/helpers/result"
import { UserService, UserServiceResultDto } from "../../data/protocols/services/user-service"
import { Result } from "../../domain/protocols/result"
import { AxiosHttpRequest } from "../helpers/external-http-request"

export class DefaultUserService implements UserService {
  private readonly axiosHttpRequest: AxiosHttpRequest

  constructor () {
    this.axiosHttpRequest = new AxiosHttpRequest()
  }

  async exec (): Promise<Result<UserServiceResultDto[]>> {
    const result = await this.axiosHttpRequest.exec({
      method: 'GET',
      url: `${process.env.SERVICE_PLACE_HOLDER_BASE_URL}/users`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return ok('success', result.data)
  }
}
