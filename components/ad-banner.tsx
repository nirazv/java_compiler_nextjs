"use client"

import GoogleAdSense from "./google-adsense"

interface AdBannerProps {
  adSlot: string
  className?: string
  size?: "small" | "medium" | "large" | "responsive"
}

export default function AdBanner({ adSlot, className = "", size = "responsive" }: AdBannerProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "h-24 max-w-sm"
      case "medium":
        return "h-32 max-w-md"
      case "large":
        return "h-48 max-w-lg"
      default:
        return "min-h-[100px]"
    }
  }

  return (
    <div className={`ad-banner ${getSizeClasses()} ${className}`}>
      <div className="text-xs text-muted-foreground text-center mb-1">Advertisement</div>
      <GoogleAdSense adSlot={adSlot} className="w-full h-full" />
    </div>
  )
}
