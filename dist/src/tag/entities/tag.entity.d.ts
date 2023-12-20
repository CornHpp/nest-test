import { PostsEntity } from 'src/posts/posts.entity';
export declare class TagEntity {
    id: number;
    name: string;
    posts: Array<PostsEntity>;
}
