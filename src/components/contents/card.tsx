import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContentCard = ({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content: string;
}) => {
  return (
    <Card className="flex-grow w-full hover:bg-gray-100 transition-colors duration-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
