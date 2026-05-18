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
import VueCompiler from "@/components/compiler/VueCompiler";
import ReactCompiler from "@/components/compiler/ReactCompiler";
import KotlinCompiler from "@/components/compiler/KotlinCompiler";
import PostgresCompiler from "@/components/compiler/PostgresCompiler";
import JQueryCompiler from "@/components/compiler/JQueryCompiler";
import NumPyCompiler from "@/components/compiler/NumPyCompiler";
import PandasCompiler from "@/components/compiler/PandasCompiler";
import DjangoCompiler from "@/components/compiler/DjangoCompiler";
import RCompiler from "@/components/compiler/RCompiler";
import GoCompiler from "@/components/compiler/GoCompiler";
import SwiftCompiler from "@/components/compiler/SwiftCompiler";
import BashCompiler from "@/components/compiler/BashCompiler";
import SciPyLab from "@/components/compiler/SciPyLab";
import MongoDBStudio from "@/components/compiler/MongoDBStudio";
import ExcelStudio from "@/components/compiler/ExcelStudio";
import DSAVisualizerLab from "@/components/compiler/DSAVisualizerLab";

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

  if (track === "vue") {
    return <VueCompiler />;
  }

  if (track === "react") {
    return <ReactCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "kotlin") {
    return <KotlinCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "postgresql") {
    return <PostgresCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "jquery") {
    return <JQueryCompiler initialHtml={params.get("h") || undefined} initialCss={params.get("c") || undefined} initialJquery={params.get("code") || undefined} />;
  }

  if (track === "numpy") {
    return <NumPyCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "pandas") {
    return <PandasCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "django") {
    return <DjangoCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "r") {
    return <RCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "go") {
    return <GoCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "swift") {
    return <SwiftCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "bash") {
    return <BashCompiler initialCode={params.get("code") || undefined} />;
  }

  if (track === "scipy") {
    return <SciPyLab />;
  }

  if (track === "mongodb") {
    return <MongoDBStudio />;
  }

  if (track === "excel") {
    return <ExcelStudio />;
  }

  if (track === "dsa") {
    return <DSAVisualizerLab />;
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
