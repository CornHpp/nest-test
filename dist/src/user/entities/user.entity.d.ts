import { PostsEntity } from 'src/posts/posts.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    avatar: string;
    email: string;
    role: string;
    createTime: Date;
    updateTime: Date;
    encryptPwd(): Promise<void>;
    posts: PostsEntity[];
}
