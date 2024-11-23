import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "../_components/navbar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <body>
        <Navbar/>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
  );
}