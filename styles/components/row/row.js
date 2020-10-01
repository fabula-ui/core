const RowStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-row' : '&';

    return `
        ${wrapper} {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-left: -15px;
            margin-right: -15px;
        }
    `
}

export default RowStyles