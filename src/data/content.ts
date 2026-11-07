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

const BASE = import.meta.env.BASE_URL;

/** Public path helper that respects the GitHub Pages base path (/My-portfolio/). */
export const asset = (path: string) => `${BASE}${path}`;

export const cv = {
  href: asset('documents/Nafisa_Siddiquee_CV.pdf'),
  filename: 'Nafisa_Siddiquee_CV.pdf',
};

/** A research document: the original PDF for download, plus image renderings of it for in-page preview. */
export type ResearchDocument = {
  label: string;
  title: string;
  description: string;
  pdf: string;
  filename: string;
  image: { base: string; widths: number[]; width: number; height: number };
  alt: string;
  /** Display width (CSS px) when the viewer is switched to full size. */
  fullWidth: number;
};

export const docSrcSet = (d: ResearchDocument) =>
  d.image.widths.map((w) => `${BASE}images/optimized/${d.image.base}-${w}.webp ${w}w`).join(', ');
export const docSrc = (d: ResearchDocument) =>
  `${BASE}images/optimized/${d.image.base}-${d.image.widths[0]}.webp`;

export type ResearchDetails = {
  category: string;
  overview: string;
  facts: { label: string; value: string }[];
  /** Abstract exactly as printed on the research poster (Abstract ID RAI01-062). */
  abstract: string[];
  poster: ResearchDocument;
  certificate: ResearchDocument;
};

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
  details?: ResearchDetails;
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
    // Title, author order and details follow the research poster and the certificate of presentation.
    title: 'Public Awareness and Expectations of Accelerated & Reliable MRI Imaging Using Machine Learning',
    authors: [
      'Prantik Baroi',
      'Shrayasee Mandal',
      'Ifreet Zareef Hossain',
      'Nafisa Siddiquee',
      'Mahir Mohtab Ayman',
      'Juena Ahmed Noshin',
    ],
    venue: 'International Conference on Electronics and Informatics 2026 (ICEI2026), Dhaka',
    venueType: 'Conference presentation',
    year: '2026',
    status: 'conference',
    statusLabel: 'Presented · ICEI 2026',
    field: 'Interdisciplinary · Medical Imaging · Public Perception',
    details: {
      category: 'Descriptive cross-sectional survey · Machine learning in MRI',
      overview:
        'A survey study of public awareness and trust regarding the use of machine learning in MRI: what people expect from ML-supported scans, such as speed, image quality and accuracy, and the data-privacy concerns that accompany them.',
      facts: [
        { label: 'Abstract ID', value: 'RAI01-062' },
        { label: 'Presented', value: '07–08 May 2026 · Atomic Energy Centre, Dhaka' },
        { label: 'Organised by', value: 'Bangladesh Electronics and Informatics Society (BEIS)' },
      ],
      abstract: [
        'Magnetic Resonance Imaging (MRI) is widely used in diagnosing various conditions, there are many disadvantages associated with this technology, such as long imaging time, patient discomfort, and expensive costs. This research paper will explore the level of general awareness of the public regarding the ability of machine learning technologies to improve the functionality and accuracy of the diagnostics tool. To achieve this goal, a survey was conducted via Google Forms among 60 respondents of different age groups and educational backgrounds. The results revealed that most respondents have already experienced MRI and had an understanding of the possibility of the application of machine learning technologies. Respondents thought that ML would help to reduce time and improve image quality, and 91.1% were ready to use ML-supported MRI. However, concerns for data privacy were present.',
      ],
      poster: {
        label: 'Research Poster',
        title: 'Public Awareness and Expectations of Accelerated & Reliable MRI Imaging Using Machine Learning',
        description: 'Research poster, ICEI 2026 · Abstract ID RAI01-062',
        pdf: asset('documents/ML_in_MRI_Poster.pdf'),
        filename: 'ML_in_MRI_Research_Poster.pdf',
        image: { base: 'ml-mri-poster', widths: [1200, 2400], width: 2400, height: 3840 },
        alt: 'Research poster: Public Awareness and Expectations of Accelerated & Reliable MRI Imaging Using Machine Learning, with abstract, methodology, introduction, workflow, survey charts, results, discussion and conclusion.',
        fullWidth: 1600,
      },
      certificate: {
        label: 'Certificate of Presentation',
        title: 'International Conference on Electronics and Informatics 2026',
        description: 'Certificate of Presentation, ICEI 2026 · Presented by Prantik Baroi',
        pdf: asset('documents/ML_in_MRI_Certificate.pdf'),
        filename: 'ML_in_MRI_Certificate_of_Presentation.pdf',
        image: { base: 'ml-mri-certificate', widths: [1200, 2400], width: 2400, height: 1800 },
        alt: 'Certificate of Presentation from the International Conference on Electronics and Informatics 2026 for abstract RAI01-062, listing the authors including Nafisa Siddiquee, presented by Prantik Baroi at the Atomic Energy Centre, Dhaka, on 07–08 May 2026.',
        fullWidth: 1800,
      },
    },
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

/** Former gallery photograph, now used only as a faint texture behind Research Interests. */
export const researchBackdrop = {
  srcSet: [700, 1152].map((w) => `${BASE}images/optimized/nafisa-gallery-${w}.webp ${w}w`).join(', '),
  src: `${BASE}images/optimized/nafisa-gallery-1152.webp`,
  width: 1152,
  height: 2048,
};

export const srcSet = (p: Photo) =>
  p.widths.map((w) => `${BASE}images/optimized/${p.base}-${w}.webp ${w}w`).join(', ');
export const fallbackSrc = (p: Photo) => `${BASE}images/${p.base}.jpeg`;
