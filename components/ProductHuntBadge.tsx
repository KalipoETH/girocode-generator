'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BADGE_URL =
  'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1090895&theme=dark&t=1772743698922';
const HREF =
  'https://www.producthunt.com/products/girocode-generator?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-girocode-generator';

export function ProductHuntBadge() {
  return (
    <Link
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block opacity-80 transition-opacity hover:opacity-100"
      aria-label="GiroCode Generator on Product Hunt"
    >
      <Image
        src={BADGE_URL}
        alt="GiroCode Generator on Product Hunt"
        width={250}
        height={54}
        unoptimized
        className="h-auto w-[200px] md:w-[250px]"
      />
    </Link>
  );
}
