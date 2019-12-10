import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ITag } from './tag.models';

@Table({
    timestamps: true,
    schema: 'blog',
    tableName: 'tag',
})

export class PostEntity extends Model<ITag> {
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
    description: string;

    @Column
    color: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;
}
