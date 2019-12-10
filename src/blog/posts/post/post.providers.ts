import { PostEntity } from './post.entity';

export const postProviders = [
  {
    provide: 'POST_REPOSITORY',
    useValue: PostEntity,
  },
];
