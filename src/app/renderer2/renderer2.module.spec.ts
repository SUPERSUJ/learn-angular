import { Renderer2Module } from './renderer2.module';

describe('Renderer2Module', () => {
  let renderer2Module: Renderer2Module;

  beforeEach(() => {
    renderer2Module = new Renderer2Module();
  });

  it('should create an instance', () => {
    expect(renderer2Module).toBeTruthy();
  });
});
