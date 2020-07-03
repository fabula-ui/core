const DropdownItemStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-dropdown-item.fab-list-item' : '&';

    return `
        ${wrapper} {
            padding-bottom: 0;
            padding-top: 0;
        }

        .fab-button-wrapper[data-dropdown-item],
        .fab-button[data-dropdown-item] {
            width: 100%;
        }
    `;
}

export default DropdownItemStyles;