import { Module } from '@nestjs/common';
import { PostService } from './post/post.service';
import { PostController } from './post/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post/post.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity]),
    ],
    controllers: [
        PostController,
    ],
    providers: [
        PostService,
    ],
})
export class BlogModule { }
