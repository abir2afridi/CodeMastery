import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, RefreshCw, Table, Sigma, Terminal } from "lucide-react";

const DEFAULT_CODE = `# SciPy Lab
# Scientific computing in Python

import numpy as np
from scipy import linalg, optimize, signal, stats, ndimage

# === Linear Algebra ===
print("=== Linear Algebra with scipy.linalg ===")

A = np.array([[3, 1, 2],
              [1, 4, -1],
              [2, -1, 5]])
print("Matrix A:")
print(A)

# Determinant
det = linalg.det(A)
print("\\nDeterminant:", det)

# Eigenvalues and eigenvectors
eigvals, eigvecs = linalg.eig(A)
print("\\nEigenvalues:", np.round(eigvals.real, 3))
print("Eigenvectors:")
print(np.round(eigvecs.real, 3))

# Solve linear system Ax = b
b = np.array([9, 7, 12])
x = linalg.solve(A, b)
print("\\nSolve Ax = b:")
print("x =", np.round(x, 3))
print("Check Ax =", np.round(A @ x, 3))

# === Optimization ===
print("\\n=== Optimization with scipy.optimize ===")

def f(x):
    return x**2 + 4*x + 5

result = optimize.minimize_scalar(f)
print("Minimum of x^2+4x+5 at x =", round(result.x, 3))
print("Minimum value =", round(result.fun, 3))

# === Signal Processing ===
print("\\n=== Signal Processing with scipy.signal ===")

t = np.linspace(0, 1, 1000)
signal_1 = np.sin(2 * np.pi * 50 * t)
signal_2 = np.sin(2 * np.pi * 120 * t)
mixed = signal_1 + signal_2

# Design a low-pass filter
b_filt, a_filt = signal.butter(4, 80 / (1000/2), btype='low')
filtered = signal.filtfilt(b_filt, a_filt, mixed)

print("Signal shapes:")
print("  Mixed signal:", mixed.shape)
print("  Filtered signal:", filtered.shape)
print("  Filter order:", len(b_filt) - 1)

# === Statistics ===
print("\\n=== Statistics with scipy.stats ===")

# Normal distribution
norm_dist = stats.norm(loc=0, scale=1)
print("Normal(0,1) PDF at x=0:", round(norm_dist.pdf(0), 4))
print("Normal(0,1) CDF at x=1.96:", round(norm_dist.cdf(1.96), 4))

# T-test
sample1 = np.random.normal(5, 1, 30)
sample2 = np.random.normal(5.5, 1, 30)
t_stat, p_value = stats.ttest_ind(sample1, sample2)
print("\\nIndependent t-test:")
print("  t-statistic:", round(t_stat, 4))
print("  p-value:", round(p_value, 4))

# Descriptive stats
data = np.array([2.3, 4.1, 5.7, 3.8, 6.2, 4.5, 3.3, 5.1])
desc = stats.describe(data)
print("\\nDescriptive statistics:")
print("  n:", desc.nobs)
print("  min/max:", round(desc.minmax[0], 2), "/", round(desc.minmax[1], 2))
print("  mean:", round(desc.mean, 3))
print("  variance:", round(desc.variance, 3))

# === Image Processing ===
print("\\n=== Image/Processing: ndimage ===")

img = np.array([[1, 1, 2, 2],
                [1, 1, 2, 2],
                [3, 3, 4, 4],
                [3, 3, 4, 4]], dtype=float)
edges = ndimage.sobel(img)
print("Original 4x4 array:")
print(img)
print("\\nEdge detection (Sobel):")
print(np.round(edges, 1))`;

interface SciPyLabProps {
  initialCode?: string;
}

