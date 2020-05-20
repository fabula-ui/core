const IconStyles = params => {
    const { props } = params;
    const { name } = props;
    const svg = require(`../../../icons/${name}.svg`);

    return `
        .fab-icon {
            background-color: blue;
            display: inline-flex;
            height: 1em;
            mask-image: url('${svg}');
            mask-repeat: no-repeat;
            mask-position: center center;
            mask-size: cover;
            width: 1em;

            &:before {
                background: 
                content: '';
                display: block;
            }
        }
    `;
}

export default IconStyles;