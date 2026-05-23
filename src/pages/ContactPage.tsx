import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { Contact } from '../components/Contact';
import { CLEANING_IMAGES } from '../constants/images';
export function ContactPage() {
  return <>
    <PageBanner title="Let's get your space sparkling." subtitle="Text us for the fastest response — usually within the hour." backgroundImage={CLEANING_IMAGES[14]} breadcrumb="Contact" />
    <Contact />
  </>;
}