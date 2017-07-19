import { Angular4ImageSearchPage } from './app.po';

describe('angular4-image-search App', () => {
  let page: Angular4ImageSearchPage;

  beforeEach(() => {
    page = new Angular4ImageSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
