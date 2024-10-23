import Link from "next/link";
import React from "react";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-12 border-b-2 border-gray-200 pb-6">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const ProjectCard = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => (
  <div className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition duration-300 flex">
    <div className="flex-grow">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
    <img
      src={imageSrc}
      alt={title}
      className="w-40 h-40 object-contain ml-4 rounded-md"
    />
  </div>
);

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Section title={"김동한"}>
        <p className="text-lg">
          <strong className="text-primary">디지털 마케팅 전문가</strong> |
          콘텐츠 크리에이터 | 트래픽 성장 전략가
        </p>
        <div className="flex space-x-4 mt-4">
          <Link
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.youtube.com/your-youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800"
          >
            YouTube
          </Link>
          <Link
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            Instagram
          </Link>
        </div>
      </Section>

      <Section title="소개">
        <p className="text-lg">
          안녕하세요, 저는 디지털 마케팅과 콘텐츠 제작에 열정을 가진{" "}
          <strong className="text-primary">김동한</strong>입니다. 소셜 미디어
          플랫폼에서의 트래픽 증대와 브랜드 인지도 향상에 특화된 전략을 개발하고
          실행합니다.
        </p>
      </Section>

      <Section title="경력">
        <ul className="list-disc list-inside text-lg">
          <li>디지털 마케팅 에이전시 - 선임 마케팅 매니저 (2026 - 현재)</li>
          <li>프리랜서 콘텐츠 크리에이터 (2023.05 - 2024.07)</li>
          <li>
            소셜 미디어 마케팅 회사 - 주니어 마케터 인턴 (2023.05-2024.07)
          </li>
          <li>육군 장교 (2018.03-2024.01)</li>
        </ul>
      </Section>

      <Section title="주요 프로젝트">
        <div className="space-y-6 flex flex-col gap-y-4">
          <Link
            href="https://www.youtube.com/watch?v=3nJ6wn5A09g"
            target="_blank"
          >
            <ProjectCard
              title="유튜브 채널 성장 프로젝트"
              description="클라이언트의 유튜브 채널을 6개월 만에 구독자 10만 명에서 100만 명으로 성장시켰습니다. 최적화된 콘텐츠 전략과 SEO 기법을 통해 월간 조회수를 500만에서 5000만으로 증가시켰습니다."
              imageSrc="https://img.youtube.com/vi/3nJ6wn5A09g/0.jpg"
            />
          </Link>
          <Link
            href="https://www.instagram.com/p/DAqlCfjSCxY/?img_index=1"
            target="_blank"
          >
            <ProjectCard
              title="인스타그램 인플루언서 마케팅 캠페인"
              description="패션 브랜드를 위한 인스타그램 캠페인을 통해 3개월 동안 팔로워를 50만 명 증가시켰습니다. 인플루언서 협업과 타겟팅된 광고로 engagement rate를 8%에서 15%로 향상시켰습니다."
              imageSrc="https://lnwblzacktgzeiihvxtu.supabase.co/storage/v1/object/public/contents/prod/insta.jpg-1308815"
            />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
