'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react'; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { HonestChart } from '@/components/HonestChart';


export default function Home() {
  return (
    < >
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <section className="mb-5 md:mb-8">
              <h1 className="text-3xl md:text-5xl font-bold">
                Explore the Realm of  Honest Feedback
              </h1>
              <p className="mt-3 md:mt-4">
                HonestEcho - Empowering improvement through honest feedback.
              </p>
            </section>

            {/* Carousel for Messages */}
            <Carousel
              plugins={[Autoplay({ delay: 2000 })]}
              className="w-full max-w-lg md:max-w-xl"
            >
              <CarouselContent>
                {messages.map((message, index) => (
                  <CarouselItem key={index} className="p-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>{message.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                        <Mail className="flex-shrink-0" />
                        <div>
                          <p>{message.content}</p>
                          <p className="text-xs text-muted-foreground">
                            {message.received}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Chart */}
          <div className="md:pl-5">
            <HonestChart />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
        © 2024 HonestEcho. All rights reserved.
      </footer>
    </>
  );
}