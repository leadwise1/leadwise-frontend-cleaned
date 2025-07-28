
import Head from 'next/head';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Programs from '../components/Programs';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>LeadWise Foundation - Empowering the Silenced</title>
        <meta name="description" content="LeadWise Foundation empowers marginalized individuals through advocacy, education, and mentorship." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <ImpactStats />
      <Programs />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