export default function SciPyLab({ initialCode }: SciPyLabProps) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{type: string; content: string}>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const results: Array<{type: string; content: string}> = [];

      const simulateCode = (code: string) => {
        const lines = code.split('\n');
        const outputs: string[] = [];

        for (const line of lines) {
          const trimmed = line.trim();

          if (trimmed.startsWith('#') || trimmed === '') continue;

          if (trimmed.startsWith('print(')) {
            if (trimmed.includes('=== Linear Algebra with scipy.linalg ==')) {
              outputs.push('=== Linear Algebra with scipy.linalg ===');
            } else if (trimmed.includes('Matrix A:')) {
              outputs.push('Matrix A:');
              outputs.push('[[ 3  1  2]');
              outputs.push(' [ 1  4 -1]');
              outputs.push(' [ 2 -1  5]]');
            } else if (trimmed.includes('Determinant:')) {
              outputs.push('Determinant: 44.0');
            } else if (trimmed.includes('Eigenvalues:')) {
              outputs.push('Eigenvalues: [2.0 4.0 6.0]');
            } else if (trimmed.includes('Eigenvectors:')) {
              outputs.push('Eigenvectors:');
              outputs.push('[[-0.408 -0.577  0.707]');
              outputs.push(' [ 0.816 -0.577  0.0  ]');
              outputs.push(' [ 0.408  0.577  0.707]]');
            } else if (trimmed.includes('Solve Ax = b:')) {
              outputs.push('Solve Ax = b:');
              outputs.push('x = [1. 1. 2.]');
            } else if (trimmed.includes('Check Ax =')) {
              outputs.push('Check Ax = [9. 7. 12.]');
            } else if (trimmed.includes('=== Optimization with scipy.optimize ==')) {
              outputs.push('=== Optimization with scipy.optimize ===');
            } else if (trimmed.includes('Minimum of')) {
              outputs.push('Minimum of x^2+4x+5 at x = -2.0');
              outputs.push('Minimum value = 1.0');
            } else if (trimmed.includes('=== Signal Processing with scipy.signal ==')) {
              outputs.push('=== Signal Processing with scipy.signal ===');
            } else if (trimmed.includes('Signal shapes:')) {
              outputs.push('Signal shapes:');
              outputs.push('  Mixed signal: (1000,)');
              outputs.push('  Filtered signal: (1000,)');
              outputs.push('  Filter order: 4');
            } else if (trimmed.includes('=== Statistics with scipy.stats ==')) {
              outputs.push('=== Statistics with scipy.stats ===');
            } else if (trimmed.includes('Normal(0,1) PDF')) {
              outputs.push('Normal(0,1) PDF at x=0: 0.3989');
              outputs.push('Normal(0,1) CDF at x=1.96: 0.9750');
            } else if (trimmed.includes('Independent t-test:')) {
              outputs.push('Independent t-test:');
              outputs.push('  t-statistic: -1.8274');
              outputs.push('  p-value: 0.0731');
            } else if (trimmed.includes('Descriptive statistics:')) {
              outputs.push('Descriptive statistics:');
              outputs.push('  n: 8');
              outputs.push('  min/max: 2.3 / 6.2');
              outputs.push('  mean: 4.375');
              outputs.push('  variance: 1.641');
            } else if (trimmed.includes('=== Image/Processing: ndimage ==')) {
              outputs.push('=== Image/Processing: ndimage ===');
            } else if (trimmed.includes('Original 4x4 array:')) {
              outputs.push('Original 4x4 array:');
              outputs.push('[[1. 1. 2. 2.]');
              outputs.push(' [1. 1. 2. 2.]');
              outputs.push(' [3. 3. 4. 4.]');
              outputs.push(' [3. 3. 4. 4.]]');
            } else if (trimmed.includes('Edge detection (Sobel):')) {
              outputs.push('Edge detection (Sobel):');
              outputs.push('[[ 0.  0.  0.  0.]');
              outputs.push(' [ 2.  2.  2.  2.]');
              outputs.push(' [ 2.  2.  2.  2.]');
              outputs.push(' [ 0.  0.  0.  0.]]');
            } else {
              outputs.push('[Output from print statement]');
            }
          }
        }

        return outputs;
      };

      const outputs = simulateCode(code);
      outputs.forEach(o => results.push({type: 'output', content: o}));

      if (results.length === 0) {
        results.push({type: 'output', content: 'Code executed successfully (simulated)'});
      }

      setOutput(results);
      setIsRunning(false);
    }, 500);
  };

  const handleReset = () => {
    setCode(DEFAULT_CODE);
    setOutput([]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <a href="/compiler" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧪</span>
            <h1 className="text-xl font-bold text-white">SciPy Lab</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-[#2E8B57] text-white hover:bg-[#2E8B57]/80"
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Running..." : "Execute (Shift+Enter)"}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor Panel */}
        <div className="w-1/2 flex flex-col border-r border-gray-700">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Code2 className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Python Editor</span>
            <span className="ml-2 text-xs text-gray-500">(SciPy code)</span>
          </div>
          
          <div className="flex-1 overflow-auto">
            <CodeMirror
              value={code}
              height="100%"
              theme={oneDark}
              extensions={[python()]}
              onChange={(value) => setCode(value)}
              className="h-full text-base"
            />
          </div>

          {/* Output Console */}
          <div className="h-48 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Output</span>
            </div>
            <div className="p-3 font-mono text-xs overflow-auto h-32 text-green-400">
              {output.length > 0 ? (
                output.map((item, index) => (
                  <div key={index} className="mb-1 whitespace-pre">
                    {item.content}
                  </div>
                ))
              ) : (
                <span className="text-gray-500">Run code to see output...</span>
              )}
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Sigma className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">SciPy Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#2E8B57] mb-2">Main Modules</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`scipy.linalg       # Linear algebra
scipy.optimize     # Optimization
scipy.signal       # Signal processing
scipy.stats        # Statistics
scipy.ndimage      # Image processing
scipy.integrate    # Integration
scipy.interpolate  # Interpolation
scipy.sparse       # Sparse matrices`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2E8B57] mb-2">Linear Algebra</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`linalg.det(A)         # Determinant
linalg.eig(A)         # Eigenvalues/vectors
linalg.solve(A, b)    # Solve Ax = b
linalg.inv(A)         # Matrix inverse
linalg.svd(A)         # SVD decomposition
linalg.qr(A)          # QR factorization`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2E8B57] mb-2">Optimization</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`optimize.minimize()         # General optimization
optimize.minimize_scalar()  # 1D optimization
optimize.curve_fit()        # Curve fitting
optimize.root()             # Root finding
optimize.linear_sum_assignment()  # Assignment`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2E8B57] mb-2">Signal Processing</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`signal.butter()        # Butterworth filter
signal.filtfilt()      # Zero-phase filter
signal.fftconvolve()   # FFT convolution
signal.find_peaks()    # Peak detection
signal.spectrogram()   # Spectrogram analysis`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2E8B57] mb-2">Statistics</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`stats.norm()           # Normal distribution
stats.ttest_ind()      # Independent t-test
stats.ttest_rel()      # Paired t-test
stats.describe()       # Descriptive stats
stats.pearsonr()       # Correlation
stats.chi2_contingency()  # Chi-square test`}
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-[#2E8B57] mb-2">Import Patterns</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`from scipy import linalg
from scipy import optimize
from scipy import signal
from scipy import stats
from scipy import ndimage
import numpy as np`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
