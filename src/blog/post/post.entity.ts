import { Table, Column, Model } from 'sequelize-typescript';
import { IPost } from './post.models';

@Table
export class PostEntity extends Model<IPost> {
    @Column
    id: number;

    @Column
    title: string;

    @Column
    subTitle: number;

    @Column
    breed: string;

    @Column
    imageUrl: string;

    @Column
    content: string;
}
