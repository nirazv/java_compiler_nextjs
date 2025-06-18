"use client"

import { useEffect } from "react"

interface GoogleAdSenseProps {
  adSlot: string
  adFormat?: string
  fullWidthResponsive?: boolean
  adLayout?: string
  adLayoutKey?: string
  className?: string
}

export default function GoogleAdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  adLayout,
  adLayoutKey,
  className = "",
}: GoogleAdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== "undefined" && window.adsbygoogle) {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error("AdSense error:", error)
    }
  }, [])

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
        {...(adLayout && { "data-ad-layout": adLayout })}
        {...(adLayoutKey && { "data-ad-layout-key": adLayoutKey })}
      />
    </div>
  )
}
