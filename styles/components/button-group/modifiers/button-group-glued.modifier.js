const gluedModifier = params => {
    const { framework, props } = params;
    const buttonWrapper = framework === 'angular' ? 'fab-button' : '.fab-button';
    const dropdownWrapper = framework === 'angular' ? 'fab-dropdown' : '.fab-dropdown';
    const layout = (props.layout === 'h' || props.layout === 'horizontal') ? 'h' : 'v';
    const wrapper = framework === 'angular' ? '.fab-button-group' : '';

    return `
       ${wrapper} {
            margin: 0;

            .fab-button:focus {
                z-index: 1;
            }

            // Angular
            fab-button:not(:first-child) .fab-button[data-border='true'],
            fab-button:not(:first-child) .fab-button[data-outline='true'],
            fab-dropdown:not(:first-child) .fab-button[data-border='true'],
            fab-dropdown:not(:first-child) .fab-button[data-outline='true'] {
                margin-${layout === 'h' ? 'left' : 'top'}: -1px;
            }

            // Others
            .fab-button[data-border='true']:not(:first-child),
            .fab-button[data-outline='true']:not(:first-child),
            .fab-dropdown:not(:first-child) .fab-button[data-border='true'],
            .fab-dropdown:not(:first-child) .fab-button[data-outline='true'] {
                margin-${layout === 'h' ? 'left' : 'top'}: -1px;
            }

            ${buttonWrapper}:first-child:not(:only-child) ${framework === 'angular' ? '.fab-button' : ''},
            ${dropdownWrapper}:first-child:not(:only-child) .fab-button {
                ${layout === 'v' ? `border-bottom-left-radius: 0;` : ''}
                border-bottom-right-radius: 0;
                ${layout === 'h' ? `border-top-right-radius: 0;` : ''}
                
                &:before {
                    ${layout === 'v' ? `border-bottom-left-radius: 0;` : ''}
                    border-bottom-right-radius: 0;
                    ${layout === 'h' ? `border-top-right-radius: 0;` : ''}
                }
            }

            ${buttonWrapper}:not(:first-child):not(:last-child) ${framework === 'angular' ? '.fab-button' : ''},
            ${dropdownWrapper}:not(:first-child):not(:last-child) .fab-button {
                border-radius: 0;

                &:before {
                    border-radius: 0;
                }
            }

            ${buttonWrapper}:last-child:not(:only-child) ${framework === 'angular' ? '.fab-button' : ''},
            ${dropdownWrapper}:last-child:not(:only-child) .fab-button {
                ${layout === 'h' ? `border-bottom-left-radius: 0;` : ''}
                border-top-left-radius: 0;
                ${layout === 'v' ? `border-top-right-radius: 0;` : ''}
                
                &:before {
                    border-bottom-left-radius: 0;
                    border-top-left-radius: 0;
                }
            }

            .fab-dropdown {
                // position: static;
            }
        }
    `
}

export default gluedModifier;