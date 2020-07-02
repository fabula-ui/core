describe('Card Image', () => {
    const port = process.env.PORT || '9009';

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('adapt color', async () => {
        page.setViewport({ width: 1240, height: 700 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--adapt-color`, { waitUntil: 'load', timeout: 10000 });
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color', async () => {
        page.setViewport({ width: 1240, height: 700 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--color`, { waitUntil: 'load', timeout: 10000 });
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('custom icon', async () => {
        page.setViewport({ width: 920, height: 260 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--custom-icon`, { waitUntil: 'load', timeout: 10000 });
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('height', async () => {
        page.setViewport({ width: 1240, height: 360 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--height`, { waitUntil: 'load', timeout: 10000 });
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('external tag', async () => {
        page.setViewport({ width: 1240, height: 800 });

        await page.goto(`http://localhost:${port}/iframe.html?id=card-image--external-tag`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(1000);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

});