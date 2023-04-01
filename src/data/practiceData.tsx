import { PracticeItem } from '../../typings';
import { MdFamilyRestroom, MdBusinessCenter } from 'react-icons/md';
import { VscLaw } from 'react-icons/vsc';

export const practiceData: PracticeItem[] = [
  {
    id: 1,
    image: '/images/family-law.jpg',
    icon: <MdFamilyRestroom />,
    title: 'Family Law',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/practice/family-law',
  },
  {
    id: 2,
    image: '/images/criminal-law.jpg',
    icon: <VscLaw />,
    title: 'Criminal Law',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/practice/criminal-law',
  },
  {
    id: 3,
    image: '/images/business-law.jpg',
    icon: <MdBusinessCenter />,
    title: 'Business Law',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/practice/business-law',
  },
];
