// sidebars.js
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'Introduction', // Points to case-studies/proptech-field-ingestion.md
      label: 'Introduction to Case Studies'
    },
    {
      type: 'category',
      label: 'AI Safety Audit Engine',
      link: {
        type: 'doc',
        id: 'jetkvm_llm/Introduction',
      },
      items: [
        'jetkvm_llm/Introduction',
        'jetkvm_llm/The Legacy Software Trap',
        'jetkvm_llm/Non-Invasive Architecture',
        'jetkvm_llm/The Automation Loop',
        'jetkvm_llm/Future Strategy and Scale',
      ],
    },
    {
      type: 'category',
      label: 'AI Legacy Hardware Bridge',
      link: {
        type: 'doc',
        id: 'jetkvm_llm/Introduction',
      },
      items: [
        'jetkvm_llm/Introduction',
        'jetkvm_llm/The Legacy Software Trap',
        'jetkvm_llm/Non-Invasive Architecture',
        'jetkvm_llm/The Automation Loop',
        'jetkvm_llm/Future Strategy and Scale',
      ],
    },
  ],
};

module.exports = sidebars;
