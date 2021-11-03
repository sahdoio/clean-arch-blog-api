import { UcOptions } from '../../domain/protocols/uc-options'
import { Result } from '../../domain/protocols/result'
import { ok } from '../helpers/result'
import { PostDto, PostResultDto, PostUc } from '../../domain/useCases/post'
import { PostService } from '../protocols/services/post-service'
import { CommentService } from '../protocols/services/comment-service'
import { UserService } from '../protocols/services/user-service'

export class Post implements PostUc {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
    private readonly commentService: CommentService
  ) { }

  async exec (data?: PostDto): Promise<Result<PostResultDto>> {
    // get posts
    let posts = await this.postService.exec()
   
    if (posts.code === 200) {
      // get user info and 
      // apply pagination filters
      let users = await this.userService.exec()
      let resultCount = 0     
      let filteredData = []

      for (let index = 0; index < posts.data.length; index++) {
        var post = posts.data[index]

        // pagination filters
        if (data.start && (index + 1) < data.start) {
          continue
        }          

        // pagination filters
        if (data.size && resultCount >= data.size) {
          break
        }        

        // user info
        const findUser = users.code === 200 ? users.data.filter(user => user.id === post.userId) : []
        post['user'] = findUser.length > 0 ? findUser[0] : null

        // post commnets
        const comments = await this.commentService.exec(post.id)        
        post['comments'] = comments.code === 200 ? comments.data : []

        resultCount++

        filteredData.push(post)         
      }

      posts.data = filteredData
    }

    return ok('success', posts)
  }
}
