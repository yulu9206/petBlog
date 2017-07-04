import { PetsBlogPage } from './app.po';

describe('pets-blog App', () => {
  let page: PetsBlogPage;

  beforeEach(() => {
    page = new PetsBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
