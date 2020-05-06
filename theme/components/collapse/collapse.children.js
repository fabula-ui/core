import { elementColor } from '../../utils/color.utils';

export const children = theme => {
    const {
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop
    } = theme.components.collapse;

    return `
        .fab-collapse-content {
            border-top: solid 1px;
            padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
        }
    `;
};