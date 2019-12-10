export interface CreatePostDto {
    title: string;
    subTitle: string;
    imageUrl: string;
    content: string;
}

export interface EditPostDto {
    id: number;
    title: string;
    subTitle: string;
    imageUrl: string;
    content: string;
}

export class IPost {
    id: number;
    title: string;
    subTitle: number;
    breed: string;
    imageUrl: string;
    content: string;
}
