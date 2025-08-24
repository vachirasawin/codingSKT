import "./globals.css";
import { AuthProvider } from "./Provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "codingSKT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel = "preconnect" href = "https://fonts.googleapis.com"/>
        <link rel = "icon" href = "/logo.png"/>
        <link rel = "preconnect" href = "https://fonts.gstatic.com" crossOrigin = "true"/>
        <link href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap" rel = "stylesheet"/>
        <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity = "sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossOrigin = "anonymous" referrerPolicy = "no-referrer"/>
      </head>
      <body className = "antialiased">
        <AuthProvider>{children}</AuthProvider>
        <SpeedInsights/>
      </body>
    </html>
  );
}