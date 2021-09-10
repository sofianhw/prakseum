export const SITE_URL = 'https://prakseum.com';
export const SITE_ORIGIN = process.env.SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'sofianhw';
export const BRAND_NAME = 'Prakseum';
export const SITE_NAME_MULTILINE = ['Prakseum', 'Leadership Acceleration'];
export const SITE_NAME = 'Prakseum Leadership Acceleration';
export const META_DESCRIPTION =
  'Help People to be better Leaders.';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'Coming Soon!';
export const SHORT_DATE = 'Coming Soon!';
export const FULL_DATE = 'Coming Soon!';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/sofianhw/prakseum';
export const SAMPLE_TICKET_NUMBER = 666;
// export const NAVIGATION = [
//   {
//     name: 'Stage A',
//     route: '/stage/a'
//   },
//   {
//     name: 'Stage C',
//     route: '/stage/c'
//   },
//   {
//     name: 'Stage M',
//     route: '/stage/m'
//   },
//   {
//     name: 'Stage E',
//     route: '/stage/e'
//   },
//   {
//     name: 'Schedule',
//     route: '/schedule'
//   },
//   {
//     name: 'Speakers',
//     route: '/speakers'
//   },
//   {
//     name: 'Expo',
//     route: '/expo'
//   },
//   {
//     name: 'Jobs',
//     route: '/jobs'
//   }
// ];
export const NAVIGATION = [
  {
    name: 'Blog',
    route: '/blog'
  },
  {
    name: 'Events',
    route: '/events'
  },
  {
    name: 'Mentors',
    route: '/mentors'
  }
];

export type TicketGenerationState = 'default' | 'loading';
