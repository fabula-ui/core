// Modifiers
import colorModifier from './modifiers/color.modifier';
import UtilsStyles from '../../utils';
import sizeModifier from './modifiers/size.modifier';

const fontFace = `
@font-face {
	font-family: 'icons';
	src: url('./icons.eot?d26053aa23f5f9282390c829f9b34483?#iefix') format('embedded-opentype'),
		url('./icons.woff2?d26053aa23f5f9282390c829f9b34483') format('woff2'),
		url('./icons.woff?d26053aa23f5f9282390c829f9b34483') format('woff'),
		url('./icons.ttf?d26053aa23f5f9282390c829f9b34483') format('truetype'),
		url('./icons.svg?d26053aa23f5f9282390c829f9b34483#icons') format('svg');
}
`;

const IconStyles = (params) => {
	const { framework, props } = params;
	const { color, size, utils } = props;
	const element = framework === 'angular' ? '.fab-icon' : '&';

    return `
        ${fontFace}

        & {
            align-items: center;
            display: inline-flex;
            height: 1.1em;
            justify-content: center;
            width: 1.1em;
        }

        ${element} {
            color: inherit;
            display: inline-flex;
            position: relative;
        }

        ${color ? colorModifier(params) : ''}
        ${size ? sizeModifier(params) : ''}
        ${utils ? UtilsStyles(params) : ''}
    `;
};

export default IconStyles;
