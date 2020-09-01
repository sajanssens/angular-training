import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('title')).getText() as Promise<string>;
  }

  searchBy(f: string): Promise<number> {
    element(by.id('search')).sendKeys(f);
    // const count = element.all(by.css('.user')).count(): Promise<number>;
    const count = element(by.id('users')).all(by.className('user')).count() as Promise<number>;
    return count;
  }
}
