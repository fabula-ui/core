const RowStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-column' : '&';

    return `
        ${wrapper} {
            display: flex;
            flex-direction: row;
            margin-left: -15px;
            margin-right: -15px;
        }
    `
}

export default RowStyles