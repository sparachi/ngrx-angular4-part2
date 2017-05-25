import { FinancialsAppPage } from './app.po';

describe('financials-app App', () => {
  let page: FinancialsAppPage;

  beforeEach(() => {
    page = new FinancialsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
