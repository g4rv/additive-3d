// types/index.ts
export interface SpecRow {
  param: string;
  value: string;
}

export interface Material {
  id: string;
  name_uk: string;
  summary_uk: string;
  advantages_uk: string[];
  specs: SpecRow[];
  notes_uk?: string[];
}

export interface Equipment {
  id: string;
  name_uk: string;
  technology: 'MJF' | 'FDM';
  specs: SpecRow[];
  images?: string[];
}

export interface Service {
  id: string;
  title_uk: string;
  summary_uk: string;
  content_uk: string; // markdown
  relatedMaterials?: string[];
}
