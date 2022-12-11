import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { getChromeOptions } from "./BrowserOptions.js";
const webdriver = require("selenium-webdriver");
import { Config } from "../../config.js";

export class BaseClass {
  driver;

  getChromeDriver = async () => {
    return new Promise(async (resolve, reject) => {
      const options = await getChromeOptions();
      let driver1 = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();
      resolve(driver1);
    });
  };

  getFirefoxDriver = async () => {
    return new Promise(async (resolve, reject) => {
      let driver1 = new webdriver.Builder().forBrowser("firefox").build();
      resolve(driver1);
    });
  };

  createDriver = async () => {
    return new Promise(async (resolve, reject) => {
      switch (Config.browsername) {
        case "chrome":
          this.driver = await this.getChromeDriver();
          break;
        case "firefox":
          this.driver = await this.getFirefoxDriver();
          break;
      }
      resolve(this.driver);
    });
  };

  closeDriver = async () => {
    this.driver.quit();
  };

  launchApp = async () => {
    return new Promise(async (resolve, reject) => {
      await this.createDriver();
      this.driver.get(Config.baseUrl);
      resolve(this.driver);
    });
  };

  sleep = async (time=30) => {
    await this.driver.sleep(time * 1000);
  };
}
