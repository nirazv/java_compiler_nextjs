"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2, Code } from "lucide-react"
import AdBanner from "@/components/ad-banner"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const blogPosts = {
  "java-basics-beginners": {
    title: "Java Basics for Beginners: Your First Steps into Programming",
    excerpt:
      "Learn the fundamental concepts of Java programming, from variables and data types to your first Hello World program.",
    author: "Java Team",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Beginner",
    tags: ["Java", "Beginner", "Tutorial"],
    content: `
# Java Basics for Beginners: Your First Steps into Programming

Welcome to the exciting world of Java programming! Whether you're completely new to programming or coming from another language, this comprehensive guide will help you understand the fundamentals of Java.

## What is Java?

Java is a powerful, object-oriented programming language that was developed by Sun Microsystems (now owned by Oracle) in 1995. It's designed to be platform-independent, meaning you can write code once and run it anywhere that has a Java Virtual Machine (JVM).

### Key Features of Java:
- **Platform Independent**: Write once, run anywhere (WORA)
- **Object-Oriented**: Everything in Java is an object
- **Secure**: Built-in security features
- **Robust**: Strong memory management and error handling
- **Multithreaded**: Support for concurrent programming

## Your First Java Program

Let's start with the classic "Hello, World!" program:

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

### Breaking Down the Code:

1. **public class HelloWorld**: Declares a public class named HelloWorld
2. **public static void main(String[] args)**: The main method where program execution begins
3. **System.out.println("Hello, World!");**: Prints the text to the console

## Variables and Data Types

Java has several built-in data types:

### Primitive Data Types:
- **int**: Integer numbers (e.g., 42, -17)
- **double**: Decimal numbers (e.g., 3.14, -2.5)
- **boolean**: True or false values
- **char**: Single characters (e.g., 'A', '5')
- **String**: Text (e.g., "Hello Java")

### Example:

\`\`\`java
public class Variables {
    public static void main(String[] args) {
        int age = 25;
        double height = 5.9;
        boolean isStudent = true;
        char grade = 'A';
        String name = "John Doe";
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
        System.out.println("Is Student: " + isStudent);
        System.out.println("Grade: " + grade);
    }
}
\`\`\`

## Control Structures

### If-Else Statements:

\`\`\`java
int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
\`\`\`

### Loops:

\`\`\`java
// For loop
for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}

// While loop
int count = 1;
while (count <= 5) {
    System.out.println("Count: " + count);
    count++;
}
\`\`\`

## Methods

Methods are reusable blocks of code:

\`\`\`java
public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("5 + 3 = " + result);
    }
}
\`\`\`

## Arrays

Arrays store multiple values of the same type:

\`\`\`java
public class ArrayExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Print all elements
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Element " + i + ": " + numbers[i]);
        }
        
        // Enhanced for loop
        for (int number : numbers) {
            System.out.println("Number: " + number);
        }
    }
}
\`\`\`

## Best Practices for Beginners

1. **Use meaningful variable names**: \`studentAge\` instead of \`a\`
2. **Follow naming conventions**: Classes start with uppercase, variables with lowercase
3. **Comment your code**: Explain what your code does
4. **Practice regularly**: The more you code, the better you become
5. **Start small**: Begin with simple programs and gradually increase complexity

## Next Steps

Now that you understand the basics, here are some topics to explore next:

- Object-Oriented Programming concepts
- Exception handling
- File I/O operations
- Collections framework
- GUI development with Swing or JavaFX

## Try It Yourself!

Use our online Java compiler to practice these concepts. Start with the Hello World program and experiment with different variables and control structures.

Remember, programming is learned by doing, so don't just read about these concepts—try them out!

## Conclusion

Java is a powerful and versatile programming language that's perfect for beginners. With its clear syntax and robust features, it provides an excellent foundation for learning programming concepts that apply to many other languages.

Keep practicing, stay curious, and don't be afraid to make mistakes—they're an essential part of the learning process!
    `,
  },
  "object-oriented-programming-java": {
    title: "Understanding Object-Oriented Programming in Java",
    excerpt:
      "Dive deep into OOP concepts including classes, objects, inheritance, polymorphism, and encapsulation with practical examples.",
    author: "Sarah Johnson",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Intermediate",
    tags: ["OOP", "Classes", "Objects"],
    content: `
# Understanding Object-Oriented Programming in Java

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects and classes. Java is fundamentally an object-oriented language, making it essential to understand these concepts to become proficient in Java development.

## The Four Pillars of OOP

### 1. Encapsulation

Encapsulation is the bundling of data and methods that operate on that data within a single unit (class). It also involves hiding the internal details of how an object works.

\`\`\`java
public class BankAccount {
    private double balance;  // Private field - encapsulated
    private String accountNumber;
    
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    // Public methods to access private data
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
}
\`\`\`

### 2. Inheritance

Inheritance allows a class to inherit properties and methods from another class, promoting code reuse.

\`\`\`java
// Base class (Parent)
public class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Derived class (Child)
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    public void bark() {
        System.out.println(name + " is barking");
    }
    
    // Override parent method
    @Override
    public void eat() {
        System.out.println(name + " the " + breed + " is eating dog food");
    }
}
\`\`\`

### 3. Polymorphism

Polymorphism allows objects of different types to be treated as objects of a common base type.

\`\`\`java
public class PolymorphismExample {
    public static void main(String[] args) {
        Animal[] animals = {
            new Dog("Buddy", 3, "Golden Retriever"),
            new Cat("Whiskers", 2, "Persian"),
            new Animal("Generic", 1)
        };
        
        // Polymorphism in action
        for (Animal animal : animals) {
            animal.eat();  // Calls appropriate eat() method
        }
    }
}
\`\`\`

### 4. Abstraction

Abstraction hides complex implementation details while showing only essential features.

\`\`\`java
// Abstract class
public abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Abstract method - must be implemented by subclasses
    public abstract double calculateArea();
    
    // Concrete method
    public void displayColor() {
        System.out.println("Color: " + color);
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

public class Rectangle extends Shape {
    private double width, height;
    
    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
}
\`\`\`

## Interfaces

Interfaces define contracts that classes must follow:

\`\`\`java
public interface Drawable {
    void draw();
    void resize(double factor);
}

public interface Colorable {
    void setColor(String color);
    String getColor();
}

public class Square implements Drawable, Colorable {
    private double side;
    private String color;
    
    public Square(double side, String color) {
        this.side = side;
        this.color = color;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " square with side " + side);
    }
    
    @Override
    public void resize(double factor) {
        side *= factor;
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
    }
    
    @Override
    public String getColor() {
        return color;
    }
}
\`\`\`

## Constructors and Method Overloading

\`\`\`java
public class Student {
    private String name;
    private int age;
    private String major;
    
    // Default constructor
    public Student() {
        this("Unknown", 0, "Undeclared");
    }
    
    // Constructor with name only
    public Student(String name) {
        this(name, 0, "Undeclared");
    }
    
    // Constructor with name and age
    public Student(String name, int age) {
        this(name, age, "Undeclared");
    }
    
    // Full constructor
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    
    // Method overloading
    public void study() {
        System.out.println(name + " is studying");
    }
    
    public void study(String subject) {
        System.out.println(name + " is studying " + subject);
    }
    
    public void study(String subject, int hours) {
        System.out.println(name + " is studying " + subject + " for " + hours + " hours");
    }
}
\`\`\`

## Static vs Instance Members

\`\`\`java
public class Counter {
    private static int totalCount = 0;  // Static variable - shared by all instances
    private int instanceCount = 0;      // Instance variable - unique to each object
    
    public Counter() {
        totalCount++;
        instanceCount++;
    }
    
    public static int getTotalCount() {  // Static method
        return totalCount;
    }
    
    public int getInstanceCount() {      // Instance method
        return instanceCount;
    }
    
    public void increment() {
        totalCount++;
        instanceCount++;
    }
}

// Usage
public class CounterTest {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        
        c1.increment();
        c2.increment();
        
        System.out.println("Total count: " + Counter.getTotalCount());  // 4
        System.out.println("C1 instance count: " + c1.getInstanceCount());  // 2
        System.out.println("C2 instance count: " + c2.getInstanceCount());  // 2
    }
}
\`\`\`

## Best Practices for OOP in Java

1. **Use proper encapsulation**: Make fields private and provide public getters/setters when needed
2. **Follow the Single Responsibility Principle**: Each class should have one reason to change
3. **Prefer composition over inheritance**: Use "has-a" relationships when appropriate
4. **Use interfaces to define contracts**: This makes your code more flexible and testable
5. **Override equals() and hashCode() together**: Important for collections and comparisons
6. **Use meaningful class and method names**: Code should be self-documenting

## Common OOP Design Patterns

### Singleton Pattern
\`\`\`java
public class DatabaseConnection {
    private static DatabaseConnection instance;
    
    private DatabaseConnection() {
        // Private constructor
    }
    
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
}
\`\`\`

### Factory Pattern
\`\`\`java
public class ShapeFactory {
    public static Shape createShape(String type) {
        switch (type.toLowerCase()) {
            case "circle":
                return new Circle("red", 5.0);
            case "rectangle":
                return new Rectangle("blue", 4.0, 6.0);
            default:
                throw new IllegalArgumentException("Unknown shape type: " + type);
        }
    }
}
\`\`\`

## Conclusion

Object-Oriented Programming is a powerful paradigm that helps organize and structure code in a logical, maintainable way. By understanding and applying these concepts—encapsulation, inheritance, polymorphism, and abstraction—you'll be able to write more robust and scalable Java applications.

Practice these concepts by creating your own classes and experimenting with different relationships between objects. The more you work with OOP principles, the more natural they'll become in your programming workflow.
    `,
  },
  "java-data-structures-guide": {
    title: "Complete Guide to Java Data Structures and Collections",
    excerpt:
      "Master ArrayList, HashMap, LinkedList, and other essential data structures with real-world examples and best practices.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Intermediate",
    tags: ["Data Structures", "Collections", "ArrayList"],
    content: `
# Complete Guide to Java Data Structures and Collections

Data structures are fundamental building blocks in programming that allow you to store, organize, and manipulate data efficiently. Java provides a rich Collections Framework that offers various data structures to suit different needs.

## Introduction to Java Collections Framework

The Java Collections Framework is a unified architecture for representing and manipulating collections. It includes:

- **Interfaces**: Abstract data types that represent collections
- **Implementations**: Concrete implementations of collection interfaces
- **Algorithms**: Methods that perform useful computations on collections

### Core Collection Interfaces

\`\`\`java
import java.util.*;

// The main collection interfaces hierarchy
Collection<E>
├── List<E>
├── Set<E>
└── Queue<E>

Map<E> // Separate hierarchy
\`\`\`

## ArrayList - Dynamic Arrays

ArrayList is a resizable array implementation that's one of the most commonly used collections.

### Basic ArrayList Operations

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ArrayListExample {
    public static void main(String[] args) {
        // Creating an ArrayList
        List<String> fruits = new ArrayList<>();
        
        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add(1, "Mango"); // Insert at index 1
        
        // Accessing elements
        System.out.println("First fruit: " + fruits.get(0));
        System.out.println("Size: " + fruits.size());
        
        // Iterating through ArrayList
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // Removing elements
        fruits.remove("Banana");
        fruits.remove(0); // Remove by index
        
        // Checking if element exists
        if (fruits.contains("Orange")) {
            System.out.println("Orange is in the list");
        }
        
        System.out.println("Final list: " + fruits);
    }
}
\`\`\`

### ArrayList Best Practices

\`\`\`java
public class ArrayListBestPractices {
    public static void main(String[] args) {
        // Specify initial capacity if you know the approximate size
        List<Integer> numbers = new ArrayList<>(100);
        
        // Use diamond operator (Java 7+)
        List<String> names = new ArrayList<>();
        
        // Initialize with values using Arrays.asList()
        List<String> colors = new ArrayList<>(Arrays.asList("Red", "Green", "Blue"));
        
        // Or use List.of() for immutable lists (Java 9+)
        List<String> immutableColors = List.of("Red", "Green", "Blue");
        
        // Convert to array
        String[] colorArray = colors.toArray(new String[0]);
        
        // Bulk operations
        List<String> moreColors = Arrays.asList("Yellow", "Purple");
        colors.addAll(moreColors);
        
        System.out.println("All colors: " + colors);
    }
}
\`\`\`

## LinkedList - Doubly Linked List

LinkedList implements both List and Deque interfaces, making it suitable for scenarios requiring frequent insertions and deletions.

\`\`\`java
import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<String> tasks = new LinkedList<>();
        
        // Adding elements
        tasks.add("Task 1");
        tasks.addFirst("Urgent Task");
        tasks.addLast("Final Task");
        
        // Queue operations
        tasks.offer("Queued Task"); // Add to end
        String firstTask = tasks.poll(); // Remove and return first
        
        // Stack operations
        tasks.push("Stack Task"); // Add to beginning
        String topTask = tasks.pop(); // Remove and return first
        
        // Accessing elements
        System.out.println("First: " + tasks.peekFirst());
        System.out.println("Last: " + tasks.peekLast());
        
        System.out.println("All tasks: " + tasks);
    }
}
\`\`\`

## HashMap - Key-Value Pairs

HashMap stores key-value pairs and provides O(1) average time complexity for basic operations.

\`\`\`java
import java.util.HashMap;
import java.util.Map;

public class HashMapExample {
    public static void main(String[] args) {
        Map<String, Integer> studentGrades = new HashMap<>();
        
        // Adding key-value pairs
        studentGrades.put("Alice", 95);
        studentGrades.put("Bob", 87);
        studentGrades.put("Charlie", 92);
        
        // Accessing values
        Integer aliceGrade = studentGrades.get("Alice");
        System.out.println("Alice's grade: " + aliceGrade);
        
        // Check if key exists
        if (studentGrades.containsKey("Bob")) {
            System.out.println("Bob's grade: " + studentGrades.get("Bob"));
        }
        
        // Iterating through HashMap
        for (Map.Entry<String, Integer> entry : studentGrades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Using Java 8 forEach
        studentGrades.forEach((name, grade) -> 
            System.out.println(name + " scored " + grade));
        
        // Useful methods
        System.out.println("All students: " + studentGrades.keySet());
        System.out.println("All grades: " + studentGrades.values());
        
        // Remove entry
        studentGrades.remove("Charlie");
        
        // Get or default
        Integer defaultGrade = studentGrades.getOrDefault("David", 0);
        System.out.println("David's grade (default): " + defaultGrade);
    }
}
\`\`\`

## HashSet - Unique Elements

HashSet stores unique elements and doesn't allow duplicates.

\`\`\`java
import java.util.HashSet;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {
        Set<String> uniqueWords = new HashSet<>();
        
        // Adding elements
        uniqueWords.add("Java");
        uniqueWords.add("Python");
        uniqueWords.add("JavaScript");
        uniqueWords.add("Java"); // Duplicate - won't be added
        
        System.out.println("Unique words: " + uniqueWords);
        System.out.println("Size: " + uniqueWords.size()); // Will be 3, not 4
        
        // Check if element exists
        if (uniqueWords.contains("Java")) {
            System.out.println("Java is in the set");
        }
        
        // Set operations
        Set<String> programmingLanguages = Set.of("Java", "C++", "Go");
        Set<String> webLanguages = Set.of("JavaScript", "TypeScript", "Java");
        
        // Union
        Set<String> allLanguages = new HashSet<>(programmingLanguages);
        allLanguages.addAll(webLanguages);
        System.out.println("Union: " + allLanguages);
        
        // Intersection
        Set<String> commonLanguages = new HashSet<>(programmingLanguages);
        commonLanguages.retainAll(webLanguages);
        System.out.println("Intersection: " + commonLanguages);
    }
}
\`\`\`

## TreeMap and TreeSet - Sorted Collections

TreeMap and TreeSet maintain elements in sorted order.

\`\`\`java
import java.util.TreeMap;
import java.util.TreeSet;

public class SortedCollectionsExample {
    public static void main(String[] args) {
        // TreeSet - sorted unique elements
        TreeSet<Integer> sortedNumbers = new TreeSet<>();
        sortedNumbers.add(5);
        sortedNumbers.add(2);
        sortedNumbers.add(8);
        sortedNumbers.add(1);
        
        System.out.println("Sorted numbers: " + sortedNumbers); // [1, 2, 5, 8]
        
        // TreeMap - sorted key-value pairs
        TreeMap<String, String> sortedMap = new TreeMap<>();
        sortedMap.put("Charlie", "Manager");
        sortedMap.put("Alice", "Developer");
        sortedMap.put("Bob", "Designer");
        
        System.out.println("Sorted by keys: " + sortedMap);
        
        // Navigation methods
        System.out.println("First key: " + sortedMap.firstKey());
        System.out.println("Last key: " + sortedMap.lastKey());
        System.out.println("Higher than 'Bob': " + sortedMap.higherKey("Bob"));
    }
}
\`\`\`

## Queue and Stack Operations

\`\`\`java
import java.util.*;

public class QueueStackExample {
    public static void main(String[] args) {
        // Queue using LinkedList
        Queue<String> queue = new LinkedList<>();
        queue.offer("First");
        queue.offer("Second");
        queue.offer("Third");
        
        System.out.println("Queue: " + queue);
        System.out.println("Poll: " + queue.poll()); // Removes "First"
        System.out.println("Peek: " + queue.peek()); // Shows "Second"
        
        // Stack using ArrayDeque (preferred over Stack class)
        Deque<String> stack = new ArrayDeque<>();
        stack.push("Bottom");
        stack.push("Middle");
        stack.push("Top");
        
        System.out.println("Stack: " + stack);
        System.out.println("Pop: " + stack.pop()); // Removes "Top"
        System.out.println("Peek: " + stack.peek()); // Shows "Middle"
        
        // PriorityQueue - elements ordered by priority
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        priorityQueue.offer(5);
        priorityQueue.offer(2);
        priorityQueue.offer(8);
        priorityQueue.offer(1);
        
        System.out.println("Priority Queue processing:");
        while (!priorityQueue.isEmpty()) {
            System.out.println(priorityQueue.poll()); // Will print in ascending order
        }
    }
}
\`\`\`

## Performance Comparison

| Operation | ArrayList | LinkedList | HashMap | HashSet | TreeMap | TreeSet |
|-----------|-----------|------------|---------|---------|---------|---------|
| Add | O(1) | O(1) | O(1) | O(1) | O(log n) | O(log n) |
| Remove | O(n) | O(1) | O(1) | O(1) | O(log n) | O(log n) |
| Search | O(n) | O(n) | O(1) | O(1) | O(log n) | O(log n) |
| Access | O(1) | O(n) | O(1) | N/A | O(log n) | N/A |

## Best Practices and Tips

### 1. Choose the Right Collection

\`\`\`java
// Use ArrayList for frequent random access
List<String> names = new ArrayList<>();

// Use LinkedList for frequent insertions/deletions
List<String> tasks = new LinkedList<>();

// Use HashMap for key-value mapping
Map<String, Integer> ages = new HashMap<>();

// Use HashSet for unique elements
Set<String> uniqueIds = new HashSet<>();

// Use TreeSet/TreeMap for sorted collections
Set<Integer> sortedNumbers = new TreeSet<>();
\`\`\`

### 2. Initialize with Capacity

\`\`\`java
// If you know approximate size, specify initial capacity
List<String> largeList = new ArrayList<>(1000);
Map<String, String> largeMap = new HashMap<>(1000);
\`\`\`

### 3. Use Generics

\`\`\`java
// Always use generics for type safety
List<String> strings = new ArrayList<>(); // Good
List rawList = new ArrayList(); // Avoid - raw types
\`\`\`

### 4. Prefer Interface Types

\`\`\`java
// Declare with interface type
List<String> list = new ArrayList<>(); // Good
ArrayList<String> list = new ArrayList<>(); // Less flexible
\`\`\`

## Real-World Example: Student Management System

\`\`\`java
import java.util.*;

class Student {
    private String name;
    private int id;
    private double gpa;
    
    public Student(String name, int id, double gpa) {
        this.name = name;
        this.id = id;
        this.gpa = gpa;
    }
    
    // Getters and toString method
    public String getName() { return name; }
    public int getId() { return id; }
    public double getGpa() { return gpa; }
    
    @Override
    public String toString() {
        return String.format("Student{name='%s', id=%d, gpa=%.2f}", name, id, gpa);
    }
}

public class StudentManagementSystem {
    private List<Student> students;
    private Map<Integer, Student> studentById;
    private Set<String> enrolledCourses;
    
    public StudentManagementSystem() {
        students = new ArrayList<>();
        studentById = new HashMap<>();
        enrolledCourses = new HashSet<>();
    }
    
    public void addStudent(Student student) {
        students.add(student);
        studentById.put(student.getId(), student);
    }
    
    public Student findStudentById(int id) {
        return studentById.get(id);
    }
    
    public List<Student> getTopStudents(int count) {
        return students.stream()
                .sorted((s1, s2) -> Double.compare(s2.getGpa(), s1.getGpa()))
                .limit(count)
                .collect(ArrayList::new, (list, student) -> list.add(student), (list1, list2) -> list1.addAll(list2));
    }
    
    public static void main(String[] args) {
        StudentManagementSystem sms = new StudentManagementSystem();
        
        sms.addStudent(new Student("Alice", 1, 3.8));
        sms.addStudent(new Student("Bob", 2, 3.5));
        sms.addStudent(new Student("Charlie", 3, 3.9));
        
        System.out.println("Student with ID 2: " + sms.findStudentById(2));
        System.out.println("Top 2 students: " + sms.getTopStudents(2));
    }
}
\`\`\`

## Conclusion

Java's Collections Framework provides powerful and efficient data structures for various use cases. Understanding when and how to use each collection type is crucial for writing efficient Java applications.

Key takeaways:
- Use ArrayList for general-purpose lists with random access
- Use LinkedList for frequent insertions/deletions
- Use HashMap for fast key-value lookups
- Use HashSet for unique element collections
- Use TreeMap/TreeSet when you need sorted collections
- Always consider performance characteristics when choosing collections

Practice with these data structures and experiment with different scenarios to become proficient in using Java collections effectively!
  `,
  },
  "exception-handling-java": {
    title: "Exception Handling in Java: Best Practices and Common Pitfalls",
    excerpt:
      "Learn how to handle errors gracefully in Java with try-catch blocks, custom exceptions, and proper error management.",
    author: "Alex Rodriguez",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Intermediate",
    tags: ["Exception Handling", "Error Management"],
    content: `
# Exception Handling in Java: Best Practices and Common Pitfalls

Exception handling is a crucial aspect of Java programming that allows you to gracefully handle runtime errors and unexpected situations. Proper exception handling makes your applications more robust and user-friendly.

## Understanding Exceptions

An exception is an event that occurs during program execution that disrupts the normal flow of instructions. Java uses a hierarchy of exception classes to categorize different types of errors.

### Exception Hierarchy

\`\`\`java
Throwable
├── Error (System errors - usually not handled)
└── Exception
    ├── RuntimeException (Unchecked exceptions)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── IllegalArgumentException
    │   └── NumberFormatException
    └── Checked Exceptions
        ├── IOException
        ├── SQLException
        └── ClassNotFoundException
\`\`\`

## Basic Try-Catch Syntax

\`\`\`java
public class BasicExceptionHandling {
    public static void main(String[] args) {
        try {
            // Code that might throw an exception
            int result = 10 / 0; // This will throw ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            // Handle the specific exception
            System.out.println("Error: Cannot divide by zero!");
            System.out.println("Exception message: " + e.getMessage());
        }
        
        System.out.println("Program continues...");
    }
}
\`\`\`

## Multiple Catch Blocks

\`\`\`java
import java.util.Scanner;

public class MultipleCatchExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("Enter array size: ");
            int size = Integer.parseInt(scanner.nextLine());
            
            int[] numbers = new int[size];
            
            System.out.print("Enter index to access: ");
            int index = Integer.parseInt(scanner.nextLine());
            
            System.out.print("Enter value to store: ");
            int value = Integer.parseInt(scanner.nextLine());
            
            numbers[index] = value;
            System.out.println("Value " + value + " stored at index " + index);
            
        } catch (NumberFormatException e) {
            System.out.println("Error: Please enter valid numbers only!");
        } catch (NegativeArraySizeException e) {
            System.out.println("Error: Array size cannot be negative!");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Index is out of bounds!");
        } catch (Exception e) {
            // Generic catch block - should be last
            System.out.println("An unexpected error occurred: " + e.getMessage());
        }
        
        scanner.close();
    }
}
\`\`\`

## Try-Catch-Finally

The finally block always executes, regardless of whether an exception occurs.

\`\`\`java
import java.io.*;

public class FinallyExample {
    public static void readFile(String filename) {
        FileReader file = null;
        BufferedReader reader = null;
        
        try {
            file = new FileReader(filename);
            reader = new BufferedReader(file);
            
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + filename);
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        } finally {
            // This block always executes
            try {
                if (reader != null) {
                    reader.close();
                }
                if (file != null) {
                    file.close();
                }
                System.out.println("Resources cleaned up");
            } catch (IOException e) {
                System.out.println("Error closing file: " + e.getMessage());
            }
        }
    }
    
    public static void main(String[] args) {
        readFile("example.txt");
    }
}
\`\`\`

## Try-With-Resources (Recommended)

Java 7 introduced try-with-resources for automatic resource management.

\`\`\`java
import java.io.*;

public class TryWithResourcesExample {
    public static void readFile(String filename) {
        // Resources are automatically closed
        try (FileReader file = new FileReader(filename);
             BufferedReader reader = new BufferedReader(file)) {
            
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + filename);
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
        // No need for finally block - resources auto-closed
    }
    
    public static void main(String[] args) {
        readFile("example.txt");
    }
}
\`\`\`

## Throwing Exceptions

\`\`\`java
public class ThrowingExceptions {
    
    public static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative: " + age);
        }
        if (age > 150) {
            throw new IllegalArgumentException("Age seems unrealistic: " + age);
        }
        System.out.println("Valid age: " + age);
    }
    
    public static void demonstrateThrows() throws IOException {
        // Method declares that it might throw IOException
        throw new IOException("Simulated IO error");
    }
    
    public static void main(String[] args) {
        // Testing validateAge
        try {
            validateAge(25);  // Valid
            validateAge(-5);  // Will throw exception
        } catch (IllegalArgumentException e) {
            System.out.println("Validation error: " + e.getMessage());
        }
        
        // Testing method that throws checked exception
        try {
            demonstrateThrows();
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        }
    }
}
\`\`\`

## Custom Exceptions

\`\`\`java
// Custom checked exception
class InsufficientFundsException extends Exception {
    private double amount;
    private double balance;
    
    public InsufficientFundsException(double amount, double balance) {
        super("Insufficient funds: Attempted to withdraw $" + amount + 
              " but balance is only $" + balance);
        this.amount = amount;
        this.balance = balance;
    }
    
    public double getAmount() { return amount; }
    public double getBalance() { return balance; }
}

// Custom unchecked exception
class InvalidAccountException extends RuntimeException {
    public InvalidAccountException(String accountNumber) {
        super("Invalid account number: " + accountNumber);
    }
}

class BankAccount {
    private String accountNumber;
    private double balance;
    
    public BankAccount(String accountNumber, double initialBalance) {
        if (accountNumber == null || accountNumber.trim().isEmpty()) {
            throw new InvalidAccountException(accountNumber);
        }
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount, balance);
        }
        balance -= amount;
        System.out.println("Withdrew $" + amount + ". New balance: $" + balance);
    }
    
    public double getBalance() { return balance; }
}

public class CustomExceptionExample {
    public static void main(String[] args) {
        try {
            BankAccount account = new BankAccount("12345", 1000.0);
            
            account.withdraw(500.0);  // Success
            account.withdraw(600.0);  // Will throw InsufficientFundsException
            
        } catch (InvalidAccountException e) {
            System.out.println("Account Error: " + e.getMessage());
        } catch (InsufficientFundsException e) {
            System.out.println("Transaction Error: " + e.getMessage());
            System.out.println("Available balance: $" + e.getBalance());
        }
    }
}
\`\`\`

## Exception Handling Best Practices

### 1. Be Specific with Catch Blocks

\`\`\`java
// Good - specific exception handling
try {
    // risky code
} catch (FileNotFoundException e) {
    // handle file not found
} catch (IOException e) {
    // handle other IO issues
} catch (Exception e) {
    // handle any other exceptions
}

// Avoid - too generic
try {
    // risky code
} catch (Exception e) {
    // handles everything - not recommended
}
\`\`\`

### 2. Don't Ignore Exceptions

\`\`\`java
// Bad - empty catch block
try {
    riskyOperation();
} catch (Exception e) {
    // Silent failure - very bad!
}

// Good - at least log the exception
try {
    riskyOperation();
} catch (Exception e) {
    System.err.println("Error in riskyOperation: " + e.getMessage());
    e.printStackTrace();
}
\`\`\`

### 3. Use Appropriate Exception Types

\`\`\`java
public class ValidationUtils {
    
    // Good - specific exception for specific error
    public static void validateEmail(String email) {
        if (email == null || !email.contains("@")) {
            throw new IllegalArgumentException("Invalid email format: " + email);
        }
    }
    
    // Good - custom exception for business logic
    public static void validateUserAge(int age) throws InvalidUserDataException {
        if (age < 13) {
            throw new InvalidUserDataException("User must be at least 13 years old");
        }
    }
}
\`\`\`

### 4. Clean Up Resources

\`\`\`java
// Preferred - try-with-resources
public void processFile(String filename) throws IOException {
    try (BufferedReader reader = Files.newBufferedReader(Paths.get(filename))) {
        // Process file
        reader.lines().forEach(System.out::println);
    } // Automatically closed
}

// Alternative - manual cleanup
public void processFileManually(String filename) throws IOException {
    BufferedReader reader = null;
    try {
        reader = Files.newBufferedReader(Paths.get(filename));
        reader.lines().forEach(System.out::println);
    } finally {
        if (reader != null) {
            reader.close();
        }
    }
}
\`\`\`

## Common Pitfalls to Avoid

### 1. Catching and Rethrowing Without Adding Value

\`\`\`java
// Bad - unnecessary catch and rethrow
public void badMethod() throws IOException {
    try {
        riskyIOOperation();
    } catch (IOException e) {
        throw e; // Adds no value
    }
}

// Better - let it propagate or add value
public void betterMethod() throws IOException {
    riskyIOOperation(); // Just let it propagate
}

// Or add context
public void methodWithContext() throws IOException {
    try {
        riskyIOOperation();
    } catch (IOException e) {
        throw new IOException("Failed to process user data", e);
    }
}
\`\`\`

### 2. Using Exceptions for Control Flow

\`\`\`java
// Bad - using exceptions for normal control flow
public boolean isValidNumber(String str) {
    try {
        Integer.parseInt(str);
        return true;
    } catch (NumberFormatException e) {
        return false;
    }
}

// Better - proper validation
public boolean isValidNumberBetter(String str) {
    if (str == null || str.trim().isEmpty()) {
        return false;
    }
    return str.matches("-?\\d+");
}
\`\`\`

### 3. Overly Broad Exception Handling

\`\`\`java
// Bad - catches too much
public void processData() {
    try {
        // Multiple operations that can fail differently
        readFile();
        parseData();
        saveToDatabase();
    } catch (Exception e) {
        // Can't tell what actually failed
        System.out.println("Something went wrong");
    }
}

// Better - specific handling
public void processDataBetter() {
    try {
        String data = readFile();
        Object parsed = parseData(data);
        saveToDatabase(parsed);
    } catch (IOException e) {
        System.out.println("File operation failed: " + e.getMessage());
    } catch (ParseException e) {
        System.out.println("Data parsing failed: " + e.getMessage());
    } catch (SQLException e) {
        System.out.println("Database operation failed: " + e.getMessage());
    }
}
\`\`\`

## Real-World Example: File Processing Service

\`\`\`java
import java.io.*;
import java.nio.file.*;
import java.util.List;

public class FileProcessingService {
    
    public static class FileProcessingException extends Exception {
        public FileProcessingException(String message, Throwable cause) {
            super(message, cause);
        }
    }
    
    public void processTextFile(String inputPath, String outputPath) 
            throws FileProcessingException {
        
        try {
            // Validate input
            Path input = Paths.get(inputPath);
            if (!Files.exists(input)) {
                throw new FileProcessingException(
                    "Input file does not exist: " + inputPath, null);
            }
            
            // Process file with automatic resource management
            try (BufferedReader reader = Files.newBufferedReader(input);
                 BufferedWriter writer = Files.newBufferedWriter(Paths.get(outputPath))) {
                
                String line;
                int lineCount = 0;
                
                while ((line = reader.readLine()) != null) {
                    lineCount++;
                    // Process each line (example: convert to uppercase)
                    String processedLine = line.toUpperCase();
                    writer.write(processedLine);
                    writer.newLine();
                }
                
                System.out.println("Successfully processed " + lineCount + " lines");
                
            }
            
        } catch (IOException e) {
            throw new FileProcessingException(
                "Error processing file from " + inputPath + " to " + outputPath, e);
        } catch (Exception e) {
            throw new FileProcessingException(
                "Unexpected error during file processing", e);
        }
    }
    
    public static void main(String[] args) {
        FileProcessingService service = new FileProcessingService();
        
        try {
            service.processTextFile("input.txt", "output.txt");
        } catch (FileProcessingException e) {
            System.err.println("File processing failed: " + e.getMessage());
            if (e.getCause() != null) {
                System.err.println("Caused by: " + e.getCause().getMessage());
            }
        }
    }
}
\`\`\`

## Conclusion

Effective exception handling is essential for building robust Java applications. Key principles to remember:

1. **Be specific** - catch specific exceptions rather than generic ones
2. **Don't ignore exceptions** - always handle or log them appropriately
3. **Use try-with-resources** for automatic resource management
4. **Create meaningful custom exceptions** for business logic errors
5. **Don't use exceptions for control flow** - they're for exceptional situations
6. **Clean up resources** properly to prevent memory leaks
7. **Add context** when rethrowing exceptions

By following these practices, you'll write more maintainable and reliable Java code that gracefully handles errors and provides meaningful feedback to users and developers.
  `,
  },
  "java-streams-lambda": {
    title: "Java 8 Streams and Lambda Expressions: Modern Java Programming",
    excerpt:
      "Explore functional programming in Java with streams, lambda expressions, and method references for cleaner, more efficient code.",
    author: "Emma Davis",
    date: "2024-01-05",
    readTime: "14 min read",
    category: "Advanced",
    tags: ["Java 8", "Streams", "Lambda"],
    content: `
# Java 8 Streams and Lambda Expressions: Modern Java Programming

Java 8 introduced revolutionary features that transformed how we write Java code. Lambda expressions and the Stream API brought functional programming concepts to Java, enabling more concise, readable, and efficient code.

## Lambda Expressions

Lambda expressions provide a concise way to represent anonymous functions. They enable you to treat functionality as a method argument.

### Basic Lambda Syntax

\`\`\`java
// Traditional anonymous class
Runnable oldWay = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello from old way!");
    }
};

// Lambda expression
Runnable newWay = () -> System.out.println("Hello from lambda!");

// With parameters
Comparator<String> oldComparator = new Comparator<String>() {
    @Override
    public int compare(String s1, String s2) {
        return s1.compareTo(s2);
    }
};

// Lambda with parameters
Comparator<String> newComparator = (s1, s2) -> s1.compareTo(s2);

// Even shorter with method reference
Comparator<String> shortest = String::compareTo;
\`\`\`

### Lambda Expression Examples

\`\`\`java
import java.util.*;
import java.util.function.*;

public class LambdaExamples {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        
        // 1. No parameters
        Runnable task = () -> System.out.println("Task executed!");
        task.run();
        
        // 2. Single parameter (parentheses optional)
        Consumer<String> printer = name -> System.out.println("Hello, " + name);
        names.forEach(printer);
        
        // 3. Multiple parameters
        BinaryOperator<Integer> add = (a, b) -> a + b;
        System.out.println("5 + 3 = " + add.apply(5, 3));
        
        // 4. Block body
        Function<String, String> formatter = name -> {
            String formatted = name.toUpperCase();
            return "Mr./Ms. " + formatted;
        };
        
        names.stream()
             .map(formatter)
             .forEach(System.out::println);
        
        // 5. Predicate for filtering
        Predicate<String> startsWithA = name -> name.startsWith("A");
        names.stream()
             .filter(startsWithA)
             .forEach(System.out::println);
    }
}
\`\`\`

## Functional Interfaces

Functional interfaces are interfaces with exactly one abstract method. They can be used with lambda expressions.

\`\`\`java
// Custom functional interface
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
    
    // Default methods are allowed
    default void printResult(int a, int b) {
        System.out.println("Result: " + calculate(a, b));
    }
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        // Different implementations using lambdas
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;
        Calculator subtract = (a, b) -> a - b;
        
        // Using the calculators
        add.printResult(5, 3);      // Result: 8
        multiply.printResult(5, 3); // Result: 15
        subtract.printResult(5, 3); // Result: 2
        
        // Built-in functional interfaces
        Function<String, Integer> stringLength = String::length;
        Predicate<Integer> isEven = n -> n % 2 == 0;
        Consumer<String> print = System.out::println;
        Supplier<Double> random = Math::random;
        
        System.out.println("Length of 'Hello': " + stringLength.apply("Hello"));
        System.out.println("Is 4 even? " + isEven.test(4));
        print.accept("Printed using Consumer");
        System.out.println("Random number: " + random.get());
    }
}
\`\`\`

## Introduction to Streams

Streams provide a functional approach to processing collections of data. They allow you to express complex data processing queries in a declarative way.

### Basic Stream Operations

\`\`\`java
import java.util.*;
import java.util.stream.*;

public class BasicStreamOperations {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Filter even numbers and double them
        List<Integer> result = numbers.stream()
            .filter(n -> n % 2 == 0)    // Intermediate operation
            .map(n -> n * 2)            // Intermediate operation
            .collect(Collectors.toList()); // Terminal operation
        
        System.out.println("Even numbers doubled: " + result);
        
        // Find first number greater than 5
        Optional<Integer> firstGreaterThan5 = numbers.stream()
            .filter(n -> n > 5)
            .findFirst();
        
        firstGreaterThan5.ifPresent(n -> 
            System.out.println("First number > 5: " + n));
        
        // Sum of all numbers
        int sum = numbers.stream()
            .mapToInt(Integer::intValue)
            .sum();
        
        System.out.println("Sum: " + sum);
        
        // Count numbers greater than 5
        long count = numbers.stream()
            .filter(n -> n > 5)
            .count();
        
        System.out.println("Count > 5: " + count);
    }
}
\`\`\`

## Stream Creation

\`\`\`java
import java.util.stream.*;
import java.util.*;

public class StreamCreation {
    public static void main(String[] args) {
        // 1. From collections
        List<String> list = Arrays.asList("a", "b", "c");
        Stream<String> streamFromList = list.stream();
        
        // 2. From arrays
        String[] array = {"x", "y", "z"};
        Stream<String> streamFromArray = Arrays.stream(array);
        
        // 3. Using Stream.of()
        Stream<String> streamOf = Stream.of("one", "two", "three");
        
        // 4. Empty stream
        Stream<String> emptyStream = Stream.empty();
        
        // 5. Infinite streams
        Stream<Integer> infiniteStream = Stream.iterate(0, n -> n + 2);
        List<Integer> first10Even = infiniteStream
            .limit(10)
            .collect(Collectors.toList());
        System.out.println("First 10 even numbers: " + first10Even);
        
        // 6. Generate stream
        Stream<Double> randomNumbers = Stream.generate(Math::random);
        randomNumbers.limit(5).forEach(System.out::println);
        
        // 7. Range streams
        IntStream.range(1, 6)
            .forEach(System.out::print); // Prints: 12345
        System.out.println();
        
        IntStream.rangeClosed(1, 5)
            .forEach(System.out::print); // Prints: 12345
        System.out.println();
    }
}
\`\`\`

## Intermediate Operations

Intermediate operations return a new stream and are lazy (not executed until a terminal operation is called).

\`\`\`java
import java.util.*;
import java.util.stream.*;

public class IntermediateOperations {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("apple", "banana", "cherry", "date", "elderberry");
        
        // filter() - select elements based on predicate
        words.stream()
             .filter(word -> word.length() > 5)
             .forEach(System.out::println);
        
        // map() - transform elements
        words.stream()
             .map(String::toUpperCase)
             .forEach(System.out::println);
        
        // flatMap() - flatten nested structures
        List<List<String>> nestedList = Arrays.asList(
            Arrays.asList("a", "b"),
            Arrays.asList("c", "d"),
            Arrays.asList("e", "f")
        );
        
        nestedList.stream()
                  .flatMap(List::stream)
                  .forEach(System.out::println);
        
        // distinct() - remove duplicates
        Arrays.asList(1, 2, 2, 3, 3, 3, 4)
              .stream()
              .distinct()
              .forEach(System.out::println);
        
        // sorted() - sort elements
        words.stream()
             .sorted()
             .forEach(System.out::println);
        
        // Custom sorting
        words.stream()
             .sorted((w1, w2) -> Integer.compare(w1.length(), w2.length()))
             .forEach(System.out::println);
        
        // peek() - perform action without consuming stream
        List<String> result = words.stream()
            .filter(word -> word.startsWith("a"))
            .peek(word -> System.out.println("Filtered: " + word))
            .map(String::toUpperCase)
            .peek(word -> System.out.println("Mapped: " + word))
            .collect(Collectors.toList());
        
        // limit() and skip()
        words.stream()
             .skip(2)
             .limit(2)
             .forEach(System.out::println);
    }
}
\`\`\`

## Terminal Operations

Terminal operations produce a result or side effect and consume the stream.

\`\`\`java
import java.util.*;
import java.util.stream.*;

public class TerminalOperations {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // forEach() - perform action on each element
        numbers.stream()
               .filter(n -> n % 2 == 0)
               .forEach(System.out::println);
        
        // collect() - collect elements into collection
        List<Integer> evenNumbers = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        
        Set<Integer> oddNumbers = numbers.stream()
            .filter(n -> n % 2 == 1)
            .collect(Collectors.toSet());
        
        // reduce() - combine elements
        Optional<Integer> sum = numbers.stream()
            .reduce((a, b) -> a + b);
        sum.ifPresent(s -> System.out.println("Sum: " + s));
        
        // reduce with identity
        Integer product = numbers.stream()
            .reduce(1, (a, b) -> a * b);
        System.out.println("Product: " + product);
        
        // min() and max()
        Optional<Integer> min = numbers.stream().min(Integer::compareTo);
        Optional<Integer> max = numbers.stream().max(Integer::compareTo);
        
        min.ifPresent(m -> System.out.println("Min: " + m));
        max.ifPresent(m -> System.out.println("Max: " + m));
        
        // count()
        long evenCount = numbers.stream()
            .filter(n -> n % 2 == 0)
            .count();
        System.out.println("Even count: " + evenCount);
        
        // anyMatch(), allMatch(), noneMatch()
        boolean hasEven = numbers.stream().anyMatch(n -> n % 2 == 0);
        boolean allPositive = numbers.stream().allMatch(n -> n > 0);
        boolean noneNegative = numbers.stream().noneMatch(n -> n < 0);
        
        System.out.println("Has even: " + hasEven);
        System.out.println("All positive: " + allPositive);
        System.out.println("None negative: " + noneNegative);
        
        // findFirst() and findAny()
        Optional<Integer> first = numbers.stream()
            .filter(n -> n > 5)
            .findFirst();
        
        Optional<Integer> any = numbers.stream()
            .filter(n -> n > 5)
            .findAny();
        
        first.ifPresent(f -> System.out.println("First > 5: " + f));
        any.ifPresent(a -> System.out.println("Any > 5: " + a));
    }
}
\`\`\`

## Advanced Stream Operations

\`\`\`java
import java.util.*;
import java.util.stream.*;

class Person {
    private String name;
    private int age;
    private String city;
    
    public Person(String name, int age, String city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getCity() { return city; }
    
    @Override
    public String toString() {
        return String.format("Person{name='%s', age=%d, city='%s'}", name, age, city);
    }
}

public class AdvancedStreamOperations {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Alice", 25, "New York"),
            new Person("Bob", 30, "London"),
            new Person("Charlie", 35, "New York"),
            new Person("David", 28, "London"),
            new Person("Eve", 32, "Paris")
        );
        
        // Grouping by city
        Map<String, List<Person>> peopleByCity = people.stream()
            .collect(Collectors.groupingBy(Person::getCity));
        
        peopleByCity.forEach((city, persons) -> {
            System.out.println(city + ": " + persons.size() + " people");
        });
        
        // Partitioning by age
        Map<Boolean, List<Person>> partitionedByAge = people.stream()
            .collect(Collectors.partitioningBy(p -> p.getAge() >= 30));
        
        System.out.println("30 or older: " + partitionedByAge.get(true).size());
        System.out.println("Under 30: " + partitionedByAge.get(false).size());
        
        // Collecting to Map
        Map<String, Integer> nameToAge = people.stream()
            .collect(Collectors.toMap(Person::getName, Person::getAge));
        
        nameToAge.forEach((name, age) -> 
            System.out.println(name + " is " + age + " years old"));
        
        // Statistics
        IntSummaryStatistics ageStats = people.stream()
            .mapToInt(Person::getAge)
            .summaryStatistics();
        
        System.out.println("Age statistics: " + ageStats);
        
        // Custom collector - joining names
        String allNames = people.stream()
            .map(Person::getName)
            .collect(Collectors.joining(", ", "[", "]"));
        
        System.out.println("All names: " + allNames);
        
        // Downstream collectors
        Map<String, Double> averageAgeByCity = people.stream()
            .collect(Collectors.groupingBy(
                Person::getCity,
                Collectors.averagingInt(Person::getAge)
            ));
        
        averageAgeByCity.forEach((city, avgAge) ->
            System.out.println("Average age in " + city + ": " + avgAge));
    }
}
\`\`\`

## Method References

Method references provide a shorthand for lambda expressions that call existing methods.

\`\`\`java
import java.util.*;
import java.util.function.*;

public class MethodReferences {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("apple", "banana", "cherry");
        
        // 1. Static method reference
        // Lambda: x -> Integer.parseInt(x)
        Function<String, Integer> parseInt = Integer::parseInt;
        
        // 2. Instance method reference on particular object
        String prefix = "Hello, ";
        // Lambda: x -> prefix.concat(x)
        Function<String, String> addPrefix = prefix::concat;
        
        // 3. Instance method reference on arbitrary object
        // Lambda: (str, suffix) -> str.concat(suffix)
        BinaryOperator<String> concat = String::concat;
        
        // 4. Constructor reference
        // Lambda: () -> new ArrayList<>()
        Supplier<List<String>> listSupplier = ArrayList::new;
        
        // Lambda: x -> new ArrayList<>(x)
        Function<Collection<String>, List<String>> listFromCollection = ArrayList::new;
        
        // Examples in action
        words.stream()
             .map(String::toUpperCase)  // Method reference
             .forEach(System.out::println);
        
        words.stream()
             .map(addPrefix)
             .forEach(System.out::println);
        
        // Sorting with method reference
        List<String> sortedWords = words.stream()
            .sorted(String::compareToIgnoreCase)
            .collect(Collectors.toList());
        
        System.out.println("Sorted: " + sortedWords);
    }
}
\`\`\`

## Parallel Streams

Parallel streams can improve performance for CPU-intensive operations on large datasets.

\`\`\`java
import java.util.*;
import java.util.stream.*;

public class ParallelStreams {
    public static void main(String[] args) {
        List<Integer> largeList = IntStream.rangeClosed(1, 1000000)
            .boxed()
            .collect(Collectors.toList());
        
        // Sequential processing
        long startTime = System.currentTimeMillis();
        long sequentialSum = largeList.stream()
            .mapToLong(Integer::longValue)
            .sum();
        long sequentialTime = System.currentTimeMillis() - startTime;
        
        // Parallel processing
        startTime = System.currentTimeMillis();
        long parallelSum = largeList.parallelStream()
            .mapToLong(Integer::longValue)
            .sum();
        long parallelTime = System.currentTimeMillis() - startTime;
        
        System.out.println("Sequential sum: " + sequentialSum + " (Time: " + sequentialTime + "ms)");
        System.out.println("Parallel sum: " + parallelSum + " (Time: " + parallelTime + "ms)");
        
        // Be careful with parallel streams and stateful operations
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        
        // This might not preserve order in parallel
        List<Integer> doubled = numbers.parallelStream()
            .map(n -> n * 2)
            .collect(Collectors.toList());
        
        System.out.println("Doubled: " + doubled);
        
        // Use forEachOrdered to maintain order
        System.out.print("Ordered output: ");
        numbers.parallelStream()
               .map(n -> n * 2)
               .forEachOrdered(n -> System.out.print(n + " "));
        System.out.println();
    }
}
\`\`\`

## Real-World Example: Data Processing Pipeline

\`\`\`java
import java.util.*;
import java.util.stream.*;

class Transaction {
    private String id;
    private double amount;
    private String type;
    private String currency;
    private Date date;
    
    public Transaction(String id, double amount, String type, String currency) {
        this.id = id;
        this.amount = amount;
        this.type = type;
        this.currency = currency;
        this.date = new Date();
    }
    
    // Getters
    public String getId() { return id; }
    public double getAmount() { return amount; }
    public String getType() { return type; }
    public String getCurrency() { return currency; }
    public Date getDate() { return date; }
    
    @Override
    public String toString() {
        return String.format("Transaction{id='%s', amount=%.2f, type='%s', currency='%s'}", 
                           id, amount, type, currency);
    }
}

public class TransactionProcessor {
    public static void main(String[] args) {
        List<Transaction> transactions = Arrays.asList(
            new Transaction("T001", 1000.0, "CREDIT", "USD"),
            new Transaction("T002", 500.0, "DEBIT", "USD"),
            new Transaction("T003", 750.0, "CREDIT", "EUR"),
            new Transaction("T004", 200.0, "DEBIT", "USD"),
            new Transaction("T005", 1200.0, "CREDIT", "EUR"),
            new Transaction("T006", 300.0, "DEBIT", "GBP"),
            new Transaction("T007", 800.0, "CREDIT", "USD")
        );
        
        System.out.println("=== Transaction Analysis ===");
        
        // 1. Total amount by currency
        Map<String, Double> totalByCurrency = transactions.stream()
            .collect(Collectors.groupingBy(
                Transaction::getCurrency,
                Collectors.summingDouble(Transaction::getAmount)
            ));
        
        System.out.println("Total by currency:");
        totalByCurrency.forEach((currency, total) ->
            System.out.printf("%s: %.2f%n", currency, total));
        
        // 2. High-value credit transactions
        List<Transaction> highValueCredits = transactions.stream()
            .filter(t -> "CREDIT".equals(t.getType()))
            .filter(t -> t.getAmount() > 700)
            .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
            .collect(Collectors.toList());
        
        System.out.println("\nHigh-value credit transactions:");
        highValueCredits.forEach(System.out::println);
        
        // 3. Transaction statistics by type
        Map<String, IntSummaryStatistics> statsByType = transactions.stream()
            .collect(Collectors.groupingBy(
                Transaction::getType,
                Collectors.summarizingInt(t -> (int) t.getAmount())
            ));
        
        System.out.println("\nStatistics by transaction type:");
        statsByType.forEach((type, stats) ->
            System.out.printf("%s: Count=%d, Sum=%d, Avg=%.2f%n",
                type, stats.getCount(), stats.getSum(), stats.getAverage()));
        
        // 4. Find largest transaction per currency
        Map<String, Optional<Transaction>> largestPerCurrency = transactions.stream()
            .collect(Collectors.groupingBy(
                Transaction::getCurrency,
                Collectors.maxBy(Comparator.comparing(Transaction::getAmount))
            ));
        
        System.out.println("\nLargest transaction per currency:");
        largestPerCurrency.forEach((currency, optTransaction) ->
            optTransaction.ifPresent(t ->
                System.out.printf("%s: %s%n", currency, t)));
        
        // 5. Complex filtering and transformation
        String report = transactions.stream()
            .filter(t -> t.getAmount() > 500)
            .map(t -> String.format("%s: %s %.2f %s",
                t.getId(), t.getType(), t.getAmount(), t.getCurrency()))
            .collect(Collectors.joining("\n", "High-Value Transactions:\n", "\n"));
        
        System.out.println(report);
    }
}
\`\`\`

## Best Practices

### 1. Prefer Method References When Possible

\`\`\`java
// Less readable
list.stream().map(s -> s.toUpperCase()).collect(Collectors.toList());

// More readable
list.stream().map(String::toUpperCase).collect(Collectors.toList());
\`\`\`

### 2. Use Appropriate Stream Types

\`\`\`java
// Use primitive streams for better performance
IntStream.range(1, 1000)
         .filter(n -> n % 2 == 0)
         .sum();

// Instead of
Stream.iterate(1, n -> n + 1)
      .limit(999)
      .filter(n -> n % 2 == 0)
      .mapToInt(Integer::intValue)
      .sum();
\`\`\`

### 3. Be Careful with Parallel Streams

\`\`\`java
// Good for CPU-intensive operations on large datasets
largeList.parallelStream()
         .map(this::expensiveOperation)
         .collect(Collectors.toList());

// Avoid for small datasets or I/O operations
smallList.stream() // Use sequential stream
         .map(this::simpleOperation)
         .collect(Collectors.toList());
\`\`\`

## Conclusion

Java 8's lambda expressions and Stream API revolutionized Java programming by:

1. **Enabling functional programming** - treating functions as first-class citizens
2. **Improving code readability** - more declarative and less boilerplate
3. **Enhancing performance** - lazy evaluation and parallel processing capabilities
4. **Simplifying collection processing** - powerful operations for filtering, mapping, and reducing

Key takeaways:
- Use lambda expressions to write more concise code
- Leverage streams for complex data processing pipelines
- Understand the difference between intermediate and terminal operations
- Choose the right collectors for your use case
- Be mindful of when to use parallel streams
- Prefer method references when they improve readability

These features make Java code more expressive and maintainable while providing powerful tools for data processing and functional programming patterns.
  `,
  },
  "debugging-java-code": {
    title: "Debugging Java Code: Tools and Techniques for Finding Bugs",
    excerpt:
      "Master debugging techniques, learn to use debugging tools, and discover common bug patterns in Java applications.",
    author: "David Wilson",
    date: "2024-01-03",
    readTime: "11 min read",
    category: "Intermediate",
    tags: ["Debugging", "Tools", "Best Practices"],
    content: `
# Debugging Java Code: Tools and Techniques for Finding Bugs

Debugging is an essential skill for every Java developer. It's the process of finding and fixing bugs in your code. This guide will teach you various debugging techniques, tools, and best practices to become more efficient at identifying and resolving issues.

## Understanding Common Bug Types

Before diving into debugging techniques, let's understand the common types of bugs you'll encounter:

### 1. Syntax Errors
These are caught by the compiler and prevent your code from compiling.

\`\`\`java
public class SyntaxErrorExample {
    public static void main(String[] args) {
        System.out.println("Hello World") // Missing semicolon
        int x = 5
        String name = "John"; // Missing semicolon above
    }
}
\`\`\`

### 2. Runtime Errors
These occur during program execution and cause the program to crash.

\`\`\`java
public class RuntimeErrorExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException
        
        String text = null;
        System.out.println(text.length()); // NullPointerException
        
        int result = 10 / 0; // ArithmeticException
    }
}
\`\`\`

### 3. Logic Errors
These are the trickiest - the code runs but produces incorrect results.

\`\`\`java
public class LogicErrorExample {
    public static void main(String[] args) {
        // Bug: Should be <= not <
        for (int i = 1; i < 10; i++) { // Missing i = 10
            System.out.println(i);
        }
        
        // Bug: Wrong condition
        int age = 25;
        if (age > 18 && age < 65) { // Should be >= 18
            System.out.println("Working age");
        }
    }
}
\`\`\`

## Basic Debugging Techniques

### 1. Print Statement Debugging

The simplest debugging technique - adding print statements to track program flow.

\`\`\`java
public class PrintDebugging {
    public static int calculateSum(int[] numbers) {
        System.out.println("calculateSum called with array length: " + numbers.length);
        
        int sum = 0;
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Processing index " + i + ", value: " + numbers[i]);
            sum += numbers[i];
            System.out.println("Current sum: " + sum);
        }
        
        System.out.println("Final sum: " + sum);
        return sum;
    }
    
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int result = calculateSum(numbers);
        System.out.println("Result: " + result);
    }
}
\`\`\`

### 2. Using Assertions

Assertions help verify assumptions about your code during development.

\`\`\`java
public class AssertionExample {
    public static double divide(double a, double b) {
        // Assert that divisor is not zero
        assert b != 0 : "Division by zero is not allowed";
        
        double result = a / b;
        
        // Assert post-condition
        assert !Double.isInfinite(result) : "Result should not be infinite";
        
        return result;
    }
    
    public static void main(String[] args) {
        // Enable assertions with -ea flag when running
        System.out.println(divide(10, 2)); // Works fine
        System.out.println(divide(10, 0)); // Assertion error
    }
}
\`\`\`

### 3. Logging

Professional debugging uses logging frameworks instead of print statements.

\`\`\`java
import java.util.logging.*;

public class LoggingExample {
    private static final Logger logger = Logger.getLogger(LoggingExample.class.getName());
    
    public static void processUser(String username, int age) {
        logger.info("Processing user: " + username);
        
        if (username == null || username.trim().isEmpty()) {
            logger.warning("Invalid username provided: " + username);
            return;
        }
        
        if (age < 0 || age > 150) {
            logger.warning("Suspicious age value: " + age + " for user: " + username);
        }
        
        try {
            // Simulate some processing
            Thread.sleep(100);
            logger.info("Successfully processed user: " + username);
        } catch (InterruptedException e) {
            logger.severe("Processing interrupted for user: " + username);
            Thread.currentThread().interrupt();
        }
    }
    
    public static void main(String[] args) {
        // Set logging level
        logger.setLevel(Level.INFO);
        
        processUser("Alice", 25);
        processUser("", 30);
        processUser("Bob", -5);
        processUser("Charlie", 200);
    }
}
\`\`\`

## IDE Debugging Tools

Modern IDEs provide powerful debugging capabilities. Here's how to use them effectively:

### Setting Breakpoints

\`\`\`java
public class BreakpointExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        
        for (int i = 0; i < numbers.length; i++) {
            // Set breakpoint here to examine variables
            sum += numbers[i];
            
            // Conditional breakpoint: only stop when sum > 6
            if (sum > 10) {
                System.out.println("Sum exceeded 10");
            }
        }
        
        System.out.println("Final sum: " + sum);
    }
}
\`\`\`

### Step-by-Step Execution

When debugging, you can:
- **Step Over (F8)**: Execute current line and move to next
- **Step Into (F7)**: Enter method calls
- **Step Out (Shift+F8)**: Exit current method
- **Resume (F9)**: Continue execution until next breakpoint

### Watching Variables

\`\`\`java
public class VariableWatchExample {
    private static int counter = 0;
    
    public static void processItems(String[] items) {
        // Watch these variables during debugging:
        // - items.length
        // - counter
        // - currentItem
        
        for (String item : items) {
            counter++;
            String currentItem = item.toUpperCase();
            
            if (currentItem.startsWith("A")) {
                System.out.println("Found A-item: " + currentItem);
            }
        }
    }
    
    public static void main(String[] args) {
        String[] items = {"apple", "banana", "avocado", "cherry"};
        processItems(items);
    }
}
\`\`\`

## Advanced Debugging Techniques

### 1. Exception Breakpoints

Set breakpoints that trigger when specific exceptions are thrown:

\`\`\`java
public class ExceptionDebugging {
    public static void riskyMethod(String input) {
        try {
            // This might throw various exceptions
            int length = input.length(); // NullPointerException
            int number = Integer.parseInt(input); // NumberFormatException
            int result = 100 / number; // ArithmeticException
            
            System.out.println("Result: " + result);
        } catch (Exception e) {
            // Set exception breakpoint for specific exception types
            System.out.println("Error: " + e.getMessage());
            throw e; // Re-throw to trigger exception breakpoint
        }
    }
    
    public static void main(String[] args) {
        try {
            riskyMethod(null);
            riskyMethod("abc");
            riskyMethod("0");
        } catch (Exception e) {
            System.out.println("Caught: " + e.getClass().getSimpleName());
        }
    }
}
\`\`\`

### 2. Remote Debugging

For debugging applications running on different machines:

\`\`\`java
// Start your application with these JVM arguments:
// -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005

public class RemoteDebuggingExample {
    public static void main(String[] args) {
        System.out.println("Application started - ready for remote debugging");
        
        for (int i = 0; i < 10; i++) {
            processData(i);
            try {
                Thread.sleep(2000); // Give time to attach debugger
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
    
    private static void processData(int value) {
        // Set breakpoint here for remote debugging
        int result = value * 2;
        System.out.println("Processed: " + value + " -> " + result);
    }
}
\`\`\`

### 3. Memory Debugging

Detecting memory leaks and analyzing heap usage:

\`\`\`java
import java.util.*;

public class MemoryDebuggingExample {
    private static List<String> memoryLeak = new ArrayList<>();
    
    public static void simulateMemoryLeak() {
        // This creates a memory leak
        for (int i = 0; i < 1000; i++) {
            memoryLeak.add("String " + i + " " + new Date());
        }
        
        // Memory is never released because list keeps growing
        System.out.println("Added 1000 strings, total size: " + memoryLeak.size());
    }
    
    public static void properMemoryManagement() {
        List<String> localList = new ArrayList<>();
        
        for (int i = 0; i < 1000; i++) {
            localList.add("String " + i);
        }
        
        // Process the list
        localList.stream()
                 .filter(s -> s.contains("5"))
                 .forEach(System.out::println);
        
        // List goes out of scope and can be garbage collected
    }
    
    public static void main(String[] args) {
        // Monitor memory usage in IDE or with tools like VisualVM
        Runtime runtime = Runtime.getRuntime();
        
        for (int i = 0; i < 10; i++) {
            simulateMemoryLeak();
            
            long usedMemory = runtime.totalMemory() - runtime.freeMemory();
            System.out.println("Used memory: " + usedMemory / 1024 / 1024 + " MB");
        }
    }
}
\`\`\`

## Common Debugging Scenarios

### 1. NullPointerException

\`\`\`java
public class NullPointerDebugging {
    private String name;
    private List<String> items;
    
    public NullPointerDebugging(String name) {
        this.name = name;
        // Bug: forgot to initialize items
        // this.items = new ArrayList<>();
    }
    
    public void addItem(String item) {
        // Debug: Check if items is null before using
        System.out.println("Items list: " + items);
        System.out.println("Adding item: " + item);
        
        if (items == null) {
            System.out.println("ERROR: items list is null!");
            items = new ArrayList<>(); // Fix the issue
        }
        
        items.add(item);
    }
    
    public void printItems() {
        if (items != null && !items.isEmpty()) {
            items.forEach(System.out::println);
        } else {
            System.out.println("No items to display");
        }
    }
    
    public static void main(String[] args) {
        NullPointerDebugging example = new NullPointerDebugging("Test");
        example.addItem("Item 1"); // This would cause NPE without the fix
        example.printItems();
    }
}
\`\`\`

### 2. Infinite Loops

\`\`\`java
public class InfiniteLoopDebugging {
    public static void findElement(int[] array, int target) {
        int index = 0;
        
        // Bug: condition should be index < array.length
        while (index <= array.length) { // This can cause infinite loop
            System.out.println("Checking index: " + index);
            
            if (index >= array.length) {
                System.out.println("Element not found");
                break; // Prevent array out of bounds
            }
            
            if (array[index] == target) {
                System.out.println("Found " + target + " at index " + index);
                return;
            }
            
            index++; // Make sure this is always executed
        }
    }
    
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        findElement(numbers, 3);
        findElement(numbers, 10); // Not found case
    }
}
\`\`\`

### 3. Concurrency Issues

\`\`\`java
import java.util.concurrent.*;

public class ConcurrencyDebugging {
    private int counter = 0;
    private final Object lock = new Object();
    
    public void incrementUnsafe() {
        // Bug: Not thread-safe
        counter++;
    }
    
    public void incrementSafe() {
        synchronized (lock) {
            counter++;
        }
    }
    
    public void demonstrateConcurrencyIssue() throws InterruptedException {
        ExecutorService executor = Executors.newFixedThreadPool(10);
        
        // Reset counter
        counter = 0;
        
        // Submit 1000 increment tasks
        for (int i = 0; i < 1000; i++) {
            executor.submit(this::incrementUnsafe);
        }
        
        executor.shutdown();
        executor.awaitTermination(1, TimeUnit.SECONDS);
        
        System.out.println("Unsafe counter result: " + counter); // Likely < 1000
        
        // Now test with safe version
        counter = 0;
        executor = Executors.newFixedThreadPool(10);
        
        for (int i = 0; i < 1000; i++) {
            executor.submit(this::incrementSafe);
        }
        
        executor.shutdown();
        executor.awaitTermination(1, TimeUnit.SECONDS);
        
        System.out.println("Safe counter result: " + counter); // Should be 1000
    }
    
    public static void main(String[] args) throws InterruptedException {
        ConcurrencyDebugging example = new ConcurrencyDebugging();
        example.demonstrateConcurrencyIssue();
    }
}
\`\`\`

## Debugging Best Practices

### 1. Reproduce the Bug Consistently

\`\`\`java
public class BugReproduction {
    private static Random random = new Random(42); // Fixed seed for reproducibility
    
    public static void problematicMethod() {
        // Make the bug reproducible by using fixed seed
        int randomValue = random.nextInt(100);
        
        if (randomValue > 95) { // Rare condition
            throw new RuntimeException("Rare bug occurred with value: " + randomValue);
        }
        
        System.out.println("Method executed successfully with value: " + randomValue);
    }
    
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            try {
                problematicMethod();
            } catch (RuntimeException e) {
                System.out.println("Bug reproduced on iteration " + i + ": " + e.getMessage());
                break;
            }
        }
    }
}
\`\`\`

### 2. Use Defensive Programming

\`\`\`java
public class DefensiveProgramming {
    public static double calculateAverage(int[] numbers) {
        // Validate input
        if (numbers == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }
        
        if (numbers.length == 0) {
            throw new IllegalArgumentException("Array cannot be empty");
        }
        
        // Check for overflow
        long sum = 0;
        for (int number : numbers) {
            sum += number;
            if (sum > Integer.MAX_VALUE || sum < Integer.MIN_VALUE) {
                throw new ArithmeticException("Sum overflow detected");
            }
        }
        
        return (double) sum / numbers.length;
    }
    
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3, 4, 5};
            System.out.println("Average: " + calculateAverage(numbers));
            
            // Test edge cases
            calculateAverage(null); // Should throw exception
        } catch (Exception e) {
            System.out.println("Caught expected exception: " + e.getMessage());
        }
    }
}
\`\`\`

### 3. Write Testable Code

\`\`\`java
public class TestableCode {
    // Bad: Hard to test due to dependencies
    public void processFilesBad(String directory) {
        java.io.File dir = new java.io.File(directory);
        java.io.File[] files = dir.listFiles();
        
        for (java.io.File file : files) {
            System.out.println("Processing: " + file.getName());
            // Process file...
        }
    }
    
    // Good: Testable with dependency injection
    public void processFiles(java.io.File[] files) {
        if (files == null) {
            System.out.println("No files to process");
            return;
        }
        
        for (java.io.File file : files) {
            processFile(file);
        }
    }
    
    private void processFile(java.io.File file) {
        System.out.println("Processing: " + file.getName());
        // Process individual file...
    }
    
    public static void main(String[] args) {
        TestableCode processor = new TestableCode();
        
        // Easy to test with mock files
        java.io.File[] testFiles = {
            new java.io.File("test1.txt"),
            new java.io.File("test2.txt")
        };
        
        processor.processFiles(testFiles);
    }
}
\`\`\`

## Debugging Tools and Utilities

### 1. Stack Trace Analysis

\`\`\`java
public class StackTraceAnalysis {
    public static void methodA() {
        methodB();
    }
    
    public static void methodB() {
        methodC();
    }
    
    public static void methodC() {
        // Intentionally cause an exception
        String str = null;
        str.length(); // NullPointerException
    }
    
    public static void main(String[] args) {
        try {
            methodA();
        } catch (Exception e) {
            System.out.println("Exception caught: " + e.getMessage());
            System.out.println("\nStack trace:");
            e.printStackTrace();
            
            System.out.println("\nAnalyzing stack trace:");
            StackTraceElement[] stackTrace = e.getStackTrace();
            for (int i = 0; i < stackTrace.length; i++) {
                StackTraceElement element = stackTrace[i];
                System.out.printf("Frame %d: %s.%s() line %d%n",
                    i, element.getClassName(), element.getMethodName(), element.getLineNumber());
            }
        }
    }
}
\`\`\`

### 2. Performance Debugging

\`\`\`java
public class PerformanceDebugging {
    public static void inefficientMethod() {
        // Inefficient string concatenation
        String result = "";
        for (int i = 0; i < 10000; i++) {
            result += "Item " + i + " ";
        }
        System.out.println("Result length: " + result.length());
    }
    
    public static void efficientMethod() {
        // Efficient string building
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10000; i++) {
            sb.append("Item ").append(i).append(" ");
        }
        System.out.println("Result length: " + sb.length());
    }
    
    public static void measurePerformance(Runnable method, String methodName) {
        long startTime = System.nanoTime();
        method.run();
        long endTime = System.nanoTime();
        
        long duration = endTime - startTime;
        System.out.printf("%s took: %.2f ms%n", methodName, duration / 1_000_000.0);
    }
    
    public static void main(String[] args) {
        measurePerformance(PerformanceDebugging::inefficientMethod, "Inefficient method");
        measurePerformance(PerformanceDebugging::efficientMethod, "Efficient method");
    }
}
\`\`\`

## Conclusion

Effective debugging is a crucial skill that improves with practice. Key takeaways:

1. **Understand the bug types** - syntax, runtime, and logic errors
2. **Use appropriate tools** - print statements, logging, IDE debuggers
3. **Master debugging techniques** - breakpoints, step execution, variable watching
4. **Practice defensive programming** - validate inputs, handle edge cases
5. **Write testable code** - separate concerns, use dependency injection
6. **Analyze systematically** - reproduce bugs, read stack traces carefully
7. **Use performance profiling** - identify bottlenecks and optimize

Remember: debugging is detective work. Be systematic, patient, and methodical. The more you practice these techniques, the faster you'll become at identifying and fixing bugs in your Java applications.

Good debugging skills will make you a more confident and effective Java developer!
  `,
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

function MarkdownContent({ content }: { content: string }) {
  const renderContent = (text: string) => {
    // Split content by code blocks
    const parts = text.split(/(```[\s\S]*?```)/g)

    return parts.map((part, index) => {
      if (part.startsWith("```")) {
        // Extract language and code
        const lines = part.split("\n")
        const firstLine = lines[0].replace("```", "")
        const language = firstLine.trim() || "java"
        const code = lines.slice(1, -1).join("\n")

        return (
          <div key={index} className="my-6">
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
                <span className="text-sm text-gray-300 font-medium">{language}</span>
                <button
                  onClick={() => navigator.clipboard?.writeText(code)}
                  className="text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  Copy
                </button>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-gray-100 font-mono leading-relaxed whitespace-pre">{code}</code>
              </pre>
            </div>
          </div>
        )
      } else {
        // Regular text content
        return (
          <div
            key={index}
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{
              __html: part
                .replace(/\n\n/g, "</p><p>")
                .replace(/\n/g, "<br>")
                .replace(/^/, "<p>")
                .replace(/$/, "</p>")
                .replace(/^<p><\/p>$/, "")
                .replace(/### (.*?)(<br>|$)/g, '<h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">$1</h3>')
                .replace(/## (.*?)(<br>|$)/g, '<h2 class="text-2xl font-bold mt-10 mb-6 text-foreground">$1</h2>')
                .replace(/# (.*?)(<br>|$)/g, '<h1 class="text-3xl font-bold mt-12 mb-8 text-foreground">$1</h1>')
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>")
                .replace(
                  /`([^`]+)`/g,
                  '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">$1</code>',
                )
                .replace(/^- (.*?)(<br>|$)/gm, '<li class="ml-4">• $1</li>')
                .replace(/^\d+\. (.*?)(<br>|$)/gm, '<li class="ml-4">$1</li>'),
            }}
          />
        )
      }
    })
  }

  return <div className="space-y-4">{renderContent(content)}</div>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <article className="space-y-6">
            <header className="space-y-4">
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>

              <p className="text-xl text-muted-foreground">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Top Ad */}
            {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
              <div className="flex justify-center">
                <AdBanner adSlot="YOUR_BLOG_POST_TOP_AD_SLOT" size="large" />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <MarkdownContent content={post.content} />
            </div>

            {/* Middle Ad */}
            {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
              <div className="flex justify-center my-8">
                <AdBanner adSlot="YOUR_BLOG_POST_MIDDLE_AD_SLOT" size="large" />
              </div>
            )}

            {/* Try It Section */}
            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="text-center py-6">
                <Code className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Try It Yourself!</h3>
                <p className="text-green-600 dark:text-green-400 mb-4">
                  Practice the concepts from this tutorial in our online Java compiler
                </p>
                <Link href="/">
                  <Button className="bg-green-600 hover:bg-green-700">Open Java Compiler</Button>
                </Link>
              </CardContent>
            </Card>
          </article>

          {/* Related Posts */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, relatedPost]) => (
                  <Card key={slug} className="group hover:shadow-lg transition-shadow cursor-pointer">
                    <Link href={`/blog/${slug}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{relatedPost.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {relatedPost.readTime}
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
