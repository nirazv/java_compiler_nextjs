import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react"
import AdBanner from "@/components/ad-banner"
import Link from "next/link"

const blogPosts = [
  {
    id: "java-basics-beginners",
    title: "Java Basics for Beginners: Your First Steps into Programming",
    excerpt:
      "Learn the fundamental concepts of Java programming, from variables and data types to your first Hello World program.",
    author: "Java Team",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Beginner",
    tags: ["Java", "Beginner", "Tutorial"],
    featured: true,
  },
  {
    id: "object-oriented-programming-java",
    title: "Understanding Object-Oriented Programming in Java",
    excerpt:
      "Dive deep into OOP concepts including classes, objects, inheritance, polymorphism, and encapsulation with practical examples.",
    author: "Sarah Johnson",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Intermediate",
    tags: ["OOP", "Classes", "Objects"],
    featured: true,
  },
  {
    id: "java-data-structures-guide",
    title: "Complete Guide to Java Data Structures and Collections",
    excerpt:
      "Master ArrayList, HashMap, LinkedList, and other essential data structures with real-world examples and best practices.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Intermediate",
    tags: ["Data Structures", "Collections", "ArrayList"],
    featured: false,
  },
  {
    id: "exception-handling-java",
    title: "Exception Handling in Java: Best Practices and Common Pitfalls",
    excerpt:
      "Learn how to handle errors gracefully in Java with try-catch blocks, custom exceptions, and proper error management.",
    author: "Alex Rodriguez",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Intermediate",
    tags: ["Exception Handling", "Error Management"],
    featured: false,
  },
  {
    id: "java-streams-lambda",
    title: "Java 8 Streams and Lambda Expressions: Modern Java Programming",
    excerpt:
      "Explore functional programming in Java with streams, lambda expressions, and method references for cleaner, more efficient code.",
    author: "Emma Davis",
    date: "2024-01-05",
    readTime: "14 min read",
    category: "Advanced",
    tags: ["Java 8", "Streams", "Lambda"],
    featured: false,
  },
  {
    id: "debugging-java-code",
    title: "Debugging Java Code: Tools and Techniques for Finding Bugs",
    excerpt:
      "Master debugging techniques, learn to use debugging tools, and discover common bug patterns in Java applications.",
    author: "David Wilson",
    date: "2024-01-03",
    readTime: "11 min read",
    category: "Intermediate",
    tags: ["Debugging", "Tools", "Best Practices"],
    featured: false,
  },
]

const categories = ["All", "Beginner", "Intermediate", "Advanced"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold">Java Programming Blog</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn Java programming with our comprehensive tutorials, tips, and best practices
            </p>
          </div>

          {/* Top Ad */}
          {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
            <div className="flex justify-center">
              <AdBanner adSlot="YOUR_BLOG_TOP_AD_SLOT" size="large" />
            </div>
          )}

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Featured Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                    <Link href={`/blog/${post.id}`}>
                      <CardHeader className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
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
                          <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Middle Ad */}
          {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
            <div className="flex justify-center">
              <AdBanner adSlot="YOUR_BLOG_MIDDLE_AD_SLOT" size="large" />
            </div>
          )}

          {/* All Posts */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <Link href={`/blog/${post.id}`}>
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-blue-600 transition-colors line-clamp-2 text-lg">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground line-clamp-3 text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Stay Updated with Java Tips</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                Get the latest Java tutorials and programming tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
