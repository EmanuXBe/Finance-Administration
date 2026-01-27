export interface EraDefinition {
  id: string;
  title: string;
  yearRange: string;
  story: string; // Changed from description to story
  engineeringContext: {
    title: string;
    content: string;
  };
  definitions: {
    term: string; // This term must exist exactly in the story text to be interactive
    definition: string;
  }[];
  didYouKnow: string;
  reflectionQuestion: string;
  interactiveComponent?: 'barter' | 'inflation' | 'dam' | 'digital';
}

export interface InflationDataPoint {
  year: number;
  cost: number;
  currencyValue: number;
}