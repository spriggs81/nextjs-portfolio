// app/layout.jsx
import Navbar from './components/Navbar';
import './globals.css'; // Make sure your globals.css file is imported here

export const metadata = {
  title: 'John Spriggs Consulting',
  description: 'Operational and data automation specialist for businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mt-16"> {/* Add margin to prevent content from hiding behind the fixed Navbar */}
          {children}
        </main>
      </body>
    </html>
  );
}
