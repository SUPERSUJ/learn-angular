import { PipesWithCachePipe } from './pipes-with-cache.pipe';

describe('PipesWithCachePipe', () => {
  it('create an instance', () => {
    const pipe = new PipesWithCachePipe();
    expect(pipe).toBeTruthy();
  });
});
