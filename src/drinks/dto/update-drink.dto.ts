import { OmitType } from '@nestjs/mapped-types';
import { DrinkEntity } from '../entities/drink.entity';
import { IsNotEmpty, IsNumberString } from "class-validator";

export class UpdateDrinkDto extends OmitType(DrinkEntity, [
    'id'
]) {
    @IsNotEmpty()
    name: string;

    @IsNumberString()
    price: number;

    @IsNotEmpty()
    categoryId: string;
}
