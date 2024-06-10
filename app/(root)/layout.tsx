
import Sidebar from "@/components/ui/SideBar";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Fernando', lastName: 'Bustillos'};
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn} />
    {children}
   </main>
  );
}
