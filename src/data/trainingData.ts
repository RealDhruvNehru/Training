export interface TrainingDay {
  id: string;
  day: number;
  date: string;
  trainer: string;
  experience: string;
  highlights: string[];
  keyQuotes?: string[];
  status: 'completed' | 'upcoming' | 'in-progress';
}

export const trainingDays: TrainingDay[] = [
  {
    id: 'day1',
    day: 1,
    date: '2025-06-23',
    trainer: 'Dr. Ritesh Batra',
    experience: '27+ years in Learning & Development',
    highlights: [
      '"Be yourself" was emphasized as the most powerful advice.',
      'Many people operate cognitively but not mindfully.',
      'Communication is about connection, not just clarity.',
      'Seek to understand before being understood.',
      'Words carry memory—speak cautiously.',
      'Life can become monotonous—don\'t use it as an excuse for poor behavior.',
      'Live with grace and gratitude.',
      'People come with packaging—don\'t be carried away by appearances.',
      'Trust is built when there\'s no shame, no blame.',
      'Acknowledge before arguing—it leads to better understanding.',
      'VUCA theory: Volatile, Unpredictable, Complex, Ambiguous.',
      'Looking good and being nice is a business—but the real value is in "being enough."'
    ],
    keyQuotes: [
      'Be yourself',
      'Communication is about connection, not just clarity',
      'Seek to understand before being understood',
      'Words carry memory—speak cautiously',
      'Live with grace and gratitude'
    ],
    status: 'completed'
  },
  {
    id: 'day2',
    day: 2,
    date: '2025-06-24',
    trainer: 'TBD',
    experience: 'TBD',
    highlights: ['Content will be added after the session'],
    status: 'upcoming'
  },
  {
    id: 'day3',
    day: 3,
    date: '2025-06-25',
    trainer: 'TBD',
    experience: 'TBD',
    highlights: ['Content will be added after the session'],
    status: 'upcoming'
  },
  {
    id: 'day4',
    day: 4,
    date: '2025-06-26',
    trainer: 'TBD',
    experience: 'TBD',
    highlights: ['Content will be added after the session'],
    status: 'upcoming'
  },
  {
    id: 'day5',
    day: 5,
    date: '2025-06-27',
    trainer: 'TBD',
    experience: 'TBD',
    highlights: ['Content will be added after the session'],
    status: 'upcoming'
  }
];

export const quotes = [
  {
    text: 'Be yourself',
    author: 'Dr. Ritesh Batra',
    day: 1
  },
  {
    text: 'Communication is about connection, not just clarity',
    author: 'Dr. Ritesh Batra',
    day: 1
  },
  {
    text: 'Seek to understand before being understood',
    author: 'Dr. Ritesh Batra',
    day: 1
  },
  {
    text: 'Words carry memory—speak cautiously',
    author: 'Dr. Ritesh Batra',
    day: 1
  },
  {
    text: 'Live with grace and gratitude',
    author: 'Dr. Ritesh Batra',
    day: 1
  }
];