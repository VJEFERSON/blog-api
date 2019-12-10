import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { IPost } from './post.models';

@Table({
    timestamps: true,
    schema: 'blog',
    tableName: 'post',
})

export class PostEntity extends Model<IPost> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        field: 'ID',
    })
    id: number;

    @Column
    title: string;

    @Column
    subTitle: number;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;
}
