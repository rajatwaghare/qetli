import { Roboto_Condensed } from "next/font/google";
import "./globals.css";


const robotoCondensed = Roboto_Condensed({
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
})

export const metadata = {
  title: "Welcome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className} >
        {children}
      </body>
    </html>
  );
}
