import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertCircle, Shield, Users, Gavel, Clock } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold">Terms of Use</h1>
            </div>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our Java Online Compiler service.
            </p>
          </div>

          {/* Acceptance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-green-500" />
                <span>Acceptance of Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using the Java Online Compiler service, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-500" />
                <span>Service Description</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Java Online Compiler is a web-based platform that allows users to write, compile, and execute Java code
                in their browser. The service includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Online code editor with syntax highlighting</li>
                <li>Java code compilation and execution</li>
                <li>Interactive input/output handling</li>
                <li>Multiple Java version support</li>
                <li>Code sharing and file management features</li>
              </ul>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-6 w-6 text-orange-500" />
                <span>Acceptable Use Policy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-green-600">You MAY use this service to:</h3>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  <li>Write and test Java code for educational purposes</li>
                  <li>Practice programming and learn Java concepts</li>
                  <li>Share code snippets for educational or collaborative purposes</li>
                  <li>Test algorithms and data structures</li>
                  <li>Develop small applications and prototypes</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-red-600">You MAY NOT use this service to:</h3>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  <li>Execute malicious code or attempt to harm our infrastructure</li>
                  <li>Mine cryptocurrencies or perform resource-intensive operations</li>
                  <li>Attempt to access unauthorized systems or data</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Spam or abuse the service with excessive requests</li>
                  <li>Upload or execute code containing viruses or malware</li>
                  <li>Reverse engineer or attempt to compromise the service</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-purple-500" />
                <span>Service Limitations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold">Execution Limits</h3>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  <li>Code execution time is limited to prevent resource abuse</li>
                  <li>Memory usage is restricted for fair resource allocation</li>
                  <li>Network access from executed code is not permitted</li>
                  <li>File system access is sandboxed and temporary</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Availability</h3>
                <p className="text-muted-foreground">
                  While we strive to maintain high availability, we do not guarantee uninterrupted service. The service
                  may be temporarily unavailable due to maintenance, updates, or technical issues.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gavel className="h-6 w-6 text-indigo-500" />
                <span>Intellectual Property</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold">Your Code</h3>
                <p className="text-muted-foreground">
                  You retain all rights to the code you write and execute using our service. We do not claim ownership
                  of your intellectual property.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Our Service</h3>
                <p className="text-muted-foreground">
                  The Java Online Compiler platform, including its design, functionality, and underlying technology, is
                  protected by intellectual property rights. You may not copy, modify, or distribute our service without
                  permission.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-6 w-6 text-yellow-500" />
                <span>Disclaimer of Warranties</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The service is provided "as is" without any warranties, expressed or implied. We do not warrant that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>The service will be uninterrupted or error-free</li>
                <li>The results of code execution will be accurate or reliable</li>
                <li>Any defects in the service will be corrected</li>
                <li>The service will meet your specific requirements</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                In no event shall we be liable for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use of the service.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to terminate or suspend access to our service immediately, without prior notice or
                liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Use, please contact us.
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
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Privacy Policy
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
