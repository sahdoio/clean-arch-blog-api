import { ExternalHttpRequest, HttpRequestOptions } from '../../data/protocols/utils/external-http-request'
import axios, { AxiosPromise } from 'axios'

export class AxiosHttpRequest implements ExternalHttpRequest {
  async exec (opts: HttpRequestOptions): Promise<AxiosPromise<any>> {
    const { url, method, body, headers, query } = opts
    const result = await axios({ params: query, url, method, data: body, headers })
    return result
  }
}
