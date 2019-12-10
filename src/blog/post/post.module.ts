import { Module } from '@nestjs/common';
import { PostController } from './post.controller';

@Module({
    imports: [
        PostController,
    ],
    controllers: [],
    providers: [],
})
export class PostModule {
    constructor() {}
}
