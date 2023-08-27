import { drinks as DrinksModel} from "@prisma/client";

export class DrinkEntity implements DrinksModel{
    id: string;
    name: string;
    price: number;
    categoryId: string;
}
