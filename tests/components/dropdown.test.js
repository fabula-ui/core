describe('Checkbox', () => {
    const port = process.env.PORT || '9009';

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('examples', async () => {
        page.setViewport({ width: 560, height: 300 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--examples`, { waitUntil: 'load', timeout: 10000 });

        const dropdowns = await page.$$('.fab-dropdown');

        for (let i = 0; i < dropdowns.length; i++) {
            const dropdown = dropdowns[i];
            const toggle = await dropdown.$('.fab-dropdown-toggle');
            let screenshot;

            await toggle.click();

            screenshot = await page.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });
});