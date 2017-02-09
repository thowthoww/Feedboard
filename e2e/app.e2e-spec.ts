import { FeedboardPage } from './app.po';

describe('feedboard App', function() {
  let page: FeedboardPage;

  beforeEach(() => {
    page = new FeedboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
