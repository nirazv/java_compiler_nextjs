"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Activity, Clock, CheckCircle } from "lucide-react"

interface ResultsPanelProps {
  results: any
  isRunning: boolean
}

export default function ResultsPanel({ results, isRunning }: ResultsPanelProps) {
  if (isRunning) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Activity className="h-5 w-5 mr-2 animate-spin" />
            Executing...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Running JMeter Test</span>
                <span>Please wait...</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div className="text-sm text-muted-foreground">Compiling Java code and executing performance tests...</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!results) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">
            <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Run your Java code to see results here</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
          Execution Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="output" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="output">Output</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="output" className="mt-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Console Output</h4>
                <ScrollArea className="h-32 w-full border rounded-md p-3 bg-muted/50">
                  <pre className="text-sm font-mono whitespace-pre-wrap">{results.output}</pre>
                </ScrollArea>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Compilation Time:</span>
                  <span className="ml-2 font-mono">{results.compilationTime}s</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Execution Time:</span>
                  <span className="ml-2 font-mono">{results.executionTime}s</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="mt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{results.jmeterResults.averageResponseTime}ms</div>
                  <div className="text-sm text-muted-foreground">Avg Response Time</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{results.jmeterResults.throughput}/s</div>
                  <div className="text-sm text-muted-foreground">Throughput</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Error Rate</span>
                  <span className={results.jmeterResults.errorRate < 1 ? "text-green-600" : "text-red-600"}>
                    {results.jmeterResults.errorRate.toFixed(2)}%
                  </span>
                </div>
                <Progress value={results.jmeterResults.errorRate} className="h-2" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="mt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Samples:</span>
                  <span className="font-mono">{results.jmeterResults.totalSamples}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min Response Time:</span>
                  <span className="font-mono">{results.jmeterResults.minResponseTime}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max Response Time:</span>
                  <span className="font-mono">{results.jmeterResults.maxResponseTime}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span className="font-mono text-green-600">
                    {(100 - results.jmeterResults.errorRate).toFixed(2)}%
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Recent Samples
                </h4>
                <ScrollArea className="h-32 w-full border rounded-md">
                  <div className="p-3 space-y-1">
                    {results.jmeterResults.samples.slice(-5).map((sample: any, index: number) => (
                      <div key={index} className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{new Date(sample.timestamp).toLocaleTimeString()}</span>
                        <span className="font-mono">{sample.responseTime}ms</span>
                        <Badge variant={sample.success ? "default" : "destructive"} className="h-4 text-xs">
                          {sample.success ? "OK" : "FAIL"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
