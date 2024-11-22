export interface UserType {
    id: number;
    username: string;
    password: string;
    posts: PostType[];
}

export interface PostType {
    id: number;
    content: string;
    createdAt: string;
    authorId: number;
    author: UserType;
}