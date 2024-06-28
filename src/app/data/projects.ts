import { Project } from '../models/project.model';
import { categories } from './categories';

export const projects: Project[] = [
  new Project(1, 'Modern Villa', 'Luxurious modern villa.', 'assets/imgs/project1.jpg', categories[0]),
  new Project(2, 'Urban Apartment', 'Compact and stylish apartment.', 'assets/imgs/project2.jpg', categories[0]),
  new Project(3, 'Office Building', 'State-of-the-art office building.', 'assets/imgs/project3.jpg', categories[1]),
  new Project(4, 'Shopping Mall', 'Spacious shopping mall.', 'assets/imgs/project4.jpg', categories[1]),
  new Project(5, 'Factory', 'High-tech manufacturing facility.', 'assets/imgs/project5.jpg', categories[2]),
  new Project(6, 'Warehouse', 'Large storage warehouse.', 'assets/imgs/project6.jpg', categories[2]),
  // Add more projects as needed
];
