import { Ng4firebasePage } from './app.po';

describe('ng4firebase App', () => {
  let page: Ng4firebasePage;

  beforeEach(() => {
    page = new Ng4firebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
