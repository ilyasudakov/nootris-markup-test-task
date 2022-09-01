const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '525px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1280px',
  desktop: '1440px',
} as const;
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
} as const;

export default device;
