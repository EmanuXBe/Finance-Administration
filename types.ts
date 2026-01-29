export interface EraDefinition {
  id: string;
  title: string;
  yearRange: string;
  story: string;
  engineeringContext: {
    title: string;
    content: string;
  };
  definitions: {
    term: string;
    definition: string;
  }[];
  didYouKnow: string;
  reflectionQuestion: string;
  interactiveComponent?: 'barter' | 'inflation' | 'dam' | 'digital';
}

export interface Paper {
  title: string;
  year: number;
  topic: 'Tecnología' | 'Educación' | 'Ciencia' | 'Geomática' | 'Materiales';
  citations: number;
  link: string;
}

export interface Book {
  title: string;
  cover: string;
  synopsis: string;
  year: number;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  type: 'academic' | 'professional' | 'personal';
}

export interface Affiliation {
  name: string;
  role: string;
  logo: string;
}

export interface ArcadeActivity {
  id: string;
  title: string;
  course: string;
  description: string;
  image: string;
  status: 'playable' | 'coming-soon';
}

export interface InflationDataPoint {
  year: number;
  cost: number;
  currencyValue: number;
}