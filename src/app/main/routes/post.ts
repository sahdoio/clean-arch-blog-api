import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makePostController } from '../factories/post/post'

export default (router: Router): void => {
  router.get('/posts', adaptRoute(makePostController()))
}
