import { ok } from "../../data/helpers/result"
import { PostService, PostServiceResultDto } from "../../data/protocols/services/post-service"
import { Result } from "../../domain/protocols/result"
import { AxiosHttpRequest } from "../helpers/external-http-request"

export class DefaultPostService implements PostService {
  private readonly axiosHttpRequest: AxiosHttpRequest

  constructor () {
    this.axiosHttpRequest = new AxiosHttpRequest()
  }

  async exec (): Promise<Result<PostServiceResultDto[]>> {
    const result = await this.axiosHttpRequest.exec({
      method: 'GET',
      url: `${process.env.SERVICE_PLACE_HOLDER_BASE_URL}/posts`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return ok('success', result.data)
  }
}
