import { HttpResponse } from '../protocols/http'
import { ServerError } from '../errors'
import { Result } from '../../domain/protocols/result'

export const serverResponse = (res: Result<any>): HttpResponse => ({
  statusCode: res.code,
  body: {
    msg: res.msg,
    data: res.data
  }
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
