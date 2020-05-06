import { textColor } from '../../utils/color.utils';

export const BadgeBaseStyles = theme => {
    const props = theme.components.badge;

    return `
        .fab-badge {
            align-items: center;
            background-color: ${props.backgroundColor};
            border-radius: .3rem;
            box-sizing: border-box;
            color: ${textColor(props.backgroundColor)};
            display: inline-flex;
            font-family: ${theme.globals.fontFamily};
            font-size: .6em;
            font-weight: 700;
            justify-content: center;
            line-height: 1;
            margin: 0;
            padding: .3em .4em;
            position: relative;
            top: -1px;
            vertical-align: middle;
        }
    `;
}
