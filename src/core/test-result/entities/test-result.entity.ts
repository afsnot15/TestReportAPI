import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateTestResultDto } from './../dto/create-test-result.dto';

@Entity('test_result')
export class TestResult {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_test_result' })
  id: number;

  @Column({ type: 'timestamp', name: 'date_start', nullable: false })
  dateStart: Date;

  @Column({ type: 'timestamp', name: 'date_end' })
  dateEnd: Date;

  @Column({ nullable: false })
  passed: boolean;

  @Column({ length: 8, nullable: false })
  reference: string;

  @Column({ type: 'text' })
  observation: string;

  @Column({ type: 'timestamp', name: 'create_at', nullable: false })
  createAt: Date;

  constructor(createTestResultDto: CreateTestResultDto) {
    Object.assign(this, createTestResultDto);
  }
}
