import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "../_components/navbar";
import HeadNav from "../_components/head";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <body className="h-screen overflow-y-hidden">
      <HeadNav />
      <TRPCReactProvider>{children}</TRPCReactProvider>
      <Navbar />
    </body>
  );
}
