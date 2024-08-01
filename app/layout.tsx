import { montserrat } from './ui/font';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer>Hecho con amor por mi</footer>
      </body>
    </html>
  );
}
