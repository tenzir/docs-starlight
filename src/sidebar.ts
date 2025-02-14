export const sidebar = [
  {
    label: 'Docs',
    items: [
      {
        label: 'Guides',
        items: [{ label: 'Quickstart', slug: 'guides/quickstart' }],
      },
      {
        label: 'Tutorials',
        items: [{ label: 'Map Data to OCSF', slug: 'tutorials/map-data-to-ocsf' }],
      },
      {
        label: 'Explanations',
        autogenerate: { directory: 'explanations' },
      },
      {
        label: 'Reference',
        items: [
          {
            label: 'Language',
            items: [
              { label: 'Statements', slug: 'reference/language/statements' },
              { label: 'Expressions', slug: 'reference/language/expressions' },
              { label: 'Types', slug: 'reference/language/types' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Integrations',
    items: [
      {
        label: 'Amazon',
        autogenerate: { directory: 'integrations/amazon' },
      },
    ],
  },
  // NB: this needs to come *last* in the array. Otherwise, the auto-switching
  // isn't working!
  {
    label: 'navbar',
    items: [
      { label: 'Docs', link: '/' },
      { label: 'Integrations', link: 'integrations/amazon/security-lake' },
      { label: 'API', link: 'api' },
    ],
  },
];
