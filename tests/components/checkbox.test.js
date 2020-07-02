describe('Checkbox', () => {
    const port = process.env.PORT || '9009';

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('active color', async () => {
        page.setViewport({ width: 900, height: 80 });
        
        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--active-color`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
    
    it('color', async () => {
        page.setViewport({ width: 900, height: 115 });

        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--color`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('disabled', async () => {
        page.setViewport({ width: 900, height: 115 });

        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--disabled`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('inactive color', async () => {
        page.setViewport({ width: 900, height: 80 });

        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--inactive-color`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('rounded', async () => {
        page.setViewport({ width: 900, height: 115 });

        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--rounded`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('size', async () => {
        page.setViewport({ width: 900, height: 50 });

        await page.goto(`http://localhost:${port}/iframe.html?id=checkbox--size`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
});