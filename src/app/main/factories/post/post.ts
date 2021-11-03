import { PostController } from '../../../presentation/controllers/post'
import { Post } from '../../../data/useCases/post'
import { DefaultPostService } from '../../../implementations/services/post-service'
import { DefaultCommentService } from '../../../implementations/services/comment-service'
import { DefaultUserService } from '../../../implementations/services/user-service'

export const makePostController = (): PostController => {
  const postService = new DefaultPostService()
  const userService = new DefaultUserService()
  const commentService = new DefaultCommentService()
  const uc = new Post(
    postService,
    userService,
    commentService
  )
  const controller = new PostController(uc)
  return controller
}
