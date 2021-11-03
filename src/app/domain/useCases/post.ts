import { CommentServiceResultDto } from "../../data/protocols/services/comment-service";
import { PostServiceResultDto } from "../../data/protocols/services/post-service";
import { Result } from "../protocols/result";

export interface PostDto {
  start?: number
  size?: number
}

export interface PostResultDto {
  id: number
  userId: number
  title: string
  body: string
  comments: CommentServiceResultDto[]
}

export interface PostUc {
  exec: (data?: PostDto) => Promise<Result<PostResultDto>>
}
