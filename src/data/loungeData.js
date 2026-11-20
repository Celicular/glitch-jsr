export const LOUNGE_DATA = {
  name: 'Glitch Gaming Lounge',
  cityTag: 'Sakchi, Jamshedpur',
  tagline: 'Play • Relax • Repeat',
  description:
    'A social gaming hangout in Sakchi where friends play together, compete, relax, and experience high-refresh consoles and realistic steering wheel racing.',
  address:
    'Ground Floor, B-1, H.No. 15A, near Ambagan, SNP Area, Sakchi, Jamshedpur, Jharkhand 831001',
  contact: {
    instagram: 'https://www.instagram.com/glitch.jsr/',
    linktree: 'https://linktr.ee/glitch.jsr',
    email: 'glitch.jsr@gmail.com',
    phone: '+91 87978 00779',
    phoneRaw: '918797800779',
    whatsapp: 'https://wa.me/918797800779?text=Hi%20Glitch%20Gaming%20Lounge,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20gaming%20session.',
  },
  pricing: [
    {
      id: 'ps5-55',
      name: 'PlayStation 5 · 55" TV',
      category: 'Console Premium',
      screen: '55-inch 4K HDR Display',
      rates: [
        { players: 1, total: 160, perPerson: 160 },
        { players: 2, total: 200, perPerson: 100 },
        { players: 3, total: 240, perPerson: 80 },
        { players: 4, total: 280, perPerson: 70 },
      ],
      features: ['DualSense wireless controllers', 'Full game library access', 'Couch seating'],
    },
    {
      id: 'ps5-43',
      name: 'PlayStation 5 · 43" TV',
      category: 'Console Standard',
      screen: '43-inch High-Refresh Screen',
      rates: [
        { players: 1, total: 120, perPerson: 120 },
        { players: 2, total: 180, perPerson: 90 },
        { players: 3, total: 200, perPerson: 67 },
        { players: 4, total: 240, perPerson: 60 },
      ],
      features: ['DualSense controllers', 'Fast response time', 'Great for 1v1 and co-op'],
    },
    {
      id: 'ps4',
      name: 'PlayStation 4 Setup',
      category: 'Budget Friendly',
      screen: 'Dedicated Full HD Gaming Screen',
      rates: [
        { players: 1, total: 80, perPerson: 80 },
        { players: 2, total: 110, perPerson: 55 },
        { players: 3, total: 140, perPerson: 47 },
        { players: 4, total: 170, perPerson: 43 },
      ],
      features: ['DualShock 4 controllers', 'Classics & sports library', 'Casual hangout tier'],
    },
    {
      id: 'sim-wheel',
      name: 'PC Steering-Wheel Rig',
      category: 'Simulation Cockpit',
      screen: 'Immersive Simulator Station',
      isTimeBased: true,
      timeOptions: [
        { duration: '30 Minutes', total: 100 },
        { duration: '60 Minutes', total: 170 },
      ],
      features: ['Force feedback racing wheel', 'Pedal set & bucket seat', 'Assetto Corsa / F1 / Forza'],
    },
  ],
  games: [
    { title: 'Tekken 8', genre: 'Fighting', platforms: 'PS5', hot: true },
    { title: 'God of War Ragnarök', genre: 'Action RPG', platforms: 'PS5 / PS4', hot: true },
    { title: 'EA Sports FC 24', genre: 'Sports / Soccer', platforms: 'PS5 / PS4', hot: true },
    { title: 'Mortal Kombat 1', genre: 'Fighting', platforms: 'PS5', hot: false },
    { title: 'Gran Turismo 7', genre: 'Racing Simulation', platforms: 'PS5 / Wheel', hot: true },
    { title: 'Injustice 2', genre: 'Fighting', platforms: 'PS4 / PS5', hot: false },
    { title: "Marvel's Spider-Man 2", genre: 'Action Adventure', platforms: 'PS5', hot: false },
    { title: 'Forza Horizon', genre: 'Open-World Racing', platforms: 'PC Wheel', hot: true },
  ],
  tournament: {
    title: 'Weekly Tekken 8 Showdown',
    frequency: 'Every Saturday & Sunday Evening',
    format: 'Double Elimination • 1v1 Bracket',
    prizePool: 'Cash Pool + Free Lounge Passes',
    entryFee: 'Nominal Registration',
    status: 'Registrations Open via Linktree / Instagram',
  },
  amenities: [
    {
      title: 'Snacks & Soft Drinks',
      detail: 'Chilled energy beverages, cold soft drinks, chips, and quick bites served directly at your station.',
    },
    {
      title: 'Glitch Membership',
      detail: 'Discounted hourly rates, priority weekend slots, and free monthly tournament entries.',
    },
    {
      title: 'Group Hangouts & Birthdays',
      detail: 'Book multiple stations or the entire lounge for private gaming parties and celebrations.',
    },
  ],
  galleryPlaceholders: [
    { title: 'PS5 55" Main Stage', aspect: '16/9', label: '55-inch Station & Lounge Couch' },
    { title: 'PC Driving Rig Cockpit', aspect: '4/3', label: 'Force Feedback Steering Wheel & Pedals' },
    { title: 'PS5 43" 1v1 Battle Station', aspect: '4/3', label: 'Head-to-head Fighting Setup' },
    { title: 'Tournament Night Crowd', aspect: '16/9', label: 'Weekly Tekken Community Session' },
  ],
}
