import heroImg from '../assets/hero-desktop.jpg'
import traditional from '../assets/set-peacock.jpg'
import bridal from '../assets/set-polki-bridal.jpg'
import gemstone from '../assets/set-emerald-asym.jpg'
import temple from '../assets/set-ranihaar.jpg'
import statement from '../assets/set-emerald-ornate.jpg'
import bangles from '../assets/set-bangles-ruby.jpg'
import earrings from '../assets/set-jhumkas.jpg'
import showcaseBangles from '../assets/set-bangles-polki.jpg'
import showcasePolki from '../assets/set-polki-grandeur.jpg'
import storyHeritage from '../assets/set-guluband.jpg'
import videoBoutique from '../assets/video-project-4-portrait.mp4'
import videoCraft from '../assets/video-project-3-portrait.mp4'

export const WHATSAPP_NUMBER = '919983799000'

export const social = {
  instagram: 'https://www.instagram.com/newblhissariaofficial/',
  instagramHandle: '@newblhissariaofficial',
}

export const contact = {
  addressShort:
    'Main Market, Near Narang Hotel, Hanumangarh, Rajasthan 335512',

  address: {
    building: 'B L Hissaria Jewellers',
    street: 'Main Market',
    landmark: 'Near Narang Hotel',
    city: 'Hanumangarh',
    district: 'Hanumangarh',
    state: 'Rajasthan',
    pin: '335512',
  },

  phone: '+91 99837 99000',

  email: 'Newblhissaria@gmail.com',

  hours: [
    { day: 'Mon – Sat', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 6:00 PM' },
  ],

  mapEmbed:
    'https://maps.google.com/maps?q=B%20L%20Hissaria%20Jewellers%20Main%20Market%20Near%20Narang%20Hotel%20Hanumangarh%20Rajasthan%20335512&hl=en&z=16&output=embed',

  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=B%20L%20Hissaria%20Jewellers%20Main%20Market%20Near%20Narang%20Hotel%20Hanumangarh%20Rajasthan%20335512',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/#collections' },
  { label: 'About Us', href: '/#our-story' },
  { label: 'Custom Jewellery', href: '/#craftsmanship' },
  { label: 'Visit Store', href: '/#visit-store' },
  { label: 'Contact', href: '/contact' },
]

export const collections = [
  {
    name: 'Traditional',
    sub: 'Timeless heritage',
    img: traditional,
  },
  {
    name: 'Bridal',
    sub: 'For your big day',
    img: bridal,
  },
  {
    name: 'Temple Jewellery',
    sub: 'Divine elegance',
    img: temple,
  },
  {
    name: 'Gemstone',
    sub: 'Colours of royalty',
    img: gemstone,
  },
  {
    name: 'Statement Pieces',
    sub: 'Bold & beautiful',
    img: statement,
  },
  {
    name: 'Bangles',
    sub: 'Gold for every wrist',
    img: bangles,
  },
  {
    name: 'Earrings',
    sub: 'Everyday grandeur',
    img: earrings,
  },
]

export const showcasePieces = [
  {
    label: 'Polki edit',
    title: 'Light caught in heritage stone.',
    img: showcasePolki,
    alt: 'Polki necklace',
    span: 'md:col-span-7',
    aspect: 'aspect-[4/5] sm:aspect-[5/4]',
  },
  {
    label: 'Bangle edit',
    title: 'Craft you can feel.',
    img: showcaseBangles,
    alt: 'Gold polki bangles',
    span: 'md:col-span-5',
    aspect: 'aspect-[4/5]',
  },
]

export {
  heroImg,
  traditional,
  bridal,
  gemstone,
  temple,
  statement,
  bangles,
  earrings,
  showcaseBangles,
  showcasePolki,
  storyHeritage,
  videoBoutique,
  videoCraft,
}
