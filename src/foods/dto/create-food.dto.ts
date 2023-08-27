import { OmitType } from "@nestjs/mapped-types";
import { FoodEntity } from "../entities/food.entity";
import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateFoodDto extends OmitType(FoodEntity, [
    'id'
]) {
    @IsNotEmpty()
    name: string;

    @IsNumberString()
    price: number;

    @IsNotEmpty()
    categoryId: string;
}
