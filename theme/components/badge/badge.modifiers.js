import { textColor } from '../../utils/color.utils';

export const BadgeColor = theme => {
    const colors = () => {
        let css = '';

        Object.entries(theme.colors).map(color => {
            css +=
                `
                .fab-badge[data-color='${color[0]}']:not([data-invert-color='true']) {
                    background-color: ${color[1]};
                    border-color: ${color[1]};
                    color: ${textColor(color[1])};
                }

                .fab-badge[data-color='${color[0]}'][data-invert-color='true'] {
                    background-color: ${textColor(color[1])};
                    border-color: ${textColor(color[1])};
                    color: ${color[1]};
                }
                `
        });
        
        return css;
    };

    return `
        ${colors()}
    `;
};

export const BadgeCornerStyle = theme => {
    const colors = () => {
        let css = '';

        Object.entries(theme.globals.cornerStyles).map(cornerStyle => {
            css +=
                `
                .fab-badge[data-corner-style='${cornerStyle[0]}'] {
                    border-radius: ${cornerStyle[1]};
                }
                `
        });
        
        return css;
    };

    return `
        ${colors()}
    `;
};

export const BadgeSize = theme => {
    const props = theme.components.badge;

    const sizes = () => {
        let css = '';

        Object.entries(props.sizes).map(size => {
            css +=
                `
                // .fab-badge[data-size='${size[0]}'] {
                //     font-size: ${size[1].fontSize};
                //     padding: ${size[1].padding};
                // }
                `
        });
        
        return css;
    };

    return `
        ${sizes()}
    `;
};