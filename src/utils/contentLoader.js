// Medium content
import aiDevelopmentContent from '../pages/Medium/posts/content/ai-future-development.md?raw';

// Baeldung content  
import springTestingContent from '../pages/Baeldung/posts/content/spring-boot-testing-guide.md?raw';

// Substack content
import binarySearchContent from '../pages/Substack/posts/content/binary-search-deep-dive.md?raw';

const contentMap = {
  'Medium': {
    'ai-future-development.md': aiDevelopmentContent
  },
  'Baeldung': {
    'spring-boot-testing-guide.md': springTestingContent
  },
  'Substack': {
    'binary-search-deep-dive.md': binarySearchContent
  }
};

export const getArticleContent = (platform, filename) => {
  return contentMap[platform]?.[filename] || '';
};
