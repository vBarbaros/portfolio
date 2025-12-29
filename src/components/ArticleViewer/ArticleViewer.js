import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import './ArticleViewer.css';

// Simple content storage
const content = {
  'Medium': {
    'ai-future-development': `# The Future of AI in Software Development

Artificial Intelligence is rapidly transforming the software development landscape, bringing both opportunities and challenges for developers worldwide.

## Current State of AI in Development

Today's AI tools are already making significant impacts:

- **Code Generation**: Tools like GitHub Copilot and ChatGPT help generate boilerplate code
- **Bug Detection**: AI-powered static analysis tools identify potential issues
- **Testing**: Automated test generation and execution
- **Documentation**: AI assists in creating and maintaining documentation

## Emerging Trends

### 1. Intelligent Code Review
AI systems are becoming sophisticated enough to provide meaningful code review feedback, catching not just syntax errors but also design patterns and performance issues.

### 2. Automated Refactoring
Machine learning models can suggest and implement code refactoring to improve maintainability and performance.

### 3. Natural Language Programming
The future may see developers writing requirements in natural language, with AI translating them into executable code.

## Challenges Ahead

While AI brings tremendous potential, developers must navigate:

- **Quality Assurance**: Ensuring AI-generated code meets quality standards
- **Security Concerns**: AI-generated code may introduce vulnerabilities
- **Skill Evolution**: Developers need to adapt their skills to work alongside AI

## Conclusion

The integration of AI in software development is not about replacing developers but augmenting their capabilities. The future belongs to developers who can effectively collaborate with AI tools to build better software faster.

*Published on Medium - April 10, 2024*`
  },
  'Baeldung': {
    'spring-boot-testing-guide': `# Complete Guide to Testing in Spring Boot

Testing is a crucial aspect of Spring Boot development. This comprehensive guide covers all aspects of testing Spring Boot applications.

## Introduction

Spring Boot provides excellent support for testing with various annotations and utilities that make testing easier and more effective.

## Unit Testing

### Testing Service Layer

\`\`\`java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    
    @Mock
    private UserRepository userRepository;
    
    @InjectMocks
    private UserService userService;
    
    @Test
    void shouldCreateUser() {
        // Given
        User user = new User("john@example.com", "John Doe");
        when(userRepository.save(any(User.class))).thenReturn(user);
        
        // When
        User result = userService.createUser("john@example.com", "John Doe");
        
        // Then
        assertThat(result.getEmail()).isEqualTo("john@example.com");
        assertThat(result.getName()).isEqualTo("John Doe");
    }
}
\`\`\`

## Integration Testing

### Testing Web Layer

\`\`\`java
@WebMvcTest(UserController.class)
class UserControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;
    
    @Test
    void shouldReturnUser() throws Exception {
        // Given
        User user = new User("john@example.com", "John Doe");
        when(userService.findById(1L)).thenReturn(user);
        
        // When & Then
        mockMvc.perform(get("/api/users/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("john@example.com"))
                .andExpect(jsonPath("$.name").value("John Doe"));
    }
}
\`\`\`

## Test Slices

Spring Boot provides several test slice annotations:

- \`@WebMvcTest\` - For testing MVC controllers
- \`@DataJpaTest\` - For testing JPA repositories
- \`@JsonTest\` - For testing JSON serialization
- \`@WebFluxTest\` - For testing WebFlux controllers

## Best Practices

1. **Use appropriate test slices** to load only necessary components
2. **Mock external dependencies** to isolate units under test
3. **Write readable test names** that describe the scenario
4. **Follow AAA pattern** (Arrange, Act, Assert)
5. **Use TestContainers** for integration tests with real databases

## Conclusion

Effective testing in Spring Boot requires understanding the various testing tools and annotations available. By following best practices and using the right tools for each scenario, you can build robust and reliable applications.

*Published on Baeldung - March 15, 2024*`
  },
  'Substack': {
    'binary-search-deep-dive': `# Binary Search: Beyond the Basics

Binary search is one of the most fundamental algorithms in computer science, but there's much more to it than the basic implementation.

## The Classic Binary Search

\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
\`\`\`

## Advanced Variations

### 1. Find First Occurrence

When dealing with duplicate elements, you might need to find the first occurrence:

\`\`\`python
def find_first_occurrence(arr, target):
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = mid
            right = mid - 1  # Continue searching left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result
\`\`\`

### 2. Find Last Occurrence

Similarly, for finding the last occurrence:

\`\`\`python
def find_last_occurrence(arr, target):
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = mid
            left = mid + 1  # Continue searching right
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result
\`\`\`

## Real-World Applications

### 1. Database Indexing
Binary search is fundamental to B-tree indexes used in databases.

### 2. Memory Management
Operating systems use binary search for efficient memory allocation.

### 3. Graphics and Gaming
Used in collision detection and spatial partitioning algorithms.

## Performance Analysis

- **Time Complexity**: O(log n)
- **Space Complexity**: O(1) for iterative, O(log n) for recursive
- **Best Case**: O(1) when target is at middle
- **Worst Case**: O(log n) when target is not found

## Common Pitfalls

1. **Integer Overflow**: Use \`left + (right - left) // 2\` instead of \`(left + right) // 2\`
2. **Infinite Loops**: Ensure loop termination conditions are correct
3. **Off-by-One Errors**: Be careful with boundary conditions

## Conclusion

Binary search is more than just a simple algorithm. Understanding its variations and applications is crucial for solving complex problems efficiently. Master these patterns, and you'll be well-equipped to tackle a wide range of algorithmic challenges.

*Published on Substack - May 5, 2024*`
  }
};

const ArticleViewer = ({ platform }) => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        // Load the posts list
        let posts = [];
        if (platform === 'Medium') {
          const mediumPosts = await import('../../pages/Medium/posts/posts-list.json');
          posts = mediumPosts.default;
        } else if (platform === 'Baeldung') {
          const baeldungPosts = await import('../../pages/Baeldung/posts/posts-list.json');
          posts = baeldungPosts.default;
        } else if (platform === 'Substack') {
          const substackPosts = await import('../../pages/Substack/posts/posts-list.json');
          posts = substackPosts.default;
        }
        
        const foundArticle = posts.find(post => post.id === id);
        setArticle(foundArticle);
        setLoading(false);
      } catch (error) {
        console.error('Error loading article:', error);
        setLoading(false);
      }
    };

    loadArticle();
  }, [platform, id]);

  if (loading) {
    return <div className="loading">Loading article...</div>;
  }

  if (!article) {
    return (
      <div className="article-not-found">
        <h1>Article Not Found</h1>
        <Link to={`/${platform.toLowerCase()}`}>← Back to {platform}</Link>
      </div>
    );
  }

  if (!article.content) {
    window.location.href = article.externalLink;
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - Victor Barbarosh</title>
        <meta name="description" content={article.briefSummary} />
      </Helmet>
      
      <article className="article-viewer">
        <header className="article-header">
          <Link to={`/${platform.toLowerCase()}`} className="back-link">
            ← Back to {platform}
          </Link>
          <div className="article-meta">
            <time>{new Date(article.datePublished).toLocaleDateString()}</time>
            {article.category && (
              <span className={`category-badge ${article.category}`}>
                {article.category}
              </span>
            )}
          </div>
        </header>

        <div className="article-content">
          <ReactMarkdown>
            {content[platform]?.[id] || 'Content not found.'}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
};

export default ArticleViewer;
