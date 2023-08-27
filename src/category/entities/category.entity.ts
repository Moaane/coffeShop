import { category as CategoryModel } from "@prisma/client";

export class CategoryEntity implements CategoryModel {
    id: string;
    name: string;
}
