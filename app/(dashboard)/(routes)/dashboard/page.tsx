'use client';

import { ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TOOLS } from '@/constants';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Explore PixelGenius
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          The most powerful tool for web developers - Experience the power of AI
        </p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {TOOLS.map((tool) => (
          <Card
            key={tool.href}
            className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
            onClick={() => router.push(tool.href)}
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('h-8 w-8', tool.color)} />
              </div>
              <div className='font-semibold'>{tool.label}</div>
            </div>
            <ArrowRightIcon className='h-5 w-5' />
          </Card>
        ))}
      </div>
    </div>
  );
}
