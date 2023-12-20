import { CategroyEntity } from 'src/categroy/entities/categroy.entity';
import { TagEntity } from 'src/tag/entities/tag.entity';
import { User } from 'src/user/entities/user.entity';
export declare class PostsEntity {
    id: number;
    title: string;
    content: string;
    contentHtml: string;
    summary: string;
    coverUrl: string;
    count: number;
    likeCount: number;
    isRecommend: number;
    status: string;
    author: User;
    category: CategroyEntity;
    tags: TagEntity[];
    publishTime: Date;
    create_time: Date;
    update_time: Date;
}
