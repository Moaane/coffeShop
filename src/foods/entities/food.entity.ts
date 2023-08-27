import { foods as foodsModel} from "@prisma/client";

export class FoodEntity implements foodsModel {
    id: string;
    name: string;
    price: number;
    categoryId: string;
}
