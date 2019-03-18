import { browser, by, element } from 'protractor';

export class AppPage {
  public static getParagraphText(): any {
    return element(by.css('app-root h1')).getText();
  }

  public static navigateTo(): any {
    return browser.get('/');
  }
}
