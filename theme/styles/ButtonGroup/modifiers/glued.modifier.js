const gluedModifier = () => {
    return `
        .fab-button-group[data-glued='true'] {
            margin: 0;
    
            .fab-button-wrapper {
                padding: 0;
            }

            // Angular related
            fab-button:first-child:not(:only-child) {
                .fab-button,
                .fab-button:before {
                    border-bottom-right-radius: 0;
                    border-top-right-radius: 0;
                }

                .fab-button:before {
                    border-right: none;
                }
            }

            fab-button:not(:first-child):not(:last-child) {
                .fab-button,
                .fab-button:before {
                    border-radius: 0;
                }

                .fab-button:before {
                    border-left: none;
                    border-right: none;
                }
            }

            fab-button:last-child:not(:only-child) {
                .fab-button,
                .fab-button:before {
                    border-bottom-left-radius: 0;
                    border-top-left-radius: 0;
                }

                .fab-button:before {
                    border-left: none;
                }
            }
        }
    `
}

export default gluedModifier;