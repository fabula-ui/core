import {
    elements
} from  '../../common/elements';

export const childrenStyles  = (theme) => {
    const props = theme.components.card;
    
    return `
    .fab-card__body,
    .fab-card__footer,
    .fab-card__header {
        display: flex;
        flex-direction: column;
    }

    .fab-card__body {
        padding: ${props.bodyPaddingTop} ${props.bodyPaddingRight} ${props.bodyPaddingBottom} ${props.bodyPaddingLeft};
    }

    .fab-card__body__content {
        flex-grow: 1;
    }

    .fab-card__body__content:not(:first-child) {
        margin-left: 1rem;
    }

    .fab-card__body__content:not(:last-child) {
        margin-right: 1rem;
    }

    .fab-card__footer {
        padding: ${props.footerPaddingTop} ${props.footerPaddingRight} ${props.footerPaddingBottom} ${props.footerPaddingLeft};
    }

    .fab-card__header {
        padding: ${props.headerPaddingTop} ${props.headerPaddingRight} ${props.headerPaddingBottom} ${props.headerPaddingLeft};
    }

    .fab-card__image {
        background-position: center center;
        background-size: cover;
        height: auto;
        width: 100%;
    }

    .fab-card__image[data-float] {
        bottom: 0;
        position: absolute;
        top: 0;
        width: 33%;
    }

    .fab-card__image[data-float='left'] {
        left: 0;

        ~ .fab-card__body {
            padding-left: calc(33% + ${props.bodyPaddingLeft});
        }

        ~ .fab-card__footer {
            padding-left: calc(33% + ${props.footerPaddingLeft});
        }

        ~ .fab-card__header {
            padding-left: calc(33% + ${props.headerPaddingLeft});
        }
    }

    .fab-card__image[data-float='right'] {
        right: 0;

        ~ .fab-card__body {
            padding-right: calc(33% + ${props.bodyPaddingRight});
        }

        ~ .fab-card__footer {
            padding-right: calc(33% + ${props.footerPaddingRight});
        }

        ~ .fab-card__header {
            padding-right: calc(33% + ${props.headerPaddingRight});
        }
    }

    ${elements}
    `
};