const gluedModifier = props => {
    const { framework } = props;
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';
    const buttonWrapper = framework === 'angular' ? 'fab-button' : '.fab-button-wrapper';

    return `
       ${wrapper}[data-glued='true'] {
            margin: 0;
    
            .fab-button-wrapper {
                padding: 0;
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