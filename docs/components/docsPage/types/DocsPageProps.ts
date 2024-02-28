import { PropsTableProp, TagTypes } from "@/types";
import { StaticImageData } from "next/image";

type DocsPageProps = {
  componentName: string;
  isMockup?: boolean;
  searchParam?: string;
  description?: string;
  title: string;
  ordered: string[];
  tags: TagTypes[];
  examples: Record<string, string>;
  descriptions: Record<string, string>;
  propsTable?: Record<string, PropsTableProp[]>;
  examplesAnatomy?: Record<string, string>;
  anatomy?: string;
  image?: StaticImageData;
};

export default DocsPageProps;