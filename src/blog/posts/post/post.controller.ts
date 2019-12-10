import { Controller, Get} from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from './post.entity';

@Controller('posts')
export class PostController {

    constructor(private postService: PostService) {
    }

    @Get()
    async find(): Promise<PostEntity[]> {
        return this.postService.find();
    }

}
