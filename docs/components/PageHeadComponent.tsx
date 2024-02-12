import { MDX } from "./MDX";
import TitleTags from "./TitleTags";
import type { TagTypes } from "@/types";

interface PageHeadComponentProps {
  title: string;
  description?: string;
  tags?: TagTypes[];
  name?: string;
}

export const PageHeadComponent = ({
  title,
  description,
  tags,
  name,
}: PageHeadComponentProps) => (
  <div>
    <h1 className="font-medium text-moon-32 pb-2">{title}</h1>
    {tags && <TitleTags className="mb-4" tags={tags} />}
    {description && <MDX markdown={description} />}
  </div>
);
