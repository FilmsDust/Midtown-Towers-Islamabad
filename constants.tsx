
import { ApartmentType, Amenity, LocationDetail } from './types';

export const APARTMENT_TYPES: ApartmentType[] = [
  {
    id: 'type-a',
    name: 'Type A Residency',
    size: '915 sq. ft',
    specs: [
      { label: 'terrace', value: '7\'9" x 7\'9"' },
      { label: 'bedroom 1', value: '14\'6" x 13\'0"' },
      { label: 'bedroom 2', value: '12\'0" x 13\'0"' },
      { label: 'lounge', value: '12\'0" x 13\'0"' },
      { label: 'kitchen', value: '7\'0" x 11\'0"' }
    ]
  },
  {
    id: 'type-b',
    name: 'Type B Residency',
    size: '1000 sq. ft',
    specs: [
      { label: 'terrace', value: '15\'3" x 5\'0"' },
      { label: 'bedroom 1', value: '13\'0" x 15\'0"' },
      { label: 'bedroom 2', value: '13\'0" x 11\'9"' },
      { label: 'lounge', value: '13\'0" x 12\'6"' },
      { label: 'corridor', value: '6\'0" wide' }
    ]
  },
  {
    id: 'type-c',
    name: 'Type C Residency',
    size: '1025 sq. ft',
    specs: [
      { label: 'bedroom 1', value: '16\'0" x 13\'0"' },
      { label: 'bedroom 2', value: '12\'6" x 17\'0"' },
      { label: 'lounge', value: '14\'0" x 17\'6"' },
      { label: 'kitchen', value: '7\'6" x 9\'0"' }
    ]
  }
];

export const CORE_OFFERINGS = [
  { title: '5-Star Hotel', icon: '🏨', desc: 'luxury accommodation for global visitors.' },
  { title: 'Midtown Mall', icon: '🛍️', desc: '5 floors of premier retail and entertainment.' },
  { title: 'Corporate Suites', icon: '💼', desc: 'high-tech corporate floors with global connectivity.' },
  { title: 'Residential Units', icon: '🏠', desc: 'exclusively designed 2, 3, and 4-bed smart homes.' }
];

export const AMENITIES: Amenity[] = [
  { title: 'dedicated lobby', icon: '🏛️' },
  { title: '24/7 security', icon: '🛡️' },
  { title: 'cargo lift', icon: '🏗️' },
  { title: 'swimming pool', icon: '🏊' },
  { title: 'health club', icon: '🏋️' },
  { title: 'coffee shop', icon: '☕' },
  { title: 'electricity backup', icon: '⚡' },
  { title: 'cctv monitoring', icon: '📹' },
  { title: 'ample parking', icon: '🅿️' },
  { title: 'luxury spa', icon: '🧖' },
  { title: 'on-site atm', icon: '🏧' },
  { title: 'global brands', icon: '🏷️' },
  { title: 'shuttle service', icon: '🚌' },
  { title: 'elevators & escalators', icon: '🪜' },
  { title: 'kids pool area', icon: '🏖️' },
  { title: 'dubai water fall', icon: '⛲' },
  { title: 'sauna room', icon: '🔥' },
  { title: 'steam room', icon: '💨' },
  { title: 'juice bar', icon: '🥤' },
  { title: 'garbage chute', icon: '🗑️' },
  { title: 'beauty saloon', icon: '💇' },
  { title: 'kids play area', icon: '🪁' },
  { title: 'large atrium', icon: '🏘️' },
  { title: 'high speed lifts', icon: '🛗' },
  { title: 'central air condition', icon: '❄️' },
  { title: 'food court', icon: '🍕' },
  { title: 'lavish corridors', icon: '✨' },
  { title: 'direct spa access', icon: '🚪' },
  { title: 'jacuzzi', icon: '🛁' },
  { title: '24/7 maintenance', icon: '🛠️' },
  { title: 'fully smart system', icon: '📱' },
  { title: 'fire safety', icon: '🧯' }
];

export const LOCATION_PROXIMITY: LocationDetail[] = [
  { distance: '1 km', label: 'metro bus station' },
  { distance: '7 mins', label: 'zero point' },
  { distance: '8 mins', label: 'international airport' },
  { distance: '11 mins', label: 'pims hospital' },
  { distance: '12 mins', label: 'motorway m2' },
  { distance: '14 mins', label: 'blue area' }
];

export const PROJECT_CONTEXT = `
midtown towers islamabad:
- taglines: "your ultimate lifestyle", "a lifestyle you deserve, a luxury you desire".
- developer: cubic developers (pvt) ltd, led by al-hunain group (est 1992, 29+ years experience).
- structure: 3 towers, 5 floors of midtown mall (133,000 sq ft), corporate floor, residential floors.
- features: pakistan's first smart building, emerald-themed luxury design.
- full list of amenities: dedicated lobby, 24/7 security, cargo lift, swimming pool, health club, coffee shop, electricity backup, cctv, parking, spa, atm, brands, shuttle, elevators, kids pool, water fall, sauna, steam, juice bar, garbage chute, saloon, play area, atrium, central ac, food court, jacuzzi, maintenance.
- location: 1km from metro, 8 mins from airport, 12 mins from m2 motorway.
- apartment types: type a (915 sq ft), type b (1000 sq ft), type c (1025 sq ft).
`;
