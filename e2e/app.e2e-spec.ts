import { TestInjectionTokenPage } from './app.po';

describe('test-injection-token App', () => {
  let page: TestInjectionTokenPage;

  beforeEach(() => {
    page = new TestInjectionTokenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
