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
import XMLPlayground from "@/components/compiler/XMLPlayground";
import JSONPlayground from "@/components/compiler/JSONPlayground";
import NodeJSPlayground from "@/components/compiler/NodeJSPlayground";
import ASPPlayground from "@/components/compiler/ASPPlayground";
import SecurityLab from "@/components/compiler/SecurityLab";
import AwsConsoleLab from "@/components/compiler/AwsConsoleLab";
import MachineLearningLab from "@/components/compiler/MachineLearningLab";
import StatisticsLab from "@/components/compiler/StatisticsLab";
import RWDPlayground from "@/components/compiler/RWDPlayground";
import AJAXPlayground from "@/components/compiler/AJAXPlayground";
import RustPlayground from "@/components/compiler/RustPlayground";
import MatplotlibLab from "@/components/compiler/MatplotlibLab";
import EncodingLab from "@/components/compiler/EncodingLab";
import RaspberryPiLab from "@/components/compiler/RaspberryPiLab";
import { AIPlayground } from "@/components/compiler/AIPlayground";
import { GenAIPlayground } from "@/components/compiler/GenAIPlayground";
import { ProgrammingPlayground } from "@/components/compiler/ProgrammingPlayground";
import { AccessibilityPlayground } from "@/components/compiler/AccessibilityPlayground";
import { HTMLCSSPlayground } from "@/components/compiler/HTMLCSSPlayground";
import { CodeGamePlayground } from "@/components/compiler/CodeGamePlayground";
import { SpreadsheetPlayground } from "@/components/compiler/SpreadsheetPlayground";
import { TypingPlayground } from "@/components/compiler/TypingPlayground";
import { SVGPlayground } from "@/components/compiler/SVGPlayground";
import { IconsPlayground } from "@/components/compiler/IconsPlayground";

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

  if (track === "xml") {
    return <XMLPlayground />;
  }

  if (track === "json") {
    return <JSONPlayground />;
  }

  if (track === "nodejs") {
    return <NodeJSPlayground />;
  }

  if (track === "asp") {
    return <ASPPlayground />;
  }

  if (track === "cybersecurity") {
    return <SecurityLab />;
  }

  if (track === "aws") {
    return <AwsConsoleLab />;
  }

  if (track === "machinelearning") {
    return <MachineLearningLab />;
  }

  if (track === "statistic") {
    return <StatisticsLab />;
  }

  if (track === "rwd") {
    return <RWDPlayground />;
  }

  if (track === "ajax") {
    return <AJAXPlayground />;
  }

  if (track === "rust") {
    return <RustPlayground />;
  }

  if (track === "matplotlib") {
    return <MatplotlibLab />;
  }

  if (track === "unicode_utf8") {
    return <EncodingLab />;
  }

  if (track === "raspberry_pi") {
    return <RaspberryPiLab />;
  }

  if (track === "ai") {
    return <AIPlayground />;
  }

  if (track === "genai") {
    return <GenAIPlayground />;
  }

  if (track === "intro-programming") {
    return <ProgrammingPlayground />;
  }

  if (track === "accessibility") {
    return <AccessibilityPlayground />;
  }

  if (track === "intro-html-css") {
    return <HTMLCSSPlayground />;
  }

  if (track === "codegame") {
    return <CodeGamePlayground />;
  }

  if (track === "google-sheets") {
    return <SpreadsheetPlayground />;
  }

  if (track === "typing-speed") {
    return <TypingPlayground />;
  }

  if (track === "svg") {
    return <SVGPlayground />;
  }

  if (track === "icons") {
    return <IconsPlayground />;
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
