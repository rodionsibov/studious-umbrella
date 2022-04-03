import { CurrentUser } from "src/app/shared/types/current-user"
import { PostRequest } from "./post-request"
import { UserRequest } from "./user-request"

export interface UserListState {
   isSubmitting: boolean
   currentUser: UserRequest
   users: UserRequest[]
   posts: PostRequest[]
  }
  