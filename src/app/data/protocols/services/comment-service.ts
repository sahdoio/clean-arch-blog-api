import { Result } from "../../../domain/protocols/result";

export interface CommentServiceResultDto {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export interface CommentService {
  exec: (postId: number) => Promise<Result<CommentServiceResultDto[]>>
}
