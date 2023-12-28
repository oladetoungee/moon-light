import React from "react";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";

import dynamic from "next/dynamic";

import { Loader } from "@heathmont/moon-base-tw";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import { tagsInputProps, tagsInputSelectedPropsItems } from "./props";
import image from "./tagsinput.webp";
import { PropsTable } from "@/components/propsTable";
import { Anatomy } from "@/components/Anatomy";

const TITLE = "TagsInput";
const ordered: string[] = [
  "Default",
  "DifferentSizes",
  "States",
  "UppercaseLowercase",
];

export default async function AuthCodePage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      tagsInput: {
        description,
        descriptions: exampleDescriptions,
        examples,
        anatomy,
      },
    },
  } = await getExamples();

  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/tagsInput/examples/${searchParam}`),
      {
        loading: () => <Loader />,
        ssr: false,
      },
    );
    return (
      <div className="p-4" id="playwright-test">
        <Component />
      </div>
    );
  }

  return (
    <MainLayout
      isMockup={isMockup}
      componentName="tagsInput"
      contentSidebar={ordered}
    >
      <div className="flex flex-col gap-4 text-moon-14 pb-20">
        <PageHeadComponent
          title={TITLE}
          description={description}
          tags={["IN PROGRESS", "ARIA", "RTL"]}
          image={image}
        />
        <ExampleSectionData
          componentName="tagsInput"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        <Anatomy anatomy={anatomy} />
        <PropsTable
          title="TagsInput props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">TagsInput</span> component:
            </p>
          }
          data={tagsInputProps}
        />
        <PropsTable
          title="TagsInput props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">TagsInput</span> component:
            </p>
          }
          data={tagsInputSelectedPropsItems}
        />
      </div>
    </MainLayout>
  );
}
