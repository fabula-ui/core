const DropdownItemStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-dropdown-item.fab-list-item' : '&';

    return `
        ${wrapper} {
            width: 100%;
        }

        // External
        .fab-button-wrapper[data-expand='true'] .fab-button {
            border-radius: 0;
            justify-content: flex-start;
            text-align: left;

            &:focus {
                box-shadow: none;
            }
        }

        fab-list-item {
            width: 100%;
        }
    `;
}

export default DropdownItemStyles;