"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Activity, CheckCircle, XCircle, Clock, MemoryStick, Terminal } from "lucide-react"

interface OutputPanelProps {
  output: any
  isRunning: boolean
  currentOutput?: string
  isWaitingForInput?: boolean
}

export default function OutputPanel({ output, isRunning, currentOutput, isWaitingForInput }: OutputPanelProps) {
  if (isRunning && !isWaitingForInput) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Activity className="h-5 w-5 mr-2 animate-spin text-blue-500" />
            Executing...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Compiling Java code...</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Executing program...</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isWaitingForInput && currentOutput) {
    return (
      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center text-orange-700 dark:text-orange-300">
            <Terminal className="h-5 w-5 mr-2 animate-pulse" />
            Program Running - Waiting for Input
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Current Output</span>
              <Badge variant="outline" className="border-orange-300 text-orange-700">
                Waiting for Input
              </Badge>
            </div>
            <ScrollArea className="h-48 w-full border rounded-md p-3 bg-white dark:bg-gray-900">
              <pre className="text-sm font-mono whitespace-pre-wrap">
                {currentOutput}
                <span className="animate-pulse bg-orange-500 text-white px-1">|</span>
              </pre>
            </ScrollArea>
            <div className="text-xs text-orange-600 dark:text-orange-400">
              💡 The program is paused and waiting for your input. Type your response above and press Enter.
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!output) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Output</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">
            <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Run your Java code to see output here</p>
            <p className="text-xs mt-2">Click the "Run Code" button above</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const hasError = output.error && output.error.trim() !== ""
  const hasOutput = output.output && output.output.trim() !== ""

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          {hasError ? (
            <XCircle className="h-5 w-5 mr-2 text-red-500" />
          ) : (
            <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
          )}
          {hasError ? "Runtime Error" : "Execution Complete"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={hasError ? "error" : "output"} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="output">Output</TabsTrigger>
            <TabsTrigger value="error">
              Errors
              {hasError && (
                <Badge variant="destructive" className="ml-2 h-4 text-xs">
                  !
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="output" className="mt-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Program Output</span>
                {hasOutput && <Badge variant="outline">Success</Badge>}
              </div>
              <ScrollArea className="h-48 w-full border rounded-md p-3 bg-muted/50">
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  {hasOutput ? output.output : "No output generated"}
                </pre>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="error" className="mt-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Error Messages</span>
                {hasError && <Badge variant="destructive">Runtime Error</Badge>}
              </div>
              <ScrollArea className="h-48 w-full border rounded-md p-3 bg-red-50 dark:bg-red-950/20">
                <pre className="text-sm font-mono whitespace-pre-wrap text-red-700 dark:text-red-400">
                  {hasError ? output.error : "No errors"}
                </pre>
              </ScrollArea>
              {hasError && (
                <div className="text-xs text-red-600 dark:text-red-400 mt-2">
                  💡 This error occurred because the program tried to read input but none was available. Make sure to
                  provide input when the program asks for it.
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="mt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Execution Time</span>
                  </div>
                  <span className="font-mono text-sm">
                    {output.executionTime ? `${output.executionTime.toFixed(3)}s` : "N/A"}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <MemoryStick className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Memory Used</span>
                  </div>
                  <span className="font-mono text-sm">
                    {output.memory ? `${Math.round(Number.parseInt(output.memory) / 1024)} KB` : "N/A"}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">CPU Time</span>
                  </div>
                  <span className="font-mono text-sm">{output.cpuTime ? `${output.cpuTime.toFixed(3)}s` : "N/A"}</span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        output.statusCode === 200 || output.statusCode === 0 ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm">Status</span>
                  </div>
                  <span className="font-mono text-sm">
                    {output.statusCode === 200 || output.statusCode === 0 ? "Success" : "Error"}
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
