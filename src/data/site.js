import necklace1 from '../assets/necklace1.webp'
import necklace2 from '../assets/necklace2.webp'
import necklace3 from '../assets/necklace3.webp'
import necklace4 from '../assets/necklace4.webp'
import necklace5 from '../assets/necklace5.webp'

export const WHATSAPP_NUMBER = '919983799000'

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
  { label: 'Collections', href: '/#collections' },
  { label: 'Our Story', href: '/#our-story' },
  { label: 'Craftsmanship', href: '/#craftsmanship' },
  { label: 'Contact Us', href: '/contact' },
]

export const collections = [
  {
    name: 'Traditional',
    sub: 'Timeless heritage',
    img: necklace1,
  },
  {
    name: 'Bridal',
    sub: 'For your big day',
    img: necklace2,
  },
  {
    name: 'Temple Jewellery',
    sub: 'Divine elegance',
    img: necklace4,
  },
  {
    name: 'Gemstone',
    sub: 'Colours of royalty',
    img: necklace3,
  },
  {
    name: 'Statement Pieces',
    sub: 'Bold & beautiful',
    img: necklace5,
  },
]

export {
  necklace1,
  necklace2,
  necklace3,
  necklace4,
  necklace5,
}