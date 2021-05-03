describe("Wikipedia",() => {
  beforeAll("Open browser",() =>{
		return browser.url("https:/google.com");
  })

	it("Get search box", () => {
		let input = $("input");
		input.setValue("wikipedia");
		browser.keys("\uE007");
		browser.pause(2000);
		let firstResult = $("#rso > div:nth-child(1) > div:nth-child(1) > div > div > div.yuRUbf > a > h3");
		firstResult.click();
		browser.pause(2000);
		expect(browser.getUrl()).toMatch("https://es.wikipedia.org/wiki/Wikipedia:Portada");
	})


})