import { Injectable, Inject } from '@nestjs/common';
import { PostEntity } from './post.entity';
import _ = require('lodash');

@Injectable()
export class PostService {
    constructor(
        @Inject('POST_REPOSITORY') private readonly postRepository: typeof PostEntity,
    ) { }

    async find(): Promise<PostEntity[]> {
        return await this.postRepository.findAll<PostEntity>();
    }

}
