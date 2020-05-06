export const AvatarExternal = theme => {

    return `
        .fab-avatar-wrapper {
            .fab-badge {
                font-size: .5em;
                position: absolute;
                padding: .5em;
                top: auto;
                z-index: 1;
            }

            .fab-badge[data-placement-x='center'] {
                left: 50%;
                transform: translate(-50%, 0);

                &[data-placement-y='bottom'] {
                    transform: translate(-50%, 25%);
                }

                &[data-placement-y='center'] {
                    transform: translate(-50%, -50%);
                }

                &[data-placement-y='top'] {
                    transform: translate(-50%, -25%);
                }
            }

            .fab-badge[data-placement-x='left'] {
                left: 0;

                &[data-placement-y='bottom'] {
                    transform: translate(0, 25%);
                }

                &[data-placement-y='center'] {
                    transform: translate(-35%, -50%);
                }

                &[data-placement-y='top'] {
                    transform: translate(0, -25%);
                }
            }

            .fab-badge[data-placement-x='right'] {
                right: 0;

                &[data-placement-y='bottom'] {
                    transform: translate(25%, 0);
                }

                &[data-placement-y='center'] {
                    transform: translate(35%, -50%);
                }

                &[data-placement-y='top'] {
                    transform: translate(25%, 0);
                }
            }

            .fab-badge[data-placement-y='bottom'] {
                bottom: 0;
            }

            .fab-badge[data-placement-y='center'] {
                top: 50%;
            }

            .fab-badge[data-placement-y='top'] {
                top: 0;
            }
        }
    `;

}