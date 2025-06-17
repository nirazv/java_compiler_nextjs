"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Keyboard } from "lucide-react"

interface InputPanelProps {
  input: string
  onChange: (input: string) => void
}

export default function InputPanel({ input, onChange }: InputPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Keyboard className="h-5 w-5 mr-2" />
          Program Input
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <Label htmlFor="stdin">Standard Input (stdin)</Label>
          <Textarea
            id="stdin"
            placeholder="Enter input for your program here..."
            value={input}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[100px] font-mono text-sm"
          />
        </div>
        <div className="text-xs text-muted-foreground">
          <p>• Each line will be sent as input to your program</p>
          <p>• Use Scanner.nextLine() to read input in Java</p>
        </div>
      </CardContent>
    </Card>
  )
}
