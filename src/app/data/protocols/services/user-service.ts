import { Result } from "../../../domain/protocols/result";

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface Geo {
  lat: string
  lng: string
}

export interface Address {
  street: number
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface UserServiceResultDto {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: string
}

export interface UserService {
  exec: () => Promise<Result<UserServiceResultDto[]>>
}
