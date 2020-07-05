const DropdownItemStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-dropdown-item.fab-list-item' : '&';

    return `
        ${wrapper} {
            
        }

        fab-button[data-dropdown-item],
        fab-button[data-dropdown-item] .fab-button-wrapper {
            width: 100%;
        }

        .fab-button-wrapper[data-dropdown-item],
        .fab-button[data-dropdown-item] {
            width: 100%;
        }

        // External
        fab-list-item {
            width: 100%;
        }
    `;
}

export default DropdownItemStyles;