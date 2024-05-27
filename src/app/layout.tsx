"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Main } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <QueryClientProvider client={queryClient}>
          <Container>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </Container>
        </QueryClientProvider>
      </body>
    </html>
  );
}
