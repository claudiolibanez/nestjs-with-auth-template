import { Test } from '@nestjs/testing';

import { AppModule } from 'src/app.module';

describe('AppModule', () => {
  let module: AppModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
