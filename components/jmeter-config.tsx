"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Settings } from "lucide-react"

interface JMeterConfigProps {
  config: {
    threadCount: number
    rampUpPeriod: number
    loopCount: number
    duration: number
  }
  onChange: (config: any) => void
}

export default function JMeterConfig({ config, onChange }: JMeterConfigProps) {
  const updateConfig = (key: string, value: number) => {
    onChange({
      ...config,
      [key]: value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Settings className="h-5 w-5 mr-2" />
          JMeter Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="threadCount">Thread Count (Users)</Label>
          <div className="px-2">
            <Slider
              id="threadCount"
              min={1}
              max={100}
              step={1}
              value={[config.threadCount]}
              onValueChange={(value) => updateConfig("threadCount", value[0])}
              className="w-full"
            />
          </div>
          <div className="text-sm text-muted-foreground text-center">{config.threadCount} users</div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rampUpPeriod">Ramp-up Period (seconds)</Label>
          <Input
            id="rampUpPeriod"
            type="number"
            value={config.rampUpPeriod}
            onChange={(e) => updateConfig("rampUpPeriod", Number.parseInt(e.target.value) || 0)}
            min="1"
            max="300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="loopCount">Loop Count</Label>
          <Input
            id="loopCount"
            type="number"
            value={config.loopCount}
            onChange={(e) => updateConfig("loopCount", Number.parseInt(e.target.value) || 0)}
            min="1"
            max="1000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (seconds)</Label>
          <div className="px-2">
            <Slider
              id="duration"
              min={10}
              max={300}
              step={10}
              value={[config.duration]}
              onValueChange={(value) => updateConfig("duration", value[0])}
              className="w-full"
            />
          </div>
          <div className="text-sm text-muted-foreground text-center">{config.duration} seconds</div>
        </div>

        <div className="pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            <p>
              <strong>Thread Count:</strong> Number of virtual users
            </p>
            <p>
              <strong>Ramp-up:</strong> Time to reach full load
            </p>
            <p>
              <strong>Loop Count:</strong> Iterations per thread
            </p>
            <p>
              <strong>Duration:</strong> Maximum test duration
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
