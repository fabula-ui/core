import { elementColor } from '../../utils/color.utils';
import { elementFontSize } from '../../utils/props.utils';

export const children = theme => {    
    return `
    .fab-collapse-toggle {
        [data-fab-element='subtitle'] {
            // color: element-color($color, $element);
            display: flex;
            font-size: ${theme.elements.subtitle.fontSize.md};
            // line-height: map-get($props, line-height);
            margin: 0;
        }

        [data-fab-element='title'] {
            // color: element-color($color, $element);
            // display: flex;
            font-size: ${theme.elements.title.fontSize.md};
            // line-height: map-get($props, line-height);
            margin: 0;
        }
    
        ${elementFontSize(theme, 'title')}
    }`
};