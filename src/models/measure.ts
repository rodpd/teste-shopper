import { Table, Column, Model, PrimaryKey, ForeignKey, IsUrl, IsUUID, Default } from 'sequelize-typescript';
import { Customer } from './customer.js'
import { DataTypes } from 'sequelize';

enum measure_types {
  'WATER', 'GAS'
}

@Table({
  timestamps: false
})
export class Measure extends Model {

  @IsUUID(4)
  @PrimaryKey
  @Default(DataTypes.UUIDV4)
  @Column
  uuid: string;

  @Column
  measure_datetime: string;

  @Column
  measure_type: measure_types;

  @Column
  has_confirmed: boolean;

  @Column
  measure_value: number;

  @IsUrl
  @Column
  image_url: string;

  @ForeignKey(() => Customer)
  @Column
  CustomerId: string;
  
}