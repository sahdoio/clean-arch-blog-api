export interface HttpRequestOptions {
  method: 'POST' | 'PUT' | 'DELETE' | 'GET'
  url: string
  body?: any
  headers?: any
  query?: any
}

export interface ExternalHttpRequest {
  exec: (opts: HttpRequestOptions) => Promise<any>
}
