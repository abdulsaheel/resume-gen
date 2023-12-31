'use client'
import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { Testimonials } from "home/Testimonials";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";
import { isLoggedIn } from '../app/components/documentation/utils/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
  
      // Check if user is not logged in, redirect to login page
      if (!isLoggedIn()) {
        router.push('/login');
        console.log("User isn't logged in")
      }
    }, []);
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
      <Hero />
      <Steps />
      <Features />
      <Testimonials />
      <QuestionsAndAnswers />
    </main>
  );
}
