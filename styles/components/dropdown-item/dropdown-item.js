const DropdownItemStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-dropdown-item' : '&';

    return `
        ${wrapper}.fab-list-item {
            padding-bottom: 0;
            padding-top: 0;
        }

        .fab-dropdown-item__button,
        .fab-dropdown-item__button > .fab-button-wrapper {
            width: 100%;
        }
    `;
}

export default DropdownItemStyles;