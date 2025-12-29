# Binary Search: Beyond the Basics

Binary search is one of the most fundamental algorithms in computer science, but there's much more to it than the basic implementation.

## The Classic Binary Search

```python
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
```

## Advanced Variations

### 1. Find First Occurrence

When dealing with duplicate elements, you might need to find the first occurrence:

```python
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
```

### 2. Find Last Occurrence

Similarly, for finding the last occurrence:

```python
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
```

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

1. **Integer Overflow**: Use `left + (right - left) // 2` instead of `(left + right) // 2`
2. **Infinite Loops**: Ensure loop termination conditions are correct
3. **Off-by-One Errors**: Be careful with boundary conditions

## Conclusion

Binary search is more than just a simple algorithm. Understanding its variations and applications is crucial for solving complex problems efficiently. Master these patterns, and you'll be well-equipped to tackle a wide range of algorithmic challenges.

*Published on Substack - May 5, 2024*
