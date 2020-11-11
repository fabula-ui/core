import getComponentVars from '../../../methods/misc/getComponentVars';

const TagStyles = params => {
    const { framework } = params;
    const vars = getComponentVars('cardImage');
    const wrapper = framework === 'angular' ? '.fab-card-image' : '&';

    return `
        ${wrapper} .fab-tag {
            position: absolute;
            z-index: 1;
        }

        ${wrapper} .fab-tag[data-placement-x='center'] {
            left: 50%;
            transform: translate(-50%, 0);
        }

        ${wrapper} .fab-tag[data-placement-x='left'] {
            left: ${vars.paddingX};
        }

        ${wrapper} .fab-tag[data-placement-x='right'] {
            right: ${vars.paddingX};
        }

        ${wrapper} .fab-tag[data-placement-y='bottom'] {
            bottom: ${vars.paddingY};
        }

        ${wrapper} .fab-tag[data-placement-y='center'] {
            top: 50%;
            transform: translate(0, -50%);

            &[data-placement-x='center'] {
                transform: translate(-50%, -50%);
            }
        }

        ${wrapper} .fab-tag[data-placement-y='top'] {
            top: ${vars.paddingY};
        }
    `;

}

export default TagStyles;