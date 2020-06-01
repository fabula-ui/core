const gluedModifier = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';
    const buttonWrapper = framework === 'angular' ? 'fab-button' : '.fab-button-wrapper';

    return `
       ${wrapper} {
            margin: 0;
    
            .fab-button-wrapper {
                padding: 0;
            }

            .fab-button-wrapper[data-border='true']:not(:first-child),
            .fab-button-wrapper[data-outline='true']:not(:first-child) {
                margin-left: -1px;
            }

            ${buttonWrapper}:first-child:not(:only-child) .fab-button {
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;

                &:before {
                    border-bottom-right-radius: 0;
                    border-right: none;
                    border-top-right-radius: 0;
                }
            }

            ${buttonWrapper}:not(:first-child):not(:last-child) .fab-button {
                border-radius: 0;

                &:before {
                    border-left: none;
                    border-radius: 0;
                    border-right: none;
                }
            }

            ${buttonWrapper}:last-child:not(:only-child) .fab-button {
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
                
                &:before {
                    border-bottom-left-radius: 0;
                    border-left: none;
                    border-top-left-radius: 0;
                }
            }
        }
    `
}

export default gluedModifier;