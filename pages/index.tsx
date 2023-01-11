import Head from "next/head";
import { GetStaticProps } from "next";
import { PageInfo, Project, Social } from "typings";

import { groq } from "next-sanity";
import { sanityClient } from "sanity";

// Import Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useRouter } from "next/router";
import { en, ge } from "translations";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageInfo, projects, socials }: Props) {
  const router = useRouter();
  const { locale } = router;

  const translations = locale === "en" ? en : ge;

  return (
    <div
      className={`desktop-snap ${locale === "ge" ? "fontArchyRegular" : ""}`}
    >
      <Head>
        <title>Gamisonia Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className="desktop-snap-start">
        <Header translations={translations} />
        <Hero pageInfo={pageInfo} />
      </div>

      <div className="desktop-snap-center">
        <Projects
          projects={projects}
          locale={locale}
          translations={translations}
        />
      </div>
      <div className="desktop-snap-center">
        <About
          pageInfo={pageInfo}
          translations={translations}
          locale={locale}
        />
      </div>
      <div className="desktop-snap-center">
        <Contact
          pageInfo={pageInfo}
          translations={translations}
          locale={locale}
        />
      </div>

      <div className="desktop-snap-end">
        <Footer socials={socials} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const pageInfoQuery = groq`
    *[_type == "pageInfo"][0] {
      "heroImage": heroImage,
      "aboutTitle": aboutTitle.${locale},
      "aboutInfo": aboutInfo.${locale},
      "aboutImage": aboutImage,
      "contactText": contactText.${locale},
    }
  `;

  const projectsQuery = groq`
    *[_type == "project"] | order(lower(name) asc) {
      "_id": _id,
      "name": name,
      "category": category,
      "title": title.${locale},
      "description": description.${locale},
      "image": image
    }
  `;

  const socialsQuery = groq`
    *[_type == "social"]
  `;

  const pageInfo = await sanityClient.fetch(pageInfoQuery);
  const projects = await sanityClient.fetch(projectsQuery);
  const socials = await sanityClient.fetch(socialsQuery);

  return {
    props: {
      pageInfo,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
