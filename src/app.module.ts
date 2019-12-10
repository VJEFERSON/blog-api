import { Module } from '@nestjs/common';
import { PostsModule } from './blog/posts/posts.module';

@Module({
  imports: [
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
