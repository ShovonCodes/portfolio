import fs from 'fs';
import path from 'path';
import { PortfolioData } from '../types';

export async function getPortfolioData(): Promise<PortfolioData> {
  const filePath = path.join(process.cwd(), 'app/data/portfolio.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
