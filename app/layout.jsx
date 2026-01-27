// app/layout.jsx
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: "John Spriggs | Production Support Engineer",
  description:
    "Production-focused Support Engineer with deep experience in SaaS systems, databases, and incident resolution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Navbar />
        <main className="mt-16">
          {children}
        </main>
        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} John Spriggs
        </footer>
      </body>
    </html>
  );
}
