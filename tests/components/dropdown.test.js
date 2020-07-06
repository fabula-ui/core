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

    it('color', async () => {
        page.setViewport({ width: 1240, height: 340 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--color`, { waitUntil: 'load', timeout: 10000 });

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

    it('custom content', async () => {
        page.setViewport({ width: 820, height: 310 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--custom-content`, { waitUntil: 'load', timeout: 10000 });

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

    it('direction', async () => {
        page.setViewport({ width: 340, height: 340 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--direction`, { waitUntil: 'load', timeout: 10000 });

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

    it('expand', async () => {
        page.setViewport({ width: 1240, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--expand`, { waitUntil: 'load', timeout: 10000 });

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

    it('glow', async () => {
        page.setViewport({ width: 400, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--glow`, { waitUntil: 'load', timeout: 10000 });

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

    it('size', async () => {
        page.setViewport({ width: 740, height: 260 });

        await page.goto(`http://localhost:${port}/iframe.html?id=dropdown--size`, { waitUntil: 'load', timeout: 10000 });

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