// All portfolio content lives here so facts can be reviewed and updated in one place.
// Only information supplied by the portfolio owner is included.

export const profile = {
  name: 'Nafisa Siddiquee',
  shortName: 'Nafisa',
  identity: ['Zoologist', 'Researcher', 'Conservation Enthusiast'],
  email: 'nafisasiddiquee36@gmail.com',
  institution: 'Noakhali Government College',
  university: 'National University, Bangladesh',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'fieldwork', label: 'Fieldwork' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof navItems)[number]['id'];

export const education = [
  {
    period: 'September 2026',
    degree: 'B.Sc. in Zoology',
    institution: 'Noakhali Government College',
    body: 'National University, Bangladesh',
    result: 'CGPA 3.00',
  },
  {
    period: '2020',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Chowmohani Government S.A. College',
    body: null,
    result: 'GPA 4.75',
  },
  {
    period: '2018',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Gonipur Pilot Girls High School',
    body: null,
    result: 'GPA 4.78',
  },
];

export const researchInterests = [
  {
    title: 'Biodiversity',
    note: 'The variety of life across habitats, and how that variety is documented and measured.',
  },
  {
    title: 'Wildlife Ecology',
    note: 'How organisms interact with one another and with the environments they inhabit.',
  },
  {
    title: 'Conservation Biology',
    note: 'The science of protecting species, habitats and the ecological processes that sustain them.',
  },
  {
    title: 'Aquatic Ecosystems',
    note: 'Freshwater, coastal and marine systems, including the fisheries and aquaculture that depend on them.',
  },
  {
    title: 'Animal Taxonomy',
    note: 'The identification, naming and classification of animal life.',
  },
  {
    title: 'Molecular Biology',
    note: 'Molecular methods in the life sciences, including the detection of microorganisms.',
  },
  {
    title: 'Environmental Studies',
    note: 'The relationship between living systems, human activity and the wider environment.',
  },
];

export type PublicationStatus = 'under-review' | 'conference';

export const publications: {
  title: string;
  authors: string[];
  venue: string;
  venueType: string;
  year: string;
  status: PublicationStatus;
  statusLabel: string;
  field: string;
}[] = [
  {
    title:
      'Prevalence, Molecular Detection, and Antibiotic Resistance Profiles of Escherichia coli Isolated from Urinary Tract Infection Patients in Northern Bangladesh',
    authors: ['Nafisa Siddiquee', 'Saikat Mahmud', 'Dr. Susmita Sen'],
    venue: 'Novel Research in Microbiology',
    venueType: 'Journal manuscript',
    year: '2026',
    status: 'under-review',
    statusLabel: 'Under Review',
    field: 'Microbiology · Molecular Detection · Antimicrobial Resistance',
  },
  {
    title: 'Public Awareness and Expectations of Accelerated Reliable MRI Imaging Using Machine Learning',
    authors: [
      'Nafisa Siddiquee',
      'Ifreet Zareef Hossain',
      'Mahir Mohtab Ayman',
      'Prantik Baroi',
      'Shraysree Mandal',
      'Juena Ahmed Noshin',
    ],
    venue: 'International Conference on Electronics and Informatics (ICEI), Bangladesh',
    venueType: 'Conference paper',
    year: '2026',
    status: 'conference',
    statusLabel: 'Conference Contribution',
    field: 'Interdisciplinary · Medical Imaging · Public Perception',
  },
];

export const fieldwork: {
  title: string;
  location: string | null;
  kind: string;
  focus: string[];
  summary: string;
}[] = [
  {
    title: 'Zoological Field Study & Report Writing',
    location: "Fishery Ghat, Cox's Bazar",
    kind: 'Field study',
    focus: ['Zoological field study', 'Field observation', 'Scientific report writing'],
    summary:
      'A zoological field study at the Fishery Ghat in Cox’s Bazar, carried through from on-site observation to a written scientific report.',
  },
  {
    title: 'Field Study on Poultry Farming',
    location: null,
    kind: 'Field study · Livestock',
    focus: ['Poultry farming', 'Farm practice', 'Field documentation'],
    summary: 'A field study of poultry farming, looking at how a working farm operates and documenting it.',
  },
  {
    title: 'Field Study on Coastal Area',
    location: "Cox's Bazar",
    kind: 'Field study',
    focus: ['Coastal environment', 'Field observation', 'Documentation'],
    summary: 'A field study of the coastal area at Cox’s Bazar, observing a shoreline environment first-hand.',
  },
  {
    title: 'Field Study on Crab Farming',
    location: null,
    kind: 'Field study · Aquaculture',
    focus: ['Crab farming', 'Aquaculture practice', 'Field documentation'],
    summary: 'A field study of crab farming, a branch of aquaculture, observing and documenting how it is practised.',
  },
  {
    title: 'Field Visit — Niribili Hatchery',
    location: "Cox's Bazar",
    kind: 'Field visit',
    focus: ['Hatchery operations', 'Aquaculture', 'Site visit'],
    summary: 'A field visit to Niribili Hatchery in Cox’s Bazar to see how a hatchery works.',
  },
];

export const skills = [
  {
    group: 'Field Techniques',
    items: ['Field Observation', 'Biological Sampling', 'Species Identification', 'Biodiversity Assessment'],
  },
  {
    group: 'Laboratory Techniques',
    items: ['Basic Microscopy', 'Biological Specimen Preparation', 'Taxonomic Identification'],
  },
  {
    group: 'Research & Data',
    items: ['Data Collection', 'Data Documentation', 'Basic Statistical Analysis', 'Literature Review'],
  },
  {
    group: 'Software',
    items: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint'],
  },
  {
    group: 'Scientific Communication',
    items: ['Scientific Report Writing', 'Academic Documentation', 'Data Presentation'],
  },
];

export const languages = [
  { name: 'Bengali', level: 'Native' },
  { name: 'English', level: 'Fluent — spoken and written communication' },
];

export const volunteer = [
  {
    role: 'Campus Ambassador',
    org: 'National Union of Research Organization',
    period: '2025 — Present',
    current: true,
  },
  {
    role: 'Campus Ambassador',
    org: 'National University Skill Development Forum',
    period: '2021 — 2022',
    current: false,
  },
];

export const activities = [
  { title: 'Public Speaking', note: 'Public speaking and presentations in English.' },
  { title: 'Academic Writing', note: 'Academic writing and documentation.' },
  { title: 'Tutoring', note: 'Informal tutoring and lesson planning.' },
  { title: 'Student Mentoring', note: 'Academic monitoring and student feedback.' },
];

export type Photo = {
  base: string;
  widths: number[];
  width: number;
  height: number;
  alt: string;
};

export const photos: Record<'hero' | 'about', Photo> = {
  hero: {
    base: 'nafisa-hero',
    widths: [960, 1600, 2048],
    width: 2048,
    height: 1152,
    alt: 'Nafisa Siddiquee seated outdoors, chin resting on her hand, gazing into the distance against a pale evening sky',
  },
  about: {
    base: 'nafisa-about',
    widths: [600, 1000, 1400],
    width: 2730,
    height: 4096,
    alt: 'Portrait of Nafisa Siddiquee smiling beside a tree trunk on a sunlit green lawn',
  },
};

const BASE = import.meta.env.BASE_URL;
export const srcSet = (p: Photo) =>
  p.widths.map((w) => `${BASE}images/optimized/${p.base}-${w}.webp ${w}w`).join(', ');
export const fallbackSrc = (p: Photo) => `${BASE}images/${p.base}.jpeg`;
