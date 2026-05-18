import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Cloud, Server, HardDrive, Database,
  Shield, DollarSign, Activity, RefreshCw, Download,
  Globe, CheckCircle, XCircle, AlertTriangle, BarChart3
} from "lucide-react";

interface Instance {
  id: string; name: string; type: string; state: string;
  az: string; privateIp: string; publicIp: string;
}

interface Bucket {
  name: string; region: string; size: string; objects: number;
  public: boolean;
}

const INSTANCES: Instance[] = [
  { id: "i-0a1b2c3d", name: "web-server-1", type: "t3.medium", state: "running", az: "us-east-1a", privateIp: "10.0.1.10", publicIp: "54.89.12.34" },
  { id: "i-0e5f6g7h", name: "web-server-2", type: "t3.medium", state: "running", az: "us-east-1b", privateIp: "10.0.2.10", publicIp: "54.89.56.78" },
  { id: "i-0i9j0k1l", name: "app-server-1", type: "t3.large", state: "running", az: "us-east-1a", privateIp: "10.0.1.20", publicIp: "-" },
  { id: "i-0m2n3o4p", name: "db-server-1", type: "r5.large", state: "running", az: "us-east-1a", privateIp: "10.0.1.30", publicIp: "-" },
  { id: "i-0q5r6s7t", name: "build-agent", type: "c5.xlarge", state: "stopped", az: "us-east-1c", privateIp: "10.0.3.10", publicIp: "-" },
];

const BUCKETS: Bucket[] = [
  { name: "my-app-static-assets", region: "us-east-1", size: "45.2 GB", objects: 12830, public: false },
  { name: "my-app-logs", region: "us-east-1", size: "12.8 GB", objects: 4560, public: false },
  { name: "my-app-backups", region: "us-east-1", size: "256.0 GB", objects: 180, public: false },
  { name: "my-app-cdn-origin", region: "us-east-1", size: "8.3 GB", objects: 2450, public: false },
  { name: "data-lake-raw", region: "us-west-2", size: "1.2 TB", objects: 52000, public: false },
];

const SERVICES = [
  { name: "EC2", icon: Server, count: "5 instances", status: "healthy" as const },
  { name: "S3", icon: HardDrive, count: "5 buckets", status: "healthy" as const },
  { name: "RDS", icon: Database, count: "2 databases", status: "healthy" as const },
  { name: "Lambda", icon: Globe, count: "8 functions", status: "healthy" as const },
  { name: "ELB", icon: Activity, count: "2 load balancers", status: "healthy" as const },
  { name: "CloudFront", icon: Cloud, count: "1 distribution", status: "healthy" as const },
];

const REGIONS = [
  "us-east-1 (N. Virginia)", "us-west-2 (Oregon)", "eu-west-1 (Ireland)",
  "eu-central-1 (Frankfurt)", "ap-southeast-1 (Singapore)", "ap-northeast-1 (Tokyo)",
];

