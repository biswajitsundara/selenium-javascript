import { BaseClass } from "../base/BaseClass.js";
import { By } from "selenium-webdriver";

export class DownloadPage extends BaseClass {
  downloadFile = async () => {
    return new Promise(async (resolve, reject)=>{
      await this.driver.findElement(By.id("link-to-download")).click();
      await this.sleep(10);
      resolve(true);
    })
    
  };
}
