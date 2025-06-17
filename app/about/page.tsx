import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Zap, Shield, Globe, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold">About Java Online Compiler</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering developers to write, compile, and execute Java code seamlessly in the browser
            </p>
          </div>

          {/* Mission */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-red-500" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                We believe that learning and practicing programming should be accessible to everyone, anywhere, at any
                time. Our Java Online Compiler removes the barriers of complex IDE setups and provides an instant,
                powerful development environment right in your browser.
              </p>
              <p>
                Whether you're a student learning Java for the first time, a professional testing code snippets, or an
                educator teaching programming concepts, our platform is designed to make your coding experience smooth
                and productive.
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-yellow-500" />
                <span>Key Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center space-x-2">
                    <Code className="h-5 w-5 text-blue-500" />
                    <span>Advanced Code Editor</span>
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• Syntax highlighting for Java</li>
                    <li>• Auto-completion and IntelliSense</li>
                    <li>• Error detection and suggestions</li>
                    <li>• Multiple themes and customization</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-green-500" />
                    <span>Cloud-Based Execution</span>
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• Powered by JDoodle API</li>
                    <li>• Multiple Java versions supported</li>
                    <li>• Real-time compilation and execution</li>
                    <li>• Interactive input/output handling</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    <span>User-Friendly Interface</span>
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• Clean, modern design</li>
                    <li>• Responsive layout for all devices</li>
                    <li>• Intuitive navigation and controls</li>
                    <li>• Comprehensive output display</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-orange-500" />
                    <span>Secure & Reliable</span>
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-7">
                    <li>• Sandboxed code execution</li>
                    <li>• No data stored on servers</li>
                    <li>• Privacy-focused design</li>
                    <li>• Fast and reliable performance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js 14</Badge>
                <Badge variant="secondary">React 18</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Monaco Editor</Badge>
                <Badge variant="secondary">JDoodle API</Badge>
                <Badge variant="secondary">Shadcn/ui</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-500" />
                <span>Our Team</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built with ❤️ by a team of passionate developers who believe in making programming education accessible
                to everyone. We're constantly working to improve the platform and add new features based on user
                feedback.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Have questions, suggestions, or feedback? We'd love to hear from you!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Back to Editor
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Terms of Use
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
