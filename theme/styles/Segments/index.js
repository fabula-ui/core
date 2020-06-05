// Commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const SegmentsStyles = params => {
    const { framework, props } = params;
    const { rounded } = props;
    const wrapper = framework === 'angular' ? '.fab-segments-wrapper' : '&';
    
    return `
        ${wrapper} { ${componentCommons }}
        ${wrapper} {
            display: inline-flex;
        }

        .fab-segments {
            border-radius: .5rem;
            ${rounded ? `border-radius: 5rem;` : ''}
            display: flex;
            overflow: hidden;
            ${rounded ? `padding: 1px;` : ''}
        }

        ${colorModifier(props)}
    `;
}

export default SegmentsStyles;