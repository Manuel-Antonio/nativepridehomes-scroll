import { Project } from '../models/project.model';
import { categories } from './categories';

export const projects: Project[] = [
  new Project(
    1,
    'Modern Villa',
    'Luxurious modern villa.',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1720741200/NativePrideHomes/proyects/project1_cyekou.jpg',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1721501013/NativePrideHomes/proyect-webp/project1_cyekou_1_11zon_r8pndo.webp',
    categories[0]
  ),
  new Project(
    2,
    'Urban Apartment',
    'Compact and stylish apartment.',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1720741200/NativePrideHomes/proyects/project2_mmhg6u.jpg',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1721501013/NativePrideHomes/proyect-webp/project2_mmhg6u_2_11zon_hcqsug.webp',
    categories[0]
  ),
  new Project(
    3,
    'Office Building',
    'State-of-the-art office building.',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1720741201/NativePrideHomes/proyects/project3_p4jvtn.jpg',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1721501013/NativePrideHomes/proyect-webp/project3_p4jvtn_3_11zon_uldjdw.webp',
    categories[1]
  ),
  new Project(
    4,
    'Shopping Mall',
    'Spacious shopping mall.',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1720741202/NativePrideHomes/proyects/project4_haa1go.jpg',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1721501013/NativePrideHomes/proyect-webp/project4_haa1go_4_11zon_qbzdej.webp',
    categories[1]
  ),
  new Project(
    5,
    'Factory',
    'High-tech manufacturing facility.',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1721500704/NativePrideHomes/proyects/project5_qnn32b_11zon_v3v35u_enyl9v.jpg',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1721501014/NativePrideHomes/proyect-webp/project5_qnn32b_11zon_v3v35u_5_11zon_ycynnx.webp',
    categories[2]
  ),
  new Project(
    6,
    'Warehouse',
    'Large storage warehouse.',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1720741203/NativePrideHomes/proyects/project6_jvc71h.jpg',
    'https://res.cloudinary.com/djsl4a5py/image/upload/w_800,h_600,c_fill/v1721501015/NativePrideHomes/proyect-webp/project6_jvc71h_6_11zon_dfytf8.webp',
    categories[2]
  ),
];
