import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Portfolio Builder - Resume Builder and Parser",
  description:
    "Portfolio Builder is a powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, Portfolio Builder also provides a resume parser to help test and confirm its ATS readability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
