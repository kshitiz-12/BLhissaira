import necklace1 from '../assets/necklace1.webp'
import necklace2 from '../assets/necklace2.webp'
import necklace3 from '../assets/necklace3.webp'
import necklace4 from '../assets/necklace4.webp'
import necklace5 from '../assets/necklace5.webp'

export const WHATSAPP_NUMBER = '919XXXXXXXXX' // Replace with your WhatsApp number

export const contact = {
  addressShort: 'Thana Road, Hanumangarh, Rajasthan 335512',
  address: {
    building: '1, Near B L Hissaria Jewellers',
    street: 'Thana Road',
    landmark: 'Hind Variety Store',
    city: 'Hanumangarh',
    district: 'Hanumangarh',
    state: 'Rajasthan',
    pin: '335512',
  },
  phone: '+91 XXXXX XXXXX',
  email: 'info@hissariajewellers.com',
  hours: [
    { day: 'Mon – Sat', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 6:00 PM' },
  ],
  mapEmbed:
    'https://maps.google.com/maps?q=Hind+Variety+Store+Thana+Road+Hanumangarh+Rajasthan+335512&hl=en&z=16&output=embed',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Hind+Variety+Store+Thana+Road+Hanumangarh+Rajasthan+335512',
}

export const nav = [
  { label: 'Collections', href: '/#collections' },
  { label: 'Our Story', href: '/#our-story' },
  { label: 'Craftsmanship', href: '/#craftsmanship' },
  { label: 'Contact Us', href: '/contact' },
]

export const collections = [
  { name: 'Traditional', sub: 'Timeless heritage', img: necklace1 },
  { name: 'Bridal', sub: 'For your big day', img: necklace2 },
  { name: 'Temple Jewellery', sub: 'Divine elegance', img: necklace4 },
  { name: 'Gemstone', sub: 'Colours of royalty', img: necklace3 },
  { name: 'Statement Pieces', sub: 'Bold & beautiful', img: necklace5 },
]

export { necklace1, necklace2, necklace3, necklace4, necklace5 }
