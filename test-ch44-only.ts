import type { Track } from './types';

export const emojiTrack: Track = {
  id: 'emojis',
  title: 'Emoji & Unicode',
  tagline: 'test',
  icon: 'test',
  colorVar: 'emojis',
  brandColor: '#FFC107',
  glowColor: 'rgba(255, 193, 7, 0.3)',
  totalChapters: 1,
  estimatedHours: 1,
  chapters: [
    {
      id: 'emojis-44',
      number: 44,
      partLabel: 'Part 5: Projects',
      title: 'Emoji Compatibility Tester',
      subtitle: 'Test and document emoji support across platforms',
      difficulty: 'Advanced',
      estimatedMinutes: 45,
      xpReward: 90,
      prerequisites: ['emojis-18', 'emojis-13'],
      learningObjectives: [
        'Test emoji rendering across platforms',
        'Document compatibility differences',
        'Build a compatibility testing tool',
        'Understand the emoji support lifecycle'
      ],
      sections: [
        {
          id: 's1',
          title: 'Project Overview',
          whyItMatters: 'Knowing which emoji are supported on which platforms is essential for cross-platform development.',
          content: '## Compatibility Tester\n\nBuild a tool that tests and displays emoji compatibility:\n\n### Test Categories\n- Basic smileys and gestures\n- Skin tone variants\n- ZWJ sequences (families, professions)\n- Flags (country and subdivision)\n- Newly released emoji\n\n### Display\n- Checkmark or X for each emoji\n- Platform name column\n- Notes on known differences'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-44-q1', type: 'mcq', question: 'How can you test if a platform supports a given emoji?', options: ['Canvas measureText comparison', 'Check the Unicode version', 'Try to render it', 'Ask the browser'], correctAnswer: 0, explanation: 'Compare width of the emoji text to a known unsupported character width.', difficulty: 2 },
          { id: 'emojis-44-q2', type: 'true-false', question: 'ZWJ sequences are more likely supported on newer platforms.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Newer platforms and OS versions add ZWJ support progressively.', difficulty: 1 },
          { id: 'emojis-44-q3', type: 'mcq', question: 'What does canvas measureText return for unsupported characters?', options: ['Width of the tofu glyph', '0', 'Negative value', 'Error'], correctAnswer: 0, explanation: 'Unsupported chars render as tofu with a measurable width.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
          { id: 'empty', type: 'easy', title: 'placeholder', instructions: 'placeholder', hint: 'placeholder', starterCode: 'placeholder', solution: 'placeholder' }
      ],
      cheatSheet: [
        { label: 'Support test', value: 'Canvas measureText comparison' },
        { label: 'Tofu width', value: 'Reference width for unsupported chars' },
        { label: 'Test categories', value: 'Basic, skin tones, ZWJ, flags' },
        { label: 'Version tracking', value: 'Map emoji to Unicode version' }
      ]
    },
  ];
};