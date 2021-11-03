import { ok } from "../../data/helpers/result"
import { CommentService, CommentServiceResultDto } from "../../data/protocols/services/comment-service"
import { Result } from "../../domain/protocols/result"
import { AxiosHttpRequest } from "../helpers/external-http-request"

export class DefaultCommentService implements CommentService {
  private readonly axiosHttpRequest: AxiosHttpRequest

  constructor () {
    this.axiosHttpRequest = new AxiosHttpRequest()
  }

  async exec (postId: number): Promise<Result<CommentServiceResultDto[]>> {
    const result = await this.axiosHttpRequest.exec({
      method: 'GET',
      url: `${process.env.SERVICE_PLACE_HOLDER_BASE_URL}/posts/${postId}/comments`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return ok('success', result.data)
  }
}
