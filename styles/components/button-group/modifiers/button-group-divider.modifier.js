// Methods
import { getComponentColors } from '../../../methods/misc/getComponentColors';
import { getDirection } from '../../../methods/misc/getDirection';

export const dividerModifier = params => {
    const { framework, props } = params;
    const { borderColor } = getComponentColors('buttonGroup', props);
    const direction = getDirection(props.layout);
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';
    const buttonWrapper = framework === 'angular' ? 'fab-button' : '.fab-button';

    return `
        ${wrapper} {
            ${buttonWrapper}:not(:last-child) .fab-button {
                ${props.outline ? `border-right: none;` : ''}
            }

            ${buttonWrapper}:not(:last-child) ${framework === 'angular' ? '.fab-button' : ''} {
                ${direction === 'row' ? `border-right: solid 1px;` : 'border-bottom: solid 1px;'}
                ${direction === 'row' ? `border-right-color: ${borderColor};` : ''}
                ${direction === 'column' ? `border-bottom-color: ${borderColor};` : ''}
            }
        }
    `
}