"use client"

import { useEffect, useRef, useCallback } from "react"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language: string
  theme?: string
  fontSize?: number
}

export default function CodeEditor({ value, onChange, language, theme = "vs-dark", fontSize = 14 }: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const monacoRef = useRef<any>(null)
  const isUpdatingRef = useRef(false)

  const handleEditorChange = useCallback(() => {
    if (monacoRef.current && !isUpdatingRef.current) {
      const newValue = monacoRef.current.getValue()
      console.log("Editor content changed:", newValue.substring(0, 100) + "...")
      onChange(newValue)
    }
  }, [onChange])

  useEffect(() => {
    const loadMonaco = async () => {
      if (typeof window !== "undefined" && !monacoRef.current) {
        // Check if Monaco is already loaded
        // @ts-ignore
        if (window.monaco) {
          initializeEditor()
          return
        }

        const script = document.createElement("script")
        script.src = "https://unpkg.com/monaco-editor@0.44.0/min/vs/loader.js"
        script.onload = () => {
          // @ts-ignore
          window.require.config({ paths: { vs: "https://unpkg.com/monaco-editor@0.44.0/min/vs" } })
          // @ts-ignore
          window.require(["vs/editor/editor.main"], () => {
            initializeEditor()
          })
        }
        document.head.appendChild(script)
      }
    }

    const initializeEditor = () => {
      if (editorRef.current && !monacoRef.current) {
        console.log("Initializing Monaco Editor with value:", value.substring(0, 100) + "...")

        // @ts-ignore
        monacoRef.current = window.monaco.editor.create(editorRef.current, {
          value: value,
          language: language,
          theme: theme,
          fontSize: fontSize,
          minimap: { enabled: true },
          scrollBeyondLastLine: true,
          automaticLayout: true,
          tabSize: 4,
          insertSpaces: true,
          wordWrap: "on",
          lineNumbers: "on",
          folding: true,
          bracketMatching: "always",
          autoIndent: "full",
          suggestOnTriggerCharacters: true,
          quickSuggestions: true,
          parameterHints: { enabled: true },
          scrollbar: {
            vertical: "visible",
            horizontal: "visible",
            useShadows: false,
            verticalHasArrows: true,
            horizontalHasArrows: true,
            verticalScrollbarSize: 17,
            horizontalScrollbarSize: 17,
            arrowSize: 30,
          },
          overviewRulerLanes: 3,
          overviewRulerBorder: false,
          mouseWheelScrollSensitivity: 1,
          fastScrollSensitivity: 5,
        })

        // Set up change listener
        const disposable = monacoRef.current.onDidChangeModelContent(() => {
          handleEditorChange()
        })

        // Store disposable for cleanup
        monacoRef.current._changeDisposable = disposable

        console.log("Monaco Editor initialized successfully")
      }
    }

    loadMonaco()

    return () => {
      if (monacoRef.current) {
        if (monacoRef.current._changeDisposable) {
          monacoRef.current._changeDisposable.dispose()
        }
        monacoRef.current.dispose()
        monacoRef.current = null
      }
    }
  }, []) // Remove dependencies to prevent re-initialization

  // Update editor value when prop changes (but not when user is typing)
  useEffect(() => {
    if (monacoRef.current) {
      const currentValue = monacoRef.current.getValue()
      if (currentValue !== value) {
        console.log("Updating editor value from props:", value.substring(0, 100) + "...")
        isUpdatingRef.current = true
        monacoRef.current.setValue(value)
        isUpdatingRef.current = false
      }
    }
  }, [value])

  // Update theme
  useEffect(() => {
    if (monacoRef.current) {
      console.log("Updating editor theme to:", theme)
      // @ts-ignore
      window.monaco?.editor.setTheme(theme)
    }
  }, [theme])

  // Update font size
  useEffect(() => {
    if (monacoRef.current) {
      console.log("Updating editor font size to:", fontSize)
      monacoRef.current.updateOptions({ fontSize: fontSize })
    }
  }, [fontSize])

  return (
    <div
      ref={editorRef}
      className="h-full w-full border rounded-md overflow-hidden"
      style={{ minHeight: "500px", maxHeight: "100%" }}
    />
  )
}
