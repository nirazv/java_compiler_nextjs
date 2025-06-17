"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Settings } from "lucide-react"

interface SettingsPanelProps {
  settings: {
    javaVersion: string
    theme: string
    fontSize: number
    autoSave: boolean
  }
  onChange: (settings: any) => void
}

export default function SettingsPanel({ settings, onChange }: SettingsPanelProps) {
  const updateSetting = (key: string, value: any) => {
    onChange({
      ...settings,
      [key]: value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Settings className="h-5 w-5 mr-2" />
          Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Java Version</Label>
          <Select value={settings.javaVersion} onValueChange={(value) => updateSetting("javaVersion", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4">Java 17</SelectItem>
              <SelectItem value="3">Java 11</SelectItem>
              <SelectItem value="2">Java 8</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Editor Theme</Label>
          <Select value={settings.theme} onValueChange={(value) => updateSetting("theme", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vs-dark">Dark</SelectItem>
              <SelectItem value="vs">Light</SelectItem>
              <SelectItem value="hc-black">High Contrast</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Font Size</Label>
          <div className="px-2">
            <Slider
              min={10}
              max={24}
              step={1}
              value={[settings.fontSize]}
              onValueChange={(value) => updateSetting("fontSize", value[0])}
              className="w-full"
            />
          </div>
          <div className="text-sm text-muted-foreground text-center">{settings.fontSize}px</div>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="auto-save">Auto Save</Label>
          <Switch
            id="auto-save"
            checked={settings.autoSave}
            onCheckedChange={(checked) => updateSetting("autoSave", checked)}
          />
        </div>

        <div className="pt-4 border-t text-xs text-muted-foreground">
          <p>
            <strong>JDoodle Integration:</strong>
          </p>
          <p>• Compile and run Java code online</p>
          <p>• Multiple Java versions supported</p>
          <p>• Real-time error detection</p>
        </div>
      </CardContent>
    </Card>
  )
}
