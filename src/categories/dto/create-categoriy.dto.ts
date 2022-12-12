/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'Categoria, se o produto é um celular ou um notebook por exemplo',
    example: 'Celular',
  })
  name: string;
}
