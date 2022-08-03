import { User } from "@prisma/client";

export type CreateUser = Omit<User & 
    { repeatedPassword?: string },
    "id" | 
    "createdAt"
>