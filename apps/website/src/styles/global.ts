import { defineGlobalFontface, defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  '*': {
    margin: '0',
    padding: '0',
    font: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
  },

  '*, *::before, *::after': {
    boxSizing: 'border-box',
    border: '0 solid {colors.gray.200}',
    outline: '0 solid {colors.gray.200}',
  },

  html: {
    fontFamily: 'ui',
    fontFeatureSettings: '"ss18" 1',
    textSizeAdjust: '100%',

    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',

    color: 'gray.950',
    backgroundColor: 'white',
    lineHeight: '1.4',
  },

  a: {
    textDecoration: 'inherit',
  },

  button: {
    cursor: 'pointer',
  },

  hr: {
    height: '0',
  },

  'img, video': {
    display: 'block',
    maxWidth: 'full',
    height: 'auto',
  },

  input: {
    _disabled: {
      opacity: '100',
    },
  },

  'ol, ul': {
    listStyle: 'none',
  },

  ':disabled': {
    cursor: 'default',
  },

  ':focus-visible': {
    outline: 'none',
  },

  '::placeholder': {
    color: 'gray.400',
  },

  '::-webkit-search-cancel-button': {
    WebkitAppearance: 'none',
  },

  '[hidden]': {
    display: 'none!',
  },

  '::-webkit-details-marker': {
    display: 'none',
  },
});

export const globalFontface = defineGlobalFontface({
  SUIT: {
    src: 'url("https://typie.net/fonts/SUIT-Variable.woff2") format("woff2-variations")',
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'swap',
  },

  IBMPlexSansKR: {
    src: 'url("https://typie.net/fonts/IBMPlexSansKR-Bold.woff2") format("woff2")',
    fontStyle: 'normal',
    fontWeight: '700',
    fontDisplay: 'swap',
  },

  LINESeedKR: [
    {
      src: 'url("https://typie.net/fonts/LINESeedKR-Regular.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '400',
      fontDisplay: 'swap',
    },
    {
      src: 'url("https://typie.net/fonts/LINESeedKR-Bold.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '700',
      fontDisplay: 'swap',
    },
  ],

  FiraCode: {
    src: 'url("https://typie.net/fonts/FiraCode-Variable.woff2") format("woff2-variations")',
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'swap',
  },

  KoPubWorldBatang: [
    {
      src: 'url("https://typie.net/fonts/KoPubWorldBatang-Medium.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '500',
      fontDisplay: 'block',
    },
    {
      src: 'url("https://typie.net/fonts/KoPubWorldBatang-Bold.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '700',
      fontDisplay: 'block',
    },
  ],

  KoPubWorldDotum: [
    {
      src: 'url("https://typie.net/fonts/KoPubWorldDotum-Medium.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '500',
      fontDisplay: 'block',
    },
    {
      src: 'url("https://typie.net/fonts/KoPubWorldDotum-Bold.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '700',
      fontDisplay: 'block',
    },
  ],

  NanumBarunGothic: [
    {
      src: 'url("https://typie.net/fonts/NanumBarunGothic-Regular.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '400',
      fontDisplay: 'block',
    },
    {
      src: 'url("https://typie.net/fonts/NanumBarunGothic-Bold.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '700',
      fontDisplay: 'block',
    },
  ],

  NanumMyeongjo: [
    {
      src: 'url("https://typie.net/fonts/NanumMyeongjo-Regular.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '400',
      fontDisplay: 'block',
    },
    {
      src: 'url("https://typie.net/fonts/NanumMyeongjo-Bold.woff2") format("woff2")',
      fontStyle: 'normal',
      fontWeight: '700',
      fontDisplay: 'block',
    },
  ],

  Pretendard: {
    src: `url("https://typie.net/fonts/Pretendard-Variable.woff2") format("woff2-variations")`,
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'block',
  },

  RIDIBatang: {
    src: 'url("https://typie.net/fonts/RIDIBatang-Regular.woff2") format("woff2")',
    fontStyle: 'normal',
    fontWeight: '400',
    fontDisplay: 'block',
  },
});

export const globalVars = {};
