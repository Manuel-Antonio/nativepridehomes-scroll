import { Profile } from '../models/profile.model';

export const profiles: Profile[] = [
  new Profile(
    1,
    'John Doe',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_200,h_200,c_fill/v1720740268/NativePrideHomes/testimonials/perfil2_gyebpu.png',
    '',
    'Chief Executive Officer',
    'John leads our team with over 20 years of experience in the construction industry.'
  ),
  new Profile(
    2,
    'Jane Smith',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_200,h_200,c_fill/v1720740267/NativePrideHomes/testimonials/perfil1_neee4e.png',
    '',
    'Project Manager',
    'Jane ensures that every project is completed on time and to the highest standards.'
  ),
  new Profile(
    3,
    'Michael Johnson',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_200,h_200,c_fill/v1720740266/NativePrideHomes/testimonials/perfil6_lpddcx.png',
    '',
    "Lead Architect",
    'Michael designs our homes with creativity and precision, making your dream home a reality.'
  ),
];
