import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, Code, Zap, Shield, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      icon: <Code className="h-5 w-5 text-blue-500" />,
      questions: [
        {
          q: "How do I start using the Java Online Compiler?",
          a: "Simply visit our homepage and start typing your Java code in the editor. No registration or installation required! Click the 'Run Code' button to compile and execute your program.",
        },
        {
          q: "Do I need to install Java on my computer?",
          a: "No! Our online compiler runs entirely in your browser. All compilation and execution happens on our cloud servers, so you don't need to install Java or any IDE on your local machine.",
        },
        {
          q: "What Java versions are supported?",
          a: "We support multiple Java versions including Java 8, Java 11, and Java 17. You can select your preferred version from the settings panel.",
        },
      ],
    },
    {
      category: "Features & Usage",
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      questions: [
        {
          q: "Can I save my code?",
          a: "Yes! You can save your code as a .java file to your computer using the 'Save File' button. You can also load existing Java files using the 'Load File' button.",
        },
        {
          q: "How do I provide input to my Java program?",
          a: "When your program uses Scanner or other input methods, our compiler will pause execution and prompt you to enter input. Simply type your input in the highlighted input field and press Enter.",
        },
        {
          q: "What's the maximum execution time for programs?",
          a: "Programs have a maximum execution time limit to prevent infinite loops and ensure fair resource usage. Most educational and practice programs will run well within these limits.",
        },
        {
          q: "Can I use external libraries or packages?",
          a: "Currently, only standard Java libraries (java.util, java.io, etc.) are supported. External JAR files and third-party libraries are not available in the online environment.",
        },
      ],
    },
    {
      category: "Technical Support",
      icon: <Shield className="h-5 w-5 text-green-500" />,
      questions: [
        {
          q: "Why am I getting a compilation error?",
          a: "Check your code for syntax errors like missing semicolons, unmatched brackets, or incorrect method signatures. The error panel will show specific line numbers and error descriptions to help you debug.",
        },
        {
          q: "My program seems to hang or not respond. What should I do?",
          a: "Your program might be in an infinite loop or waiting for input. Use the 'Stop' button to terminate execution, then review your code for potential infinite loops or missing input handling.",
        },
        {
          q: "Can I use the compiler offline?",
          a: "No, our compiler requires an internet connection as it uses cloud-based compilation services. However, your code is temporarily stored in your browser's local storage.",
        },
        {
          q: "Is my code secure and private?",
          a: "Yes! Your code is only sent to our servers during execution and is not permanently stored. We don't save, share, or analyze your code. See our Privacy Policy for more details.",
        },
      ],
    },
    {
      category: "Account & Billing",
      icon: <Users className="h-5 w-5 text-purple-500" />,
      questions: [
        {
          q: "Do I need to create an account?",
          a: "No account is required! You can use all features of the Java Online Compiler without registration. Your preferences are saved locally in your browser.",
        },
        {
          q: "Is the service free to use?",
          a: "Yes, our Java Online Compiler is completely free to use for educational and personal projects. There are no hidden fees or premium features.",
        },
        {
          q: "Are there any usage limits?",
          a: "We have fair usage limits to ensure the service remains available for everyone. These limits are generous and shouldn't affect normal educational or practice use.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <HelpCircle className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about using the Java Online Compiler
            </p>
          </div>

          {/* FAQ Categories */}
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {category.icon}
                  <span>{category.category}</span>
                  <Badge variant="outline">{category.questions.length} questions</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="space-y-2">
                    <h3 className="font-semibold text-foreground">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    {faqIndex < category.questions.length - 1 && <hr className="my-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          {/* Still Need Help */}
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-blue-300">Still Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-600 dark:text-blue-400">
                Can't find the answer you're looking for? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
                >
                  Contact Support
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-300 bg-background hover:bg-blue-50 dark:hover:bg-blue-950/50 h-10 px-4 py-2"
                >
                  View Documentation
                </Link>
                <a
                  href="https://docs.oracle.com/javase/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  <span>Java Documentation</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/" className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <Code className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="font-medium">Start Coding</div>
                  <div className="text-xs text-muted-foreground">Open Editor</div>
                </Link>
                <Link
                  href="/examples"
                  className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <div className="font-medium">Examples</div>
                  <div className="text-xs text-muted-foreground">Code Samples</div>
                </Link>
                <Link
                  href="/tutorials"
                  className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Users className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="font-medium">Tutorials</div>
                  <div className="text-xs text-muted-foreground">Learn Java</div>
                </Link>
                <Link href="/about" className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <div className="font-medium">About</div>
                  <div className="text-xs text-muted-foreground">Learn More</div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
