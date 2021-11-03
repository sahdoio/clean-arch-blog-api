import { Result } from "../../../domain/protocols/result";

export interface PostServiceResultDto {
  id: number
  userId: number
  title: string
  body: string
}

export interface PostService {
  exec: () => Promise<Result<PostServiceResultDto[]>>
}
