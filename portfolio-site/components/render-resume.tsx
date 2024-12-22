"use client";

import * as React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function RenderResume() {
  const [numPages, setNumPages] = React.useState<number>();
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [scale, setScale] = React.useState<number>(1);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newScale = containerWidth / 612;
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error): void {
    setError("Failed to load PDF. Please try again later.");
    setLoading(false);
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Resume</CardTitle>
        <CardDescription>View or download my resume</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div ref={containerRef} className="w-full overflow-hidden">
            <Document
              file="/Resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<p className="text-center">Loading PDF...</p>}
            >
              {!loading && !error && (
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              )}
            </Document>
          </div>
          {error && (
            <p className="text-red-500 mt-4" role="alert">
              {error}
            </p>
          )}
          {!loading && !error && (
            <p
              className="mt-2 text-sm text-muted-foreground"
              aria-live="polite"
            >
              Page {pageNumber} of {numPages}
            </p>
          )}
          <div className="mt-4 w-full">
            <Button
              onClick={handleDownload}
              variant="outline"
              className="w-full"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
