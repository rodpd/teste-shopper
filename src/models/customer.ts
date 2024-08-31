import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';
import { Measure } from './measure.js'

@Table({
  timestamps: false
})
export class Customer extends Model<Customer> {
  
  @PrimaryKey
  @Column
  customer_code: string;

  @HasMany(() => Measure)
  measures: Measure[];

}