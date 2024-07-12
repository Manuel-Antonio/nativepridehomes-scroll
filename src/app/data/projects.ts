import { Project } from '../models/project.model';
import { categories } from './categories';

export const projects: Project[] = [
  new Project(1, 'Modern Villa', 'Luxurious modern villa.', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1720741200/NativePrideHomes/proyects/project1_cyekou.jpg', categories[0]),
  new Project(2, 'Urban Apartment', 'Compact and stylish apartment.', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1720741200/NativePrideHomes/proyects/project2_mmhg6u.jpg', categories[0]),
  new Project(3, 'Office Building', 'State-of-the-art office building.', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1720741201/NativePrideHomes/proyects/project3_p4jvtn.jpg', categories[1]),
  new Project(4, 'Shopping Mall', 'Spacious shopping mall.', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1720741202/NativePrideHomes/proyects/project4_haa1go.jpg', categories[1]),
  new Project(5, 'Factory', 'High-tech manufacturing facility.', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1720741203/NativePrideHomes/proyects/project5_qnn32b.jpg', categories[2]),
  new Project(6, 'Warehouse', 'Large storage warehouse.', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1720741203/NativePrideHomes/proyects/project6_jvc71h.jpg', categories[2]),

];
