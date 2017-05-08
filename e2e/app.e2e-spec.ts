import { TabelaUsuariosPage } from './app.po';

describe('tabela-usuarios App', () => {
  let page: TabelaUsuariosPage;

  beforeEach(() => {
    page = new TabelaUsuariosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
