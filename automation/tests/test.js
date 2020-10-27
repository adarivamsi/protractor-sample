const { browser } = require("protractor");

describe("Check the Base Url if it is redirected", function () {
  it("Check the Base Url if it is redirected", function () {
    browser.get("http://localhost:4200/");
    expect(browser.getCurrentUrl()).toBe("http://localhost:4200/home");
  });
});

describe("Check the Title of HomePage", function () {
  it("Check the Title of HomePage", function () {
    browser.get("http://localhost:4200/");
    expect(browser.getTitle()).toBe("Protractor Sample");
  });
});

describe("Check the image in the page", function () {
  it("Check the image in the page", function () {
    browser.get("http://localhost:4200/");
    var image = element(by.css(".vamsi_image")).getWebElement();
    expect(image.getId()).not.toBe(undefined);
    var imageLink = element(
      by.css(
        "img[src*='https://images.youracclaim.com/images/50fcb931-4038-46c9-ba00-de94cd429c40/blob.png']"
      )
    );
    expect(imageLink.isPresent()).toBe(true);
  });
});

describe("Check the Text under Image", function () {
  it("Check the Text under Image", function () {
    browser.get("http://localhost:4200/");
    var text = element.all(by.css(".name"));
    expect(text.getText()).toBe["Vamsi Charan Adari"];
  });
});

describe("Check the Links under Image", function () {
  it("Check the Links under Image", function () {
    browser.get("http://localhost:4200/");
    var link1 = element(by.id("github_link"));
    var link2 = element(by.id("linkedin_link"));
    var link3 = element(by.id("website_link"));
    expect(link1.getAttribute("href")).toEqual("https://github.com/adarivamsi");
    expect(link2.getAttribute("href")).toEqual(
      "https://www.linkedin.com/in/adarivamsi/"
    );
    expect(link3.getAttribute("href")).toEqual(
      "https://sites.google.com/view/adarivamsi"
    );
  });
});

describe("Check the values are empty in Calculator initially", function () {
  it("Check the values are empty in Calculator initially", function () {
    browser.get("http://localhost:4200/");
    let input1 = element(by.css(".container")).$(".one");
    expect(input1.getText()).toBe("");
    let input2 = element(by.css(".container")).$(".two");
    expect(input2.getText()).toBe("");
  });
});

describe("Check the addition functionality for first input value in Calculator", function () {
  it("Check the addition functionality for first input value in Calculator", function () {
    browser.get("http://localhost:4200/");
    var one = element(by.id("one"));
    one.clear();
    one.sendKeys("100");
    var result = element(by.id("result"));
    expect(result.getText()).toBe("100");
  });
});

describe("Check the addition functionality for second input value in Calculator", function () {
  it("Check the addition functionality for second input value in Calculator", function () {
    browser.get("http://localhost:4200/");
    var two = element(by.id("two"));
    two.clear();
    two.sendKeys("58");
    var result = element(by.id("result"));
    expect(result.getText()).toBe("58");
  });
});

describe("Check the addition functionality for second input value in Calculator", function () {
  it("Check the addition functionality for second input value in Calculator", function () {
    browser.get("http://localhost:4200/");
    var one = element(by.id("one"));
    one.clear();
    one.sendKeys("64");
    var two = element(by.id("two"));
    two.clear();
    two.sendKeys("97");
    var result = element(by.id("result"));
    expect(result.getText()).toBe("161");
  });
});

describe("Check the addition functionality and clear functionality in Calculator", function () {
  it("Check the addition functionality and clear functionality in Calculator", function () {
    browser.get("http://localhost:4200/");
    var one = element(by.id("one"));
    one.clear();
    one.sendKeys("55");
    var two = element(by.id("two"));
    two.clear();
    two.sendKeys("1965");
    var result = element(by.id("result"));
    expect(result.getText()).toBe("2020");
    var clear = element(by.id("clear"));
    clear.click();
    expect(one.getText()).toBe("");
    expect(two.getText()).toBe("");
  });
});
