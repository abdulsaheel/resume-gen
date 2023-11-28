"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";
import { useRouter } from 'next/navigation';
import { isLoggedIn } from '../components/documentation/utils/auth';
import { useEffect } from "react";


export default function Create() {
  const router = useRouter();

  useEffect(() => {
  
      // Check if user is not logged in, redirect to login page
      if (!isLoggedIn()) {
        router.push('/login');
        console.log("User isn't logged in")
      }
    }, []);
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-gray-50">
        <div className="grid grid-cols-3 md:grid-cols-6">
          <div className="col-span-3">
            <ResumeForm />
          </div>
          <div className="col-span-3">
            <Resume />
          </div>
        </div>
      </main>
    </Provider>
  );
}
