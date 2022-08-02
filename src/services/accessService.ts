import { User } from "@prisma/client";

export type CreateUser = Omit<User & 
    { repeatedBridePassword?: string } &
    { repeatedGroomPassword?: string },
    "id" | 
    "createdAt"
>