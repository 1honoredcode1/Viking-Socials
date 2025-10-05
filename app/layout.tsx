export const metadata = {
  title: "My Social Feed",
  description: "Live Facebook & Instagram feed with privacy policy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="w-full text-center py-4 shadow-sm bg-white">
          <h1 className="text-2xl font-bold">My Social Feed</h1>
        </header>

        <main className="flex flex-col items-center justify-center min-h-screen p-4">
          {children}
        </main>

        <footer className="text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} • All rights reserved
        </footer>

      </body>
    </html>
  );
}
