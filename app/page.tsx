import { Metadata } from "next"
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "BLVING",
  description: "BLVING Web Application",
}

export default function Home() {
  redirect('/dashboard');
}