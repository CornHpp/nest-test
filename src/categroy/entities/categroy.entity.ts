// category.entity.ts
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostsEntity } from '../../posts/posts.entity';
@Entity('category')
export class CategroyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => PostsEntity, (post) => post.category)
  posts: PostsEntity[];
}
