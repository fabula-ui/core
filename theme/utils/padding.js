const paddingUtils = props => {
    const { p, pb, pl, pr, pt, px, py } = props;

    return `
        & {
            ${p ? `padding: calc(1rem * ${p});` : ''}
            ${pb ? `padding-bottom: calc(1rem * ${pb});` : ''}
            ${pl ? `padding-left: calc(1rem * ${pl});` : ''}
            ${pr ? `padding-right: calc(1rem * ${pr});` : ''}
            ${pt ? `padding-top: calc(1rem * ${pt});` : ''}
            ${px ? `padding-left: calc(1rem * ${px}); padding-right: calc(1rem * ${px});` : ''}
            ${py ? `padding-bottom: calc(1rem * ${py}); padding-top: calc(1rem * ${py});` : ''}
        }
    `
}

export default paddingUtils;