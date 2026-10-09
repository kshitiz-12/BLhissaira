import heroImg from '../assets/hero-desktop.jpg'
import traditional from '../assets/gen-traditional.jpg'
import bridal from '../assets/gen-bridal.jpg'
import gemstone from '../assets/gen-gemstone.jpg'
import temple from '../assets/gen-temple.jpg'
import statement from '../assets/gen-statement.jpg'
import showcaseBridal from '../assets/showcase-bridal.jpg'

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
]

export {
  heroImg,
  traditional,
  bridal,
  gemstone,
  temple,
  statement,
  showcaseBridal,
}
