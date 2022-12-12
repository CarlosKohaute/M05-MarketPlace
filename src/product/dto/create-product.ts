import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product Name',
    example: 'Samsung S22 Ultra',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product description',
    example: `The Samsung Galaxy S22 Ultra is the headliner of the S22 series. Its the first S series phone to include Samsung's S Pen. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 1 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.`,
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Product price',
    example: 7999.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link image of product',
    example:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oficinadanet.com.br%2Fsmartphones%2Fsamsung-galaxy-s22-ultra&psig=AOvVaw2uBsSEWBSATj3KsQjgWfYb&ust=1670870982440000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMD2hM2d8vsCFQAAAAAdAAAAABAE',
  })
  image: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id da categoria do produto',
    example: '7de6d3ce-b4cb-435f-b784-8c4935ae0cdc',
  })
  categoryId: string;
}
