import { PracticeItem } from '../../typings';
import { MdFamilyRestroom, MdBusinessCenter } from 'react-icons/md';
import { VscLaw } from 'react-icons/vsc';

export const practiceData: PracticeItem[] = [
  {
    id: 1,
    icon: <MdFamilyRestroom />,
    title: 'Family Law',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/practice/family-law',
  },
  {
    id: 2,
    icon: <VscLaw />,
    title: 'Criminal Law',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/practice/criminal-law',
  },
  {
    id: 3,
    icon: <MdBusinessCenter />,
    title: 'Business Law',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/practice/business-law',
  },
];
