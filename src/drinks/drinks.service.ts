import { Injectable } from '@nestjs/common';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DrinksService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createDrinkDto: CreateDrinkDto) {
    return await this.prisma.drinks.create({
      data: createDrinkDto
    });
  }

  async findAll() {
    return await this.prisma.drinks.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.drinks.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateDrinkDto: UpdateDrinkDto) {
    return await this.prisma.drinks.update({
      where: { id },
      data: updateDrinkDto
    });
  }

  async remove(id: string) {
    return await this.prisma.drinks.findUnique({
      where: { id }
    });
  }
}
