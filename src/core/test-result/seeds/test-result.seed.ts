import { Factory } from 'typeorm-seeding';
import { TestResult } from '../entities/test-result.entity';

export class TestResultSeed {
  async run(factory: Factory): Promise<void> {
    await factory(TestResult)().createMany(1000);
  }
}
