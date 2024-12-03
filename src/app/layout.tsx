export const metadata = {
  title: "Santa Hat Crafts - Knit Your Own Santa Hat",
  description:
    "Learn how to knit your own Santa hat with our easy step-by-step guide. Perfect for the holiday season!",
  openGraph: {
    title: "Santa Hat Crafts",
    description:
      "Learn how to knit your own Santa hat with our easy step-by-step guide. Perfect for the holiday season!",
    url: "dlalii2nzeof2.cloudfront.net",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Santa Hat Crafts",
    description:
      "Learn how to knit your own Santa hat with our easy step-by-step guide. Perfect for the holiday season!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
