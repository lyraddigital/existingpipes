import { ExistingpipesPage } from './app.po';

describe('existingpipes App', function() {
  let page: ExistingpipesPage;

  beforeEach(() => {
    page = new ExistingpipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
