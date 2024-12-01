import type { CategoryOption } from '../types';

export const categories: CategoryOption[] = [
  {
    id: 'male',
    label: 'Male',
    description: 'Male portrait variation',
    prompt: 'Create a male portrait photo, maintaining exact facial structure, features, skin tone, and ethnic characteristics, head and shoulders only, professional studio lighting, neutral background, ultra-realistic',
    icon: '👨'
  },
  {
    id: 'female',
    label: 'Female',
    description: 'Female portrait variation',
    prompt: 'Create a female portrait photo, maintaining exact facial structure, features, skin tone, and ethnic characteristics, head and shoulders only, professional studio lighting, neutral background, ultra-realistic',
    icon: '👩'
  },
  {
    id: 'child',
    label: 'Child',
    description: 'Child portrait variation',
    prompt: 'Create a child portrait photo (age 7-12), maintaining exact facial structure, features, skin tone, and ethnic characteristics, head and shoulders only, professional studio lighting, neutral background, ultra-realistic',
    icon: '👶'
  },
  {
    id: 'oldman',
    label: 'Elderly Man',
    description: 'Elderly male portrait',
    prompt: 'Create an elderly male portrait photo (age 65+), maintaining exact facial structure, features, skin tone, and ethnic characteristics, head and shoulders only, professional studio lighting, neutral background, ultra-realistic',
    icon: '👴'
  },
  {
    id: 'oldwoman',
    label: 'Elderly Woman',
    description: 'Elderly female portrait',
    prompt: 'Create an elderly female portrait photo (age 65+), maintaining exact facial structure, features, skin tone, and ethnic characteristics, head and shoulders only, professional studio lighting, neutral background, ultra-realistic',
    icon: '👵'
  }
];