"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Square, RotateCcw, Download, Upload, Code, Terminal, Menu, X } from "lucide-react"
import CodeEditor from "@/components/code-editor"
import OutputPanel from "@/components/output-panel"
import InputPanel from "@/components/input-panel"
import SettingsPanel from "@/components/settings-panel"
import AdBanner from "@/components/ad-banner"
import Link from "next/link"

const defaultJavaCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Try some basic Java features
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        
        for (int num : numbers) {
            sum += num;
        }
        
        System.out.println("Sum of numbers: " + sum);
        
        // Example with user input
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "!");
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        System.out.println("You are " + age + " years old!");
        
        scanner.close();
    }
}`

export default function JavaJDoodleEditor() {
  const [code, setCode] = useState(defaultJavaCode)
  const [input, setInput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState<any>(null)
  const [isWaitingForInput, setIsWaitingForInput] = useState(false)
  const [currentOutput, setCurrentOutput] = useState("")
  const [inputHistory, setInputHistory] = useState<string[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [settings, setSettings] = useState({
    javaVersion: "4",
    theme: "vs-dark",
    fontSize: 14,
    autoSave: true,
  })

  // Use useCallback to prevent unnecessary re-renders
  const handleCodeChange = useCallback((newCode: string) => {
    console.log("Code updated in parent component:", newCode.substring(0, 100) + "...")
    setCode(newCode)
  }, [])

  const executeCode = async () => {
    console.log("Executing code:", code.substring(0, 200) + "...")

    setIsRunning(true)
    setOutput(null)
    setCurrentOutput("")
    setInputHistory([])
    setIsWaitingForInput(false)

    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          script: code, // Use the current code state
          stdin: "", // Start with empty input
          language: "java",
          versionIndex: settings.javaVersion,
          interactive: true,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.waitingForInput) {
        setIsWaitingForInput(true)
        setCurrentOutput(result.output || "")
        console.log("Program Output:")
        console.log(result.output || "")
      } else {
        if (result.output) {
          console.log("Program Output:")
          console.log(result.output)
        }

        if (result.error) {
          console.log("Compilation/Runtime Error:")
          console.log(result.error)
        }

        setOutput(result)
        setIsRunning(false)
      }
    } catch (error) {
      console.error("Execution failed:", error)
      setOutput({
        output: "",
        error: `Failed to execute code: ${error instanceof Error ? error.message : "Unknown error"}`,
        executionTime: 0,
        memory: 0,
        cpuTime: 0,
        statusCode: 1,
      })
      setIsRunning(false)
    }
  }

  const sendInput = async (userInput: string) => {
    if (!isWaitingForInput) return

    const newInputHistory = [...inputHistory, userInput]
    setInputHistory(newInputHistory)
    setInput("")

    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          script: code, // Use current code state
          stdin: newInputHistory.join("\n"),
          language: "java",
          versionIndex: settings.javaVersion,
          interactive: true,
          continueExecution: true,
        }),
      })

      const result = await response.json()

      if (result.waitingForInput) {
        setCurrentOutput(result.output || "")
        console.log("Program Output:")
        console.log(result.output || "")
      } else {
        if (result.output) {
          console.log("Program Output:")
          console.log(result.output)
        }

        if (result.error) {
          console.log("Compilation/Runtime Error:")
          console.log(result.error)
        }

        setOutput(result)
        setIsRunning(false)
        setIsWaitingForInput(false)
      }
    } catch (error) {
      console.error("Input sending failed:", error)
      setOutput({
        output: currentOutput,
        error: `Failed to send input: ${error instanceof Error ? error.message : "Unknown error"}`,
        executionTime: 0,
        memory: 0,
        cpuTime: 0,
        statusCode: 1,
      })
      setIsRunning(false)
      setIsWaitingForInput(false)
    }
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && isWaitingForInput) {
      sendInput(input.trim())
    }
  }

  const stopExecution = () => {
    setIsRunning(false)
    setIsWaitingForInput(false)
  }

  const clearOutput = () => {
    setOutput(null)
    setCurrentOutput("")
    setInputHistory([])
    setIsWaitingForInput(false)
  }

  const saveCode = () => {
    const blob = new Blob([code], { type: "text/java" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Main.java"
    a.click()
    URL.revokeObjectURL(url)
  }

  const loadCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        console.log("Loading code from file:", content.substring(0, 100) + "...")
        setCode(content)
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-blue-600" />
                <h1 className="text-xl font-bold">Java Online Compiler</h1>
              </div>
              <Badge variant="secondary">Powered by JDoodle</Badge>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <nav className="flex items-center space-x-4">
                <Link
                  href="/blog"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Use
                </Link>
              </nav>
              <div className="flex items-center space-x-2">
                <input type="file" accept=".java" onChange={loadCode} className="hidden" id="file-upload" />
                <Button variant="outline" size="sm" onClick={() => document.getElementById("file-upload")?.click()}>
                  <Upload className="h-4 w-4 mr-2" />
                  Load File
                </Button>
                <Button variant="outline" size="sm" onClick={saveCode}>
                  <Download className="h-4 w-4 mr-2" />
                  Save File
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/blog"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Terms of Use
                </Link>
                <div className="flex items-center space-x-2 pt-2">
                  <input type="file" accept=".java" onChange={loadCode} className="hidden" id="file-upload-mobile" />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      document.getElementById("file-upload-mobile")?.click()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Load File
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      saveCode()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Save File
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Top Banner Ad */}
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
        <div className="container mx-auto px-4 py-2">
          <AdBanner adSlot="YOUR_TOP_BANNER_AD_SLOT" className="mx-auto" />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 h-[calc(100vh-250px)]">
            {/* Code Editor Section */}
            <div className="xl:col-span-3">
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Terminal className="h-5 w-5 mr-2" />
                      Java Code Editor
                      {settings.autoSave && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          Auto-save
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button onClick={executeCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700">
                        <Play className="h-4 w-4 mr-2" />
                        {isRunning ? "Running..." : "Run Code"}
                      </Button>
                      <Button onClick={stopExecution} disabled={!isRunning} variant="destructive">
                        <Square className="h-4 w-4 mr-2" />
                        Stop
                      </Button>
                      <Button onClick={clearOutput} variant="outline">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Clear
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-0 overflow-hidden">
                  <CodeEditor
                    value={code}
                    onChange={handleCodeChange}
                    language="java"
                    theme={settings.theme}
                    fontSize={settings.fontSize}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Side Panel */}
            <div className="space-y-6 overflow-y-auto">
              {/* Sidebar Ad */}
              {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && <AdBanner adSlot="YOUR_SIDEBAR_AD_SLOT" size="medium" />}

              {/* Settings Panel */}
              <SettingsPanel settings={settings} onChange={setSettings} />

              {/* Interactive Input Panel */}
              {isWaitingForInput && (
                <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center text-orange-700 dark:text-orange-300">
                      <Terminal className="h-5 w-5 mr-2" />
                      Program Waiting for Input
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleInputSubmit} className="space-y-3">
                      <div className="text-sm text-orange-600 dark:text-orange-400">
                        The program is waiting for your input. Type your response and press Enter.
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Enter your input here..."
                          className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                          autoFocus
                        />
                        <Button type="submit" size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Send
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Regular Input Panel */}
              {!isWaitingForInput && <InputPanel input={input} onChange={setInput} />}

              {/* Output Panel */}
              <OutputPanel
                output={output}
                isRunning={isRunning}
                currentOutput={currentOutput}
                isWaitingForInput={isWaitingForInput}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner Ad */}
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
        <div className="container mx-auto px-4 py-2">
          <AdBanner adSlot="YOUR_BOTTOM_BANNER_AD_SLOT" className="mx-auto" />
        </div>
      )}
    </div>
  )
}
