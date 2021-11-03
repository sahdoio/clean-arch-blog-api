import { PostUc } from '../../domain/useCases/post'
import { serverError, serverResponse } from '../helpers/http'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class PostController implements Controller {
  constructor (
    private readonly postUc: PostUc,
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const start = httpRequest.query.start ? Number(httpRequest.query.start) : undefined
      const size = httpRequest.query.size ? Number(httpRequest.query.size) : undefined
      const res = await this.postUc.exec({ start, size })
      return serverResponse(res)
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}
