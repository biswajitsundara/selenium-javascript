import { createRequire } from "module";
const require = createRequire(import.meta.url);
const chromeDriver = require("selenium-webdriver/chrome");
const path = require("path");

export const getChromeOptions = async () => {
  return new Promise((resolve, reject) => {
    let options = new chromeDriver.Options();
    let relativePath = "./download";
    let absolutePath = path.resolve(relativePath);

    options.excludeSwitches("enable-logging");
    //options.addArguments("--headless");

    options.setUserPreferences(
      {
        "download.default_directory": absolutePath,
      },
      {
        "download.prompt.for.download": false,
      }
    );

    resolve(options);
  });
};
