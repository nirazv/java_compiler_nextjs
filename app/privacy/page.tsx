import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-8 w-8 text-green-600" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-6 w-6 text-blue-500" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold">Code and Input Data</h3>
                <p className="text-muted-foreground">
                  When you use our Java Online Compiler, your code and input data are temporarily sent to our execution
                  servers (powered by JDoodle) for compilation and execution. This data is processed in real-time and is
                  not permanently stored on our servers.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Usage Analytics</h3>
                <p className="text-muted-foreground">
                  We may collect anonymous usage statistics to improve our service, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  <li>Number of code executions</li>
                  <li>Popular Java features used</li>
                  <li>Error patterns for debugging improvements</li>
                  <li>General usage patterns and performance metrics</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Browser Information</h3>
                <p className="text-muted-foreground">
                  We automatically collect certain information about your browser and device, including browser type,
                  operating system, and IP address for security and optimization purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-6 w-6 text-purple-500" />
                <span>How We Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <strong>Code Execution:</strong> To compile and run your Java code using our cloud-based execution
                    environment
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong>Service Improvement:</strong> To analyze usage patterns and improve our platform's
                    performance and features
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <strong>Security:</strong> To detect and prevent abuse, spam, and malicious activities
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <strong>Technical Support:</strong> To troubleshoot issues and provide customer support when needed
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-6 w-6 text-green-500" />
                <span>Data Protection & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold">Encryption</h3>
                <p className="text-muted-foreground">
                  All data transmitted between your browser and our servers is encrypted using industry-standard SSL/TLS
                  protocols.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Temporary Processing</h3>
                <p className="text-muted-foreground">
                  Your code is processed temporarily for execution purposes and is not permanently stored on our
                  servers. Code execution happens in isolated, sandboxed environments.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Third-Party Services</h3>
                <p className="text-muted-foreground">
                  We use JDoodle's API for code execution. Please refer to{" "}
                  <a
                    href="https://www.jdoodle.com/privacy-policy"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JDoodle's Privacy Policy
                  </a>{" "}
                  for information about how they handle your code.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="h-6 w-6 text-blue-500" />
                <span>Your Rights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <strong>No Account Required:</strong> You can use our service without creating an account or
                    providing personal information
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong>Data Control:</strong> Your code remains in your browser's local storage and is only sent to
                    servers during execution
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <strong>Clear Data:</strong> You can clear your browser's local storage at any time to remove any
                    locally stored code
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <span>Cookies & Local Storage</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We use browser local storage to save your editor preferences (theme, font size, etc.) and may use
                cookies for basic functionality. We do not use tracking cookies or third-party advertising cookies.
              </p>
              <p className="text-muted-foreground">
                You can disable cookies in your browser settings, though this may affect some functionality of the
                editor.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Back to Editor
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  About Us
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
