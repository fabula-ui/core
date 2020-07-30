// Modifiers
import colorModifier from './modifiers/icon-color.modifier';
import sizeModifier from './modifiers/icon-size.modifier';

// Icons JSON
import IconsJSON from '../../../icons/fonts/icons.json';

// Fonts
const fonts = {
    eot: require('../../../icons/fonts/icons.eot?d26053aa23f5f9282390c829f9b34483?#iefix'),
    svg: require('../../../icons/fonts/icons.svg?d26053aa23f5f9282390c829f9b34483#icons'),
    ttf: require('../../../icons/fonts/icons.ttf?d26053aa23f5f9282390c829f9b34483'),
    woff: require('../../../icons/fonts/icons.woff?d26053aa23f5f9282390c829f9b34483'),
    woff2: require('../../../icons/fonts/icons.woff2?d26053aa23f5f9282390c829f9b34483')
}

const fontFace = `
@font-face {
	font-family: 'icons';
	src: url('${fonts.eot}') format('embedded-opentype'),
		url('${fonts.woff2}') format('woff2'),
		url('${fonts.woff2}') format('woff'),
		url('${fonts.ttf}') format('truetype'),
		url('${fonts.svg}') format('svg');
}
`;

const IconStyles = (params) => {
	const { framework, props } = params;
    const { color, name, size } = props;
	const wrapper = framework === 'angular' ? '.fab-icon' : '&';

    if (!IconsJSON[name]) {return ''; }

    return `
        ${fontFace}
        
        ${framework === 'angular' ? '& { display: inline-flex; }' : ''}

        ${wrapper} {
            font-family: icons!important;
            font-size: 1em;
            font-style: normal;
            font-weight: normal!important;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            &:before {
                content: '${IconsJSON[name]}'
            }
        }

        // Modifiers
        ${color ? colorModifier(params) : ''}
        ${size ? sizeModifier(params) : ''}
    `;
};

export default IconStyles;
