/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
