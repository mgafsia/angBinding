import { AngBindingWebPage } from './app.po';

describe('ang-binding-web App', () => {
  let page: AngBindingWebPage;

  beforeEach(() => {
    page = new AngBindingWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
