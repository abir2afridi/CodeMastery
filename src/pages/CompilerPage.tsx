import { useSearchParams } from "react-router-dom";
import { FullCompiler } from "@/components/compiler/FullCompiler";
import { PythonCompiler } from "@/components/compiler/PythonCompiler";
import { TypeScriptCompiler } from "@/components/compiler/TypeScriptCompiler";
import { CCompiler } from "@/components/compiler/CCompiler";
import { CppCompiler } from "@/components/compiler/CppCompiler";
import { JavaCompiler } from "@/components/compiler/JavaCompiler";
import { CSharpCompiler } from "@/components/compiler/CSharpCompiler";
import { PhpCompiler } from "@/components/compiler/PhpCompiler";
import SQLCompiler from "@/components/compiler/SQLCompiler";
import MySQLCompiler from "@/components/compiler/MySQLCompiler";
import AngularCompiler from "@/components/compiler/AngularCompiler";

const CompilerPage = () => {
  const [params] = useSearchParams();
  const track = params.get("track");

  if (track === "python") {
    return <PythonCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "typescript") {
    return <TypeScriptCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "c") {
    return <CCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "cpp") {
    return <CppCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "java") {
    return <JavaCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "csharp") {
    return <CSharpCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "php") {
    return <PhpCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "sql") {
    return <SQLCompiler />;
  }

  if (track === "mysql") {
    return <MySQLCompiler />;
  }

  if (track === "angular") {
    return <AngularCompiler />;
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
