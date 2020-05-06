import {
    placeholderColor
} from '../../utils/color.utils';

const AvatarModifiers = theme => {
    let cssModifiers = '';

    Object.entries(theme.colors).map(color => {
        cssModifiers +=
            `
            .fab-avatar[data-color='${color[0]}'] {
                background-color: ${color[1]};

                .fab-avatar__icon {
                    color: ${placeholderColor(color[1])}
                }
            }
            `
    });

    Object.entries(theme.globals.cornerStyles).map(cornerStyle => {
        cssModifiers +=
            `
            .fab-avatar[data-corner-style='${cornerStyle[0]}'] {
                border-radius: ${cornerStyle[1]};
            }
            `
    });

    return cssModifiers;
}

export const color = theme => {
    const backgroundColor = () => {
        let css = '';

        Object.entries(theme.colors).map(color => {
            css +=
                `
                .fab-avatar[data-color='${color[0]}'] {
                    background-color: ${color[1]};

                    .fab-avatar__icon {
                        color: ${placeholderColor(color[1])}
                    }
                }
                `
        });

        return css;
    }
    return `
        ${backgroundColor()}
    `
};

export const cornerStyle = theme => {
    const all = () => {
        let css = '';

        Object.entries(theme.globals.cornerStyles).map(cornerStyle => {
            css +=
                `
                .fab-avatar[data-corner-style='${cornerStyle[0]}'] {
                    border-radius: ${cornerStyle[1]};
                }
                `
        });

        return css;
    };

    return `
        ${all()}
    `
};

export const size = theme => {
    const props = theme.components.avatar;

    const allSizes = () => {
        let css = '';

        Object.entries(props.sizes).map(size => {
            css +=
                `
                .fab-avatar[data-size='${size[0]}'] {
                    height: ${size[1].height};
                    width: ${size[1].width};

                    .fab-avatar__icon {
                        font-size: calc(${size[1].height} / 2.25);
                    }
                }
                `
        });

        return css;
    }
    return `
        ${allSizes()}
    `
};

export default AvatarModifiers;