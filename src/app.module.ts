import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FoodsModule } from './foods/foods.module';
import { CategoryModule } from './category/category.module';
import { DrinksModule } from './drinks/drinks.module';

@Module({
  imports: [PrismaModule, FoodsModule, CategoryModule, DrinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
