import { element } from '../../common/elements';
import {
    dividerColor
} from '../../utils/color.utils';

export const color = (theme, colorName) => {
    const props = theme.components.card;
    const backgroundColor = theme.colors[colorName];

    return `
        .fab-card[data-color='${colorName}'] {
            background-color: ${backgroundColor};

            .fab-card__body,
            .fab-card__footer,
            .fab-card__header {
                &:not(:first-child) {
                    border-top: solid 1px ${dividerColor(backgroundColor)};
                }
            }

            .fab-card__image + .fab-card__body,
            .fab-card__image + .fab-card__footer,
            .fab-card__image + .fab-card__header {
                border-top: none;
            }

            .fab-card__subtitle {
                ${element(theme, backgroundColor, 'card', 'subtitle')}
            }

            .fab-card__text {
                ${element(theme, backgroundColor, 'card', 'text')}
            }

            .fab-card__title {
                ${element(theme, backgroundColor, 'card', 'title')}
            }
        }
    `;
};

export const cornerStyle = (theme, cornerStyle) => {
    const radius = theme.globals.cornerStyles[cornerStyle];

    return `
    .fab-card[data-corner-style='${cornerStyle}'] {
        border-radius: ${radius};

        &[data-flow='horizontal'] {
            .fab-card__body:first-child,
            .fab-card__footer:first-child,
            .fab-card__header:first-child,
            .fab-card__image:first-child {
                border-radius: ${radius} 0 0 ${radius};
            }
    
            .fab-card__body:last-child,
            .fab-card__footer:last-child,
            .fab-card__header:last-child,
            .fab-card__image:last-child {
                border-radius: 0 0 ${radius} ${radius};
            }    
        }

        .fab-card__body:first-child,
        .fab-card__footer:first-child,
        .fab-card__header:first-child,
        .fab-card__image:first-child:not([data-float]) {
            border-radius: ${radius} ${radius} 0 0;
        }

        .fab-card__body:last-child,
        .fab-card__footer:last-child,
        .fab-card__header:last-child,
        .fab-card__image:last-child:not([data-float]) {
            border-radius: 0 0 ${radius} ${radius};
        }

        .fab-card__image[data-float='left'] {
            border-radius: ${radius} 0 0 ${radius};
        }

        .fab-card__image[data-float='right'] {
            border-radius: 0 ${radius} ${radius} 0;
        }
    }
    `;
};

export const flow = (theme, colorName) => {
    return `
    .fab-card,
    .fab-card[data-flow='vertical'] {
        
    }
    `;
}
