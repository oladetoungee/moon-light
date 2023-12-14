import { Default } from "@/app/server/nativeSelect/examples/Default";
import { ExampleSection } from "@/components/exampleSection/ExampleSection";
import { QuickNav } from "@/components/QuickNav";
import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";

export default async function NativeSelect() {
  const { server } = await getExamples();
  const examplesList = Object.keys(server.nativeSelect.examples);
  return (
    <div className="w-full max-w-3xl flex flex-col gap-12 text-moon-14">
      <h1 className="font-medium text-moon-32">NativeSelect</h1>
      <MDX markdown={server.nativeSelect.description} />
      <QuickNav items={examplesList} />
      <ExampleSection
        title="Default"
        component={<Default />}
        code={server.nativeSelect.examples.Default}
      />
    </div>
  );
}
