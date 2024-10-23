import ContentCard from "@/components/contents/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen px-40">
      <section className="flex flex-col items-center justify-center h-1/2 rounded-3xl bg-slate-200">
        <Input
          type="text"
          placeholder="컨텐츠 검색"
          className="w-1/2 h-16 p-4 mb-5 border border-gray-300 rounded-full"
        />
        <div className="flex justify-around w-1/2">
          <Button className="px-4 py-2 rounded-full">컨텐츠 추가</Button>
          <Button className="px-4 py-2 rounded-full">컨텐츠 삭제</Button>
          <Button className="px-4 py-2 rounded-full">컨텐츠 수정</Button>
          <Button className="px-4 py-2 rounded-full">컨텐츠 조회</Button>
        </div>
      </section>

      <section className="flex flex-col ">
        <h2 className="text-4xl font-bold">리스트</h2>

        <div className="flex flex-wrap gap-4">
          {DUMMY_CONTENTS.map((content) => (
            <ContentCard key={content.title} {...content} />
          ))}
        </div>
      </section>
    </main>
  );
}

const DUMMY_CONTENTS = [
  {
    title: "콘텐츠 1번",
    description: "설명 1",
    content: "컨텐츠 1",
  },
  {
    title: "콘텐츠 2번",
    description: "설명 2",
    content: "컨텐츠 2",
  },
  {
    title: "콘텐츠 3번",
    description: "설명 3",
    content: "컨텐츠 3",
  },
  {
    title: "콘텐츠 4번",
    description: "설명 4",
    content: "컨텐츠 4",
  },
];
