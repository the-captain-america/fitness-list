import { css } from 'styled-components';

const sizes = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 768px)',
  md: '(min-width: 1024px)',
  lg: '(min-width: 1280px)',
  xl: '(min-width: 1281px)',
  tablet: '(max-width: 992px)',
  mobile: '(max-width: 576px)',
};

const media = {
  xs: (...args) =>
    css`
      @media ${sizes.xs} {
        ${css(...args)}
      }
    `,
  sm: (...args) =>
    css`
      @media ${sizes.sm} {
        ${css(...args)}
      }
    `,
  md: (...args) =>
    css`
      @media ${sizes.md} {
        ${css(...args)}
      }
    `,
  lg: (...args) =>
    css`
      @media ${sizes.lg} {
        ${css(...args)}
      }
    `,
  xl: (...args) =>
    css`
      @media ${sizes.xl} {
        ${css(...args)}
      }
    `,
  tablet: (...args) => css`
    @media ${sizes.tablet} {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media ${sizes.mobile} {
      ${css(...args)}
    }
  `,
};

export { media };
