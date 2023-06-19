import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Ultimi Articoli" sources={['Medium']} />
        <AboutSection sectionId="about" heading="Descrizione di me" />
        <InterestsSection sectionId="details" heading="GPOI" />
        <ProjectsSection sectionId="features" heading="Progetti Scolastici" />
        <ContactSection sectionId="github" heading="Contatti" />
      </Page>
    </>
  );
}
