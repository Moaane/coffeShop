import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createFoodDto: CreateFoodDto) {
    return await this.prisma.foods.create({
      data: createFoodDto
    });
  }

  async findAll() {
    return await this.prisma.foods.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.foods.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    return await this.prisma.foods.update({
      where: { id },
      data: updateFoodDto
    });
  }

  async remove(id: string) {
    return await this.prisma.foods.findUnique({
      where: { id }
    });
  }
}
