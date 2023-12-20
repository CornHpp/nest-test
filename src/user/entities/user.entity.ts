// use/entities/user.entity.ts
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { PostsEntity } from 'src/posts/posts.entity';
// import { Exclude } from 'class-transformer';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  username: string; // 用户名

  @Column({ length: 100 })
  password: string; // 密码

  @Column('text', { nullable: true })
  avatar: string; //头像

  @Column('text', { nullable: true })
  email: string;

  @Column('simple-enum', { enum: ['root', 'author', 'visitor'] })
  role: string; // 用户角色

  @Column({
    name: 'create_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column({
    name: 'update_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;

  @BeforeInsert()
  async encryptPwd() {
    // 如果密码字段长度大于已散列密码的长度，说明已经散列过，不再进行散列操作
    if (!this.password || this.password.length > 60) {
      return;
    }

    this.password = await bcrypt.hashSync(this.password, 10);
  }

  @OneToMany(() => PostsEntity, (post) => post.author)
  posts: PostsEntity[];
}
