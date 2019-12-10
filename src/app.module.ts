import { Module } from '@nestjs/common';
import { BlogModule } from './blog/BlogModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './blog/post/post.module';

@Module({
  imports: [
    PostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
