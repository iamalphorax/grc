import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { Gallery } from '../components/Gallery';
import { CtaBanner } from '../components/CtaBanner';
import { CLEANING_IMAGES } from '../constants/images';
export function GalleryPage() {
  return <>
    <PageBanner title="Real spaces. Real sparkle." subtitle="A look at the meticulous results we deliver in homes and offices across New Jersey." backgroundImage={CLEANING_IMAGES[15]} breadcrumb="Gallery" />
    <Gallery />
    <CtaBanner />
  </>;
}