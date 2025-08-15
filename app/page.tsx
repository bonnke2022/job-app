import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main className="">
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={10}
          height={10}
          className="w-auto h-auto"
        />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-2 items-center">
        <div className="">
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            I am baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Button asChild className="mt-4">
            <Link className="text-white" href="/add-job">
              Get Started
            </Link>
          </Button>
        </div>
        <Image
          src="/assets/main.svg"
          alt="landing"
          className="hidden lg:block w-auto h-auto"
          width={200}
          height={200}
        />
      </section>
    </main>
  );
};

export default HomePage;
