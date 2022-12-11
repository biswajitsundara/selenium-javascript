import { DownloadPage } from "../pages/Download.js";

describe("Demo Automation Suite", () => {

  it("Download Demo Automation Test", async () => {

    const downloadPage = new DownloadPage();
    await downloadPage.launchApp();
    await downloadPage.downloadFile();
    await downloadPage.closeDriver();
  });

});
