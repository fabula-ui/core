// Commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const SegmentsStyles = params => {
    const { framework, props } = params;
    const { expand, rounded } = props;
    const wrapper = framework === 'angular' ? '.fab-segments-wrapper' : '&';
    
    return `
        ${wrapper} { ${componentCommons }}
        ${wrapper} {
            display: flex;
        }

        .fab-segments {
            border-radius: .5rem;
            ${rounded ? `border-radius: 5rem;` : ''}
            display: flex;
            overflow: hidden;
            ${rounded ? `padding: 1px;` : ''}
            text-align: center;
            width: 100%;
        }

        .fab-segments .fab-segment {
            flex-grow: 1;
            flex-shrink: 0;
        }

        ${colorModifier(props)}
    `;
}

export default SegmentsStyles;