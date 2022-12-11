/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
