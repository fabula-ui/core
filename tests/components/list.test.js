describe('List', () => {
    const port = process.env.PORT || '9009';

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('examples', async () => {
        page.setViewport({ width: 1130, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=list--examples`, { waitUntil: 'load', timeout: 10000 });

        await page.waitFor(500);

        screenshot = await page.screenshot();

        expect(screenshot).toMatchImageSnapshot();
    });

    it('color', async () => {
        page.setViewport({ width: 1240, height: 750 });

        await page.goto(`http://localhost:${port}/iframe.html?id=list--color`, { waitUntil: 'load', timeout: 10000 });

        await page.waitFor(500);

        screenshot = await page.screenshot();

        expect(screenshot).toMatchImageSnapshot();
    });

    it('padding', async () => {
        page.setViewport({ width: 1240, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=list--padding`, { waitUntil: 'load', timeout: 10000 });

        await page.waitFor(500);

        screenshot = await page.screenshot();

        expect(screenshot).toMatchImageSnapshot();
    });

    it('striped', async () => {
        page.setViewport({ width: 1240, height: 750 });

        await page.goto(`http://localhost:${port}/iframe.html?id=list--striped`, { waitUntil: 'load', timeout: 10000 });

        await page.waitFor(500);

        screenshot = await page.screenshot();

        expect(screenshot).toMatchImageSnapshot();
    });

});