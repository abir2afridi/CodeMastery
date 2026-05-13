import { useSearchParams } from "react-router-dom";
import { FullCompiler } from "@/components/compiler/FullCompiler";
import { PythonCompiler } from "@/components/compiler/PythonCompiler";
import { TypeScriptCompiler } from "@/components/compiler/TypeScriptCompiler";

const CompilerPage = () => {
  const [params] = useSearchParams();
  const track = params.get("track");

  if (track === "python") {
    return <PythonCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "typescript") {
    return <TypeScriptCompiler initialCode={params.get("code") || undefined} />;
  }

  return (
    <FullCompiler
      initialHtml={params.get("h") || undefined}
      initialCss={params.get("c") || undefined}
      initialJs={params.get("j") || undefined}
    />
  );
};

export default CompilerPage;