export default function AwsConsoleLab() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [instances, setInstances] = useState<Instance[]>(INSTANCES);
  const [buckets] = useState<Bucket[]>(BUCKETS);
  const [ec2Cpu, setEc2Cpu] = useState(42);
  const [costInputs, setCostInputs] = useState({
    ec2Hours: 720, ec2Count: 5, ec2Type: "t3.medium",
    s3Storage: 500, s3Transfer: 100,
    lambdaRequests: 1000000, lambdaMemory: 512,
  });
  const [costResult, setCostResult] = useState(0);
  const [iamUserId, setIamUserId] = useState("alice");
  const [iamPolicy, setIamPolicy] = useState(`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:ListBucket"],
      "Resource": ["arn:aws:s3:::my-app-logs/*"]
    }
  ]
}`);
  const [iamResult, setIamResult] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setEc2Cpu(Math.floor(30 + Math.random() * 40));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startInstance = (id: string) => {
    setInstances(prev => prev.map(i => i.id === id ? { ...i, state: "running" } : i));
  };
  const stopInstance = (id: string) => {
    setInstances(prev => prev.map(i => i.id === id ? { ...i, state: "stopped" } : i));
  };

  const instancePrice = (type: string) => {
    const prices: Record<string, number> = {
      "t3.nano": 0.0052, "t3.micro": 0.0104, "t3.small": 0.0208,
      "t3.medium": 0.0416, "t3.large": 0.0832, "t3.xlarge": 0.1664,
      "r5.large": 0.126, "c5.xlarge": 0.17,
    };
    return prices[type] || 0.06;
  };

  const calculateCost = () => {
    const ec2Rate = instancePrice(costInputs.ec2Type);
    const ec2Cost = ec2Rate * costInputs.ec2Hours * costInputs.ec2Count;
    const s3StorageCost = costInputs.s3Storage * 0.023;
    const s3TransferCost = costInputs.s3Transfer * 0.09;
    const lambdaCost = (costInputs.lambdaRequests / 1000000) * 0.20 +
      (costInputs.lambdaRequests / 1000000) * (costInputs.lambdaMemory / 1024) * 0.0000166667 * 200;
    setCostResult(Math.round((ec2Cost + s3StorageCost + s3TransferCost + lambdaCost) * 100) / 100);
  };

  const evaluateIam = () => {
    try {
      const parsed = JSON.parse(iamPolicy);
      if (parsed.Statement) {
        const actions = parsed.Statement.flatMap((s: any) => s.Action || []);
        if (actions.includes("s3:GetObject")) {
          setIamResult("Policy allows S3 read access to my-app-logs bucket. User 'alice' can view log files. Principle of least privilege satisfied.");
        } else if (actions.includes("s3:*")) {
          setIamResult("WARNING: Policy grants full S3 access. This violates least privilege. Consider restricting to specific actions.");
        } else {
          setIamResult("Policy parsed successfully. No issues detected for the specified actions.");
        }
      } else {
        setIamResult("Error: No Statement found in policy.");
      }
    } catch {
      setIamResult("Error: Invalid JSON in policy document.");
    }
  };

  const runningCount = instances.filter(i => i.state === "running").length;
  const stoppedCount = instances.filter(i => i.state === "stopped").length;

  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Cloud className="w-6 h-6 text-[#FF9900]" />
          <h1 className="text-xl md:text-2xl font-bold text-[#FF9900]">AWS Management Console</h1>
          <span className="text-xs text-gray-500 ml-auto">Simulated Environment · No Actual Billing</span>
        </div>

        <div className="flex gap-1 mb-6 overflow-x-auto pb-2 border-b border-gray-800">
          {["Dashboard", "EC2", "S3", "Cost Calculator", "IAM Simulator"].map((t, i) => (
            <button key={i} onClick={() => setTab(i)}
              className={`px-4 py-2 text-sm whitespace-nowrap rounded-t transition-colors ${
                tab === i ? "bg-gray-900 text-[#FF9900] border-b-2 border-[#FF9900]" : "text-gray-500 hover:text-gray-300"
              }`}>{t}</button>
          ))}
        </div>

        {/* Dashboard */}
        {tab === 0 && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {SERVICES.map((svc, i) => (
                <div key={i} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <svc.icon className="w-5 h-5 text-[#FF9900] mb-2" />
                  <div className="text-[#FF9900] font-bold text-lg">{svc.name}</div>
                  <div className="text-xs text-gray-400">{svc.count}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400">{svc.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <h3 className="text-[#FF9900] font-bold mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Resource Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-gray-400">Running Instances</div>
                  <div className="text-xl font-bold text-green-400">{runningCount}</div>
                </div>
                <div>
                  <div className="text-gray-400">Stopped Instances</div>
                  <div className="text-xl font-bold text-yellow-400">{stoppedCount}</div>
                </div>
                <div>
                  <div className="text-gray-400">Total S3 Storage</div>
                  <div className="text-xl font-bold text-[#FF9900]">~1.5 TB</div>
                </div>
                <div>
                  <div className="text-gray-400">Estimated Monthly Cost</div>
                  <div className="text-xl font-bold text-[#FF9900]">~$1,247.32</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <h3 className="text-[#FF9900] font-bold mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Region
              </h3>
              <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200">
                {REGIONS.map((r, i) => <option key={i}>{r}</option>)}
              </select>
            </div>
          </div>
        )}

        {/* EC2 Console */}
        {tab === 1 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[#FF9900] font-bold flex items-center gap-2">
                <Server className="w-4 h-4" /> EC2 Instances
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>CPU: <span className="text-[#FF9900]">{ec2Cpu}%</span></span>
                <RefreshCw className="w-3 h-3 animate-spin" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800 text-gray-400">
                    <th className="text-left py-2 px-2">Name</th>
                    <th className="text-left py-2 px-2">Instance ID</th>
                    <th className="text-left py-2 px-2">Type</th>
                    <th className="text-left py-2 px-2">State</th>
                    <th className="text-left py-2 px-2">AZ</th>
                    <th className="text-left py-2 px-2">Private IP</th>
                    <th className="text-left py-2 px-2">Public IP</th>
                    <th className="text-left py-2 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {instances.map((inst) => (
                    <tr key={inst.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                      <td className="py-2 px-2 text-[#FF9900]">{inst.name}</td>
                      <td className="py-2 px-2 text-gray-400">{inst.id}</td>
                      <td className="py-2 px-2">{inst.type}</td>
                      <td className="py-2 px-2">
                        {inst.state === "running" ? (
                          <span className="flex items-center gap-1 text-green-400">
                            <CheckCircle className="w-3 h-3" /> Running
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-yellow-400">
                            <XCircle className="w-3 h-3" /> Stopped
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-2 text-gray-400">{inst.az}</td>
                      <td className="py-2 px-2">{inst.privateIp}</td>
                      <td className="py-2 px-2">{inst.publicIp}</td>
                      <td className="py-2 px-2">
                        {inst.state === "running" ? (
                          <button onClick={() => stopInstance(inst.id)}
                            className="text-xs bg-yellow-600 hover:bg-yellow-700 px-2 py-1 rounded">Stop</button>
                        ) : (
                          <button onClick={() => startInstance(inst.id)}
                            className="text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded">Start</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* S3 Console */}
        {tab === 2 && (
          <div className="space-y-4">
            <h3 className="text-[#FF9900] font-bold flex items-center gap-2">
              <HardDrive className="w-4 h-4" /> S3 Buckets
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800 text-gray-400">
                    <th className="text-left py-2 px-2">Bucket Name</th>
                    <th className="text-left py-2 px-2">Region</th>
                    <th className="text-left py-2 px-2">Size</th>
                    <th className="text-left py-2 px-2">Objects</th>
                    <th className="text-left py-2 px-2">Public Access</th>
                  </tr>
                </thead>
                <tbody>
                  {buckets.map((b, i) => (
                    <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                      <td className="py-2 px-2 text-[#FF9900]">{b.name}</td>
                      <td className="py-2 px-2 text-gray-400">{b.region}</td>
                      <td className="py-2 px-2">{b.size}</td>
                      <td className="py-2 px-2">{b.objects.toLocaleString()}</td>
                      <td className="py-2 px-2">
                        {b.public ? (
                          <span className="flex items-center gap-1 text-red-400">
                            <AlertTriangle className="w-3 h-3" /> Public
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-green-400">
                            <CheckCircle className="w-3 h-3" /> Private
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-xs text-gray-500 p-3 bg-gray-900 rounded border border-gray-800">
              All buckets have Block Public Access enabled. Encryption is active with SSE-S3 or SSE-KMS.
            </div>
          </div>
        )}

        {/* Cost Calculator */}
        {tab === 3 && (
          <div className="space-y-4">
            <h3 className="text-[#FF9900] font-bold flex items-center gap-2">
              <DollarSign className="w-4 h-4" /> AWS Cost Calculator
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 space-y-3">
                <h4 className="text-sm font-bold text-gray-300">EC2</h4>
                <div>
                  <label className="text-xs text-gray-400">Hours per month</label>
                  <input type="number" value={costInputs.ec2Hours} onChange={e => setCostInputs({...costInputs, ec2Hours: +e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-400">Instance count</label>
                  <input type="number" value={costInputs.ec2Count} onChange={e => setCostInputs({...costInputs, ec2Count: +e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-400">Instance type</label>
                  <select value={costInputs.ec2Type} onChange={e => setCostInputs({...costInputs, ec2Type: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm">
                    {["t3.nano","t3.micro","t3.small","t3.medium","t3.large","t3.xlarge","r5.large","c5.xlarge"].map(t =>
                      <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <h4 className="text-sm font-bold text-gray-300 mt-4">S3</h4>
                <div>
                  <label className="text-xs text-gray-400">Storage (GB)</label>
                  <input type="number" value={costInputs.s3Storage} onChange={e => setCostInputs({...costInputs, s3Storage: +e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-400">Data transfer out (GB)</label>
                  <input type="number" value={costInputs.s3Transfer} onChange={e => setCostInputs({...costInputs, s3Transfer: +e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />
                </div>
                <h4 className="text-sm font-bold text-gray-300 mt-4">Lambda</h4>
                <div>
                  <label className="text-xs text-gray-400">Requests per month</label>
                  <input type="number" value={costInputs.lambdaRequests} onChange={e => setCostInputs({...costInputs, lambdaRequests: +e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-gray-400">Memory (MB)</label>
                  <input type="number" value={costInputs.lambdaMemory} onChange={e => setCostInputs({...costInputs, lambdaMemory: +e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />
                </div>
                <Button onClick={calculateCost} className="w-full bg-[#FF9900] text-black hover:bg-orange-400 mt-2">
                  Calculate
                </Button>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex flex-col items-center justify-center">
                <DollarSign className="w-12 h-12 text-[#FF9900] mb-2" />
                <div className="text-4xl font-bold text-[#FF9900]">${costResult.toFixed(2)}</div>
                <div className="text-sm text-gray-400 mt-1">Estimated Monthly Cost</div>
                <div className="text-xs text-gray-500 mt-4 text-center max-w-xs">
                  Values are approximate. Actual costs vary by Region, duration, and usage patterns.
                  Use Reserved Instances or Savings Plans to save up to 72%.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* IAM Simulator */}
        {tab === 4 && (
          <div className="space-y-4">
            <h3 className="text-[#FF9900] font-bold flex items-center gap-2">
              <Shield className="w-4 h-4" /> IAM Policy Simulator
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 space-y-3">
                <div>
                  <label className="text-xs text-gray-400">IAM User</label>
                  <input value={iamUserId} onChange={e => setIamUserId(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm mt-1" />
                </div>
                <div>
                  <label className="text-xs text-gray-400">Policy Document (JSON)</label>
                  <textarea value={iamPolicy} onChange={e => setIamPolicy(e.target.value)}
                    className="w-full h-48 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-xs font-mono mt-1" />
                </div>
                <Button onClick={evaluateIam} className="w-full bg-[#FF9900] text-black hover:bg-orange-400">
                  Evaluate Policy
                </Button>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 space-y-3">
                <h4 className="text-sm font-bold text-gray-300">Evaluation Result</h4>
                <div className={`p-3 rounded text-sm ${iamResult.startsWith("Error") || iamResult.startsWith("WARNING") ? "bg-red-900/30 text-red-400" : "bg-green-900/30 text-green-400"}`}>
                  {iamResult || "Enter a policy and click Evaluate to check permissions."}
                </div>
                <div className="text-xs text-gray-500 mt-4 space-y-1">
                  <p><strong>Tip:</strong> Follow the principle of least privilege. Grant only the permissions needed.</p>
                  <p><strong>Example actions:</strong> s3:GetObject, ec2:DescribeInstances, lambda:InvokeFunction</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
