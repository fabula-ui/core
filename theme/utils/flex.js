const flexUtils = params => {
    const { framework, props } = params;
    const { flex } = props;
    const wrapper = framework === 'angular' ? '' : '&';

    if (flex) {
        return `
            ${wrapper} {
                display: flex;
                flex-direction: row;
            }
        `;
    } else {
        return '';
    }

}

export default flexUtils;