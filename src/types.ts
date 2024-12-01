export interface GeneratedImage {
  url: string;
  id: string;
}

export type Category = 'male' | 'female' | 'child' | 'oldman' | 'oldwoman';

export interface CategoryOption {
  id: Category;
  label: string;
  description: string;
  prompt: string;
  icon: string;
}