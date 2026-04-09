// =============================================================================
// PTE Academic Mock Test Data — Speaking Section
// 3 Full Tests, matching real PTE item distribution
// =============================================================================

const MOCK_TESTS = [
  {
    id: 1,
    name: 'Mock Test 1 — Full PTE Speaking',
    totalItems: 35,
    sections: [
      {
        type: 'read-aloud',
        label: 'Read Aloud',
        instruction: 'Look at the text below. In 35 seconds, you must read this text aloud as naturally and clearly as possible. You have 35 seconds to read aloud.',
        itemIds: ['ra-001', 'ra-005', 'ra-010', 'ra-015', 'ra-020', 'ra-025', 'ra-030'],
        prepTime: 35,
        recordTime: 35
      },
      {
        type: 'repeat-sentence',
        label: 'Repeat Sentence',
        instruction: 'You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.',
        itemIds: ['rs-001', 'rs-010', 'rs-020', 'rs-028', 'rs-035', 'rs-040', 'rs-050', 'rs-055', 'rs-060', 'rs-065'],
        recordTime: 15
      },
      {
        type: 'describe-image',
        label: 'Describe Image',
        instruction: 'Look at the image below. In 25 seconds, please speak into the microphone and describe in detail what the image is showing. You will have 40 seconds to give your response.',
        itemIds: ['di-001', 'di-005', 'di-010', 'di-015'],
        prepTime: 25,
        recordTime: 40
      },
      {
        type: 'retell-lecture',
        label: 'Re-tell Lecture',
        instruction: 'You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and re-tell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.',
        itemIds: ['rl-001', 'rl-005'],
        prepTime: 10,
        recordTime: 40
      },
      {
        type: 'answer-short-question',
        label: 'Answer Short Question',
        instruction: 'You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.',
        itemIds: ['asq-001', 'asq-010', 'asq-031', 'asq-040', 'asq-056', 'asq-081', 'asq-090', 'asq-106', 'asq-141', 'asq-176', 'asq-196', 'asq-216'],
        answerTime: 10
      }
    ]
  },
  {
    id: 2,
    name: 'Mock Test 2 — Full PTE Speaking',
    totalItems: 35,
    sections: [
      {
        type: 'read-aloud',
        label: 'Read Aloud',
        instruction: 'Look at the text below. In 35 seconds, you must read this text aloud as naturally and clearly as possible. You have 35 seconds to read aloud.',
        itemIds: ['ra-002', 'ra-008', 'ra-012', 'ra-018', 'ra-022', 'ra-028', 'ra-035'],
        prepTime: 35,
        recordTime: 35
      },
      {
        type: 'repeat-sentence',
        label: 'Repeat Sentence',
        instruction: 'You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.',
        itemIds: ['rs-003', 'rs-012', 'rs-022', 'rs-030', 'rs-038', 'rs-045', 'rs-052', 'rs-058', 'rs-068', 'rs-075'],
        recordTime: 15
      },
      {
        type: 'describe-image',
        label: 'Describe Image',
        instruction: 'Look at the image below. In 25 seconds, please speak into the microphone and describe in detail what the image is showing. You will have 40 seconds to give your response.',
        itemIds: ['di-002', 'di-008', 'di-012', 'di-018'],
        prepTime: 25,
        recordTime: 40
      },
      {
        type: 'retell-lecture',
        label: 'Re-tell Lecture',
        instruction: 'You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and re-tell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.',
        itemIds: ['rl-003', 'rl-008'],
        prepTime: 10,
        recordTime: 40
      },
      {
        type: 'answer-short-question',
        label: 'Answer Short Question',
        instruction: 'You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.',
        itemIds: ['asq-005', 'asq-015', 'asq-033', 'asq-045', 'asq-060', 'asq-085', 'asq-095', 'asq-110', 'asq-145', 'asq-180', 'asq-200', 'asq-217'],
        answerTime: 10
      }
    ]
  },
  {
    id: 3,
    name: 'Mock Test 3 — Full PTE Speaking',
    totalItems: 35,
    sections: [
      {
        type: 'read-aloud',
        label: 'Read Aloud',
        instruction: 'Look at the text below. In 35 seconds, you must read this text aloud as naturally and clearly as possible. You have 35 seconds to read aloud.',
        itemIds: ['ra-003', 'ra-009', 'ra-014', 'ra-021', 'ra-027', 'ra-033', 'ra-040'],
        prepTime: 35,
        recordTime: 35
      },
      {
        type: 'repeat-sentence',
        label: 'Repeat Sentence',
        instruction: 'You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.',
        itemIds: ['rs-005', 'rs-015', 'rs-025', 'rs-033', 'rs-042', 'rs-048', 'rs-056', 'rs-063', 'rs-072', 'rs-078'],
        recordTime: 15
      },
      {
        type: 'describe-image',
        label: 'Describe Image',
        instruction: 'Look at the image below. In 25 seconds, please speak into the microphone and describe in detail what the image is showing. You will have 40 seconds to give your response.',
        itemIds: ['di-003', 'di-009', 'di-014', 'di-020'],
        prepTime: 25,
        recordTime: 40
      },
      {
        type: 'retell-lecture',
        label: 'Re-tell Lecture',
        instruction: 'You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and re-tell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.',
        itemIds: ['rl-006', 'rl-012'],
        prepTime: 10,
        recordTime: 40
      },
      {
        type: 'answer-short-question',
        label: 'Answer Short Question',
        instruction: 'You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.',
        itemIds: ['asq-008', 'asq-020', 'asq-035', 'asq-050', 'asq-065', 'asq-088', 'asq-100', 'asq-115', 'asq-150', 'asq-185', 'asq-205', 'asq-210'],
        answerTime: 10
      }
    ]
  }
];
