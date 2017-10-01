import { CleanUpChoresPage } from './app.po';

describe('clean-up-chores App', () => {
  let page: CleanUpChoresPage;

  beforeEach(() => {
    page = new CleanUpChoresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
