import { PostsService, PostsRo } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(post: CreatePostDto, req: any): Promise<void>;
    findAll(query: any): Promise<PostsRo>;
    findById(id: any): Promise<import("./posts.entity").PostsEntity>;
    update(id: any, post: any): Promise<import("./posts.entity").PostsEntity>;
    remove(id: any): Promise<import("./posts.entity").PostsEntity>;
}
