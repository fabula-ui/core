import getComponentVars from '../../../methods/misc/getComponentVars';

const TagStyles = () => {
    const vars = getComponentVars('cardImage');

    return `
        .fab-tag-wrapper {
            position: absolute;
            z-index: 1;
        }

        .fab-tag-wrapper[data-placement-x='center'] {
            left: 50%;
            transform: translate(-50%, 0);
        }

        .fab-tag-wrapper[data-placement-x='left'] {
            left: ${vars.padding};
        }

        .fab-tag-wrapper[data-placement-x='right'] {
            right: ${vars.padding};
        }

        .fab-tag-wrapper[data-placement-y='bottom'] {
            bottom: ${vars.padding};
        }

        .fab-tag-wrapper[data-placement-y='center'] {
            top: 50%;
            transform: translate(0, -50%);

            &[data-placement-x='center'] {
                transform: translate(-50%, -50%);
            }
        }

        .fab-tag-wrapper[data-placement-y='top'] {
            top: ${vars.padding};
        }
    `;

}

export default TagStyles;