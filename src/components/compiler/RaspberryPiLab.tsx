import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "gpio" | "code" | "iot" | "circuit" | "smarthome";

const BRAND = "#C51A4A";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "gpio", label: "GPIO Lab", icon: "\u{1F50C}" },
  { id: "code", label: "Terminal", icon: "\u{1F4BB}" },
  { id: "iot", label: "IoT Dashboard", icon: "\u{1F4E1}" },
  { id: "circuit", label: "Electronics", icon: "\u{2699}\u{FE0F}" },
  { id: "smarthome", label: "Smart Home", icon: "\u{1F3E0}" },
];

function tabStyle(active: boolean) {
  return {
    borderColor: active ? BRAND : "transparent",
    color: active ? BRAND : "hsl(var(--foreground)/0.5)",
  };
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="h-px w-4 bg-foreground/20" />
      <span className="text-[9px] font-black tracking-[0.3em] text-foreground/40 uppercase">{children}</span>
    </div>
  );
}

// ── GPIO Pin Types ──
type PinState = "LOW" | "HIGH" | "PWM";

interface GPIOPin {
  num: number;
  name: string;
  mode: "IN" | "OUT" | "PWM";
  state: PinState;
  pwmValue: number;
  connectedTo?: string;
}

function createPins(): GPIOPin[] {
  const pinDefs = [
    [3, "GPIO2"], [5, "GPIO3"], [7, "GPIO4"], [8, "GPIO14"], [10, "GPIO15"],
    [11, "GPIO17"], [12, "GPIO18"], [13, "GPIO27"], [15, "GPIO22"], [16, "GPIO23"],
    [18, "GPIO24"], [19, "GPIO10"], [21, "GPIO9"], [22, "GPIO25"], [23, "GPIO11"],
    [24, "GPIO8"], [26, "GPIO7"], [29, "GPIO5"], [31, "GPIO6"], [32, "GPIO12"],
    [33, "GPIO13"], [35, "GPIO19"], [36, "GPIO16"], [37, "GPIO26"], [38, "GPIO20"],
    [40, "GPIO21"],
  ];
  return pinDefs.map(([num, name]) => ({
    num, name, mode: "IN" as const,
    state: "LOW" as const, pwmValue: 0,
  }));
}

// ── Virtual GPIO Simulator ──
function GPIOTab() {
  const [pins, setPins] = useState(createPins);
  const [log, setLog] = useState<string[]>(["GPIO simulation ready. Click pins to toggle."]);
  const [selectedPin, setSelectedPin] = useState<number | null>(null);
  const [ledStates, setLedStates] = useState<Record<string, boolean>>({});
  const [sensorValues, setSensorValues] = useState<Record<string, number>>({ temp: 24.5, humidity: 62, light: 450, motion: 0 });

  const togglePin = useCallback((num: number) => {
    setPins((prev) => {
      const next = prev.map((p) => {
        if (p.num !== num) return p;
        const newState: PinState = p.state === "HIGH" ? "LOW" : "HIGH";
        setLog((l) => [...l, `GPIO ${p.num} (${p.name}) set to ${newState}`]);
        return { ...p, state: newState, mode: p.mode === "IN" ? "OUT" : p.mode };
      });
      // Update LEDs
      const pin = next.find((p) => p.num === num);
      if (pin && pin.mode === "OUT") {
        setLedStates((prev) => ({ ...prev, [pin.name]: pin.state === "HIGH" }));
      }
      return next;
    });
  }, []);

  const setPWMSim = useCallback((num: number) => {
    setPins((prev) => {
      const p = prev.find((p) => p.num === num);
      if (!p) return prev;
      const val = prompt("Enter PWM value (0-100):", "50");
      if (val === null) return prev;
      const v = Math.min(100, Math.max(0, parseInt(val) || 0));
      setLog((l) => [...l, `GPIO ${num} PWM set to ${v}%`]);
      return prev.map((p) => p.num === num ? { ...p, state: "PWM", pwmValue: v, mode: "PWM" as const } : p);
    });
  }, []);

  const clearLog = useCallback(() => setLog([]), []);

  const simulateSensor = useCallback((type: string) => {
    const v = type === "temp" ? 15 + Math.random() * 20 : type === "humidity" ? 30 + Math.random() * 50 : type === "light" ? 50 + Math.random() * 900 : Math.random() > 0.5 ? 1 : 0;
    setSensorValues((prev) => ({ ...prev, [type]: Math.round(v * 10) / 10 }));
    setLog((l) => [...l, `Sensor reading: ${type} = ${Math.round(v * 10) / 10}`]);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4">
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <SectionLabel>GPIO Pins (40-pin Header)</SectionLabel>
          <div className="flex gap-2">
            <button onClick={() => ["temp","humidity","light","motion"].forEach(simulateSensor)} className="px-2 py-1 text-[8px] font-black tracking-wider uppercase border" style={{ borderColor: `${BRAND}33`, color: BRAND }}>
              Simulate Sensors
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1">
          {pins.map((pin) => (
            <button
              key={pin.num}
              onClick={() => togglePin(pin.num)}
              onContextMenu={(e) => { e.preventDefault(); setPWMSim(pin.num); }}
              className="flex items-center gap-2 px-2 py-1.5 text-[9px] font-mono border rounded transition-all text-left"
              style={{
                borderColor: pin.state === "HIGH" ? BRAND : pin.state === "PWM" ? "#F59E0B" : "hsl(var(--foreground)/0.1)",
                backgroundColor: pin.state === "HIGH" ? `${BRAND}22` : pin.state === "PWM" ? "#F59E0B11" : "transparent",
              }}
            >
              <span className="text-foreground/30 w-6 text-right">{pin.num}</span>
              <span className="text-foreground/60 w-16">{pin.name}</span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: pin.state === "HIGH" ? "#22C55E" : pin.state === "PWM" ? "#F59E0B" : "#6B7280" }}
              />
              <span className="font-black tracking-wider text-[8px]" style={{ color: pin.state === "HIGH" ? "#22C55E" : pin.state === "PWM" ? "#F59E0B" : "#6B7280" }}>
                {pin.state === "PWM" ? `${pin.pwmValue}%` : pin.state}
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-[8px] text-foreground/30 font-mono">
          <span>Click: toggle HIGH/LOW</span>
          <span>Right-click: set PWM value</span>
          <span>{pins.filter((p) => p.state === "HIGH").length} pins HIGH</span>
        </div>
      </div>

      <div className="w-72 space-y-3">
        <div className="flex items-center justify-between">
          <SectionLabel>Console Log</SectionLabel>
          <button onClick={clearLog} className="text-[8px] text-foreground/30 font-black tracking-wider uppercase">Clear</button>
        </div>
        <div className="bg-black border border-foreground/10 p-3 h-80 overflow-y-auto font-mono text-[8px] space-y-0.5">
          {log.map((l, i) => (
            <div key={i} className={l.startsWith("GPIO") ? "text-green-400/70" : l.startsWith("Sensor") ? "text-cyan-400/70" : "text-foreground/30"}>{l}</div>
          ))}
        </div>

        <div className="border border-foreground/10 p-3 rounded-lg">
          <SectionLabel>LED Indicators</SectionLabel>
          <div className="flex gap-2 flex-wrap">
            {Object.entries(ledStates).filter(([,v]) => v).map(([name]) => (
              <div key={name} className="flex items-center gap-1 text-[8px] font-mono">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-foreground/50">{name}</span>
              </div>
            ))}
            {Object.values(ledStates).every((v) => !v) && <span className="text-[8px] text-foreground/20">No active LEDs</span>}
          </div>
        </div>

        <div className="border border-foreground/10 p-3 rounded-lg">
          <SectionLabel>Sensor Readings</SectionLabel>
          <div className="grid grid-cols-2 gap-1">
            {Object.entries(sensorValues).map(([k, v]) => (
              <div key={k} className="flex justify-between text-[8px] font-mono text-foreground/60">
                <span className="uppercase">{k}</span>
                <span className="text-cyan-400">{v}{k === "temp" ? "°C" : k === "humidity" ? "%" : k === "light" ? " lux" : ""}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Terminal Tab ──
function CodeTab() {
  const [output, setOutput] = useState<string[]>([
    "pi@raspberrypi:~ $ _",
  ]);
  const [mode, setMode] = useState<"python" | "node" | "bash">("python");
  const [code, setCode] = useState(`import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)

while True:
    GPIO.output(18, GPIO.HIGH)
    time.sleep(1)
    GPIO.output(18, GPIO.LOW)
    time.sleep(1)`);
  const [cmd, setCmd] = useState("");

  const runCode = useCallback(() => {
    const lines: string[] = [];
    if (mode === "python") {
      lines.push("$ python3 script.py");
      lines.push("GPIO.setmode(GPIO.BCM)");
      lines.push("GPIO.setup(18, GPIO.OUT)");
      lines.push("Starting blink cycle...");
      lines.push("Pin 18: HIGH");
      lines.push("Pin 18: LOW");
      lines.push("Pin 18: HIGH");
      lines.push("^C (interrupted)");
      lines.push("GPIO.cleanup()");
    } else if (mode === "node") {
      lines.push("$ node script.js");
      lines.push("GPIOD::Chip opened");
      lines.push("Line 18 requested as output");
      lines.push("Blinking LED on GPIO 18");
      lines.push("State: 1");
      lines.push("State: 0");
      lines.push("State: 1");
      lines.push("Process terminated");
    } else {
      lines.push("pi@raspberrypi:~ $ " + cmd);
      lines.push("Reading sensors...");
      lines.push(`Temperature: ${(15 + Math.random() * 20).toFixed(1)}°C`);
      lines.push(`Humidity: ${(30 + Math.random() * 50).toFixed(1)}%`);
      lines.push("Memory: 324MB / 1024MB (31.6%)");
      lines.push("CPU: 23°C - Load: 0.42 0.38 0.21");
    }
    setOutput((prev) => [...prev.slice(-20), ...lines]);
  }, [mode, cmd]);

  const runCommand = useCallback(() => {
    if (!cmd.trim()) return;
    const response: string[] = [`pi@raspberrypi:~ $ ${cmd}`];
    const c = cmd.trim().toLowerCase();
    if (c === "ls") response.push("Desktop  Documents  Downloads  Music  Pictures  Python  project  script.py");
    else if (c === "gpio readall") response.push(" +-----+-----+---------+------+---+---Pi 4B--+---+------+---------+-----+-----+", " | BCM | wPi |   Name  | Mode | V | Physical | V | Mode | Name    | wPi | BCM |", " +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+", " |  17 |   0 |  GPIO.0 |   IN | 0 | 11 || 12 | 0 | IN   | GPIO.1  |   1 |  18 |", " +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+");
    else if (c.startsWith("cat ")) response.push("#!/usr/bin/env python3", "# Blink LED example", "import RPi.GPIO as GPIO", "GPIO.setmode(GPIO.BCM)", "GPIO.setup(18, GPIO.OUT)");
    else if (c === "vcgencmd measure_temp") response.push(`temp=${(40 + Math.random() * 20).toFixed(1)}'C`);
    else if (c === "free -h") response.push("               total        used        free      shared  buff/cache", "Mem:           1.0G       324M       456M        32M       244M");
    else if (c === "ifconfig") response.push("wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500", "        inet 192.168.1.42  netmask 255.255.255.0  broadcast 192.168.1.255");
    else if (c === "sudo reboot") response.push("[  OK  ] Reached target Shutdown.", "Broadcast message from root@raspberrypi (pts/0): The system is going down for reboot NOW!");
    else response.push(`bash: ${cmd}: command not found`);
    setOutput((prev) => [...prev.slice(-15), ...response]);
    setCmd("");
  }, [cmd]);

  const examples = [
    { label: "Blink", code: `import RPi.GPIO as GPIO\nimport time\nGPIO.setmode(GPIO.BCM)\nGPIO.setup(18, GPIO.OUT)\nwhile True:\n    GPIO.output(18, GPIO.HIGH)\n    time.sleep(1)\n    GPIO.output(18, GPIO.LOW)\n    time.sleep(1)`, lang: "python" },
    { label: "Sensor Read", code: `import RPi.GPIO as GPIO\nimport Adafruit_DHT\nsensor = Adafruit_DHT.DHT11\npin = 4\nhumidity, temperature = Adafruit_DHT.read_retry(sensor, pin)\nprint(f"Temp: {temperature}°C Hum: {humidity}%")`, lang: "python" },
    { label: "PWM LED", code: `import RPi.GPIO as GPIO\nimport time\nGPIO.setmode(GPIO.BCM)\nGPIO.setup(18, GPIO.OUT)\npwm = GPIO.PWM(18, 100)\npwm.start(0)\nfor i in range(101):\n    pwm.ChangeDutyCycle(i)\n    time.sleep(0.02)`, lang: "python" },
    { label: "Node GPIO", code: `const gpio = require('rpi-gpio');\ngpio.setup(18, gpio.DIR_OUT, () => {\n    setInterval(() => {\n        gpio.write(18, true, () => {\n            setTimeout(() => gpio.write(18, false), 500);\n        });\n    }, 1000);\n});`, lang: "node" },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4">
      <div className="flex-1 space-y-3">
        <div className="flex gap-1.5 flex-wrap">
          {examples.map((ex) => (
            <button key={ex.label} onClick={() => { setCode(ex.code); setMode(ex.lang as any); }} className="px-2 py-1 text-[8px] font-black tracking-wider uppercase border" style={{ borderColor: `${BRAND}33`, color: BRAND }}>
              {ex.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2 mb-2">
          {(["python","node","bash"] as const).map((m) => (
            <button key={m} onClick={() => setMode(m)} className="px-3 py-1 text-[9px] font-black tracking-widest uppercase border transition-all" style={{ borderColor: mode === m ? BRAND : "hsl(var(--foreground)/0.1)", color: mode === m ? BRAND : "hsl(var(--foreground)/0.5)" }}>
              {m === "python" ? "Python" : m === "node" ? "Node.js" : "Bash"}
            </button>
          ))}
        </div>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-48 bg-black text-green-400 p-3 text-[10px] font-mono border border-foreground/10 resize-none" spellCheck={false} />
        <div className="flex gap-2">
          <button onClick={runCode} className="px-5 py-1.5 text-[10px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>Run {mode === "python" ? "Python" : mode === "node" ? "Node.js" : "Bash"}</button>
        </div>
      </div>
      <div className="w-80 space-y-3">
        <SectionLabel>Terminal</SectionLabel>
        <div className="bg-black border border-foreground/10 p-3 h-64 overflow-y-auto font-mono text-[10px] space-y-0.5">
          {output.slice(-30).map((l, i) => (
            <div key={i} className={l.startsWith("$") || l.startsWith("pi@") ? "text-green-400/80" : "text-foreground/50"}>{l}</div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runCommand()}
            className="flex-1 bg-black border border-foreground/10 text-foreground p-2 text-[10px] font-mono"
            placeholder="$ type a command..."
          />
          <button onClick={runCommand} className="px-3 py-1 text-[9px] font-black tracking-widest uppercase border" style={{ borderColor: BRAND, color: BRAND }}>Enter</button>
        </div>
      </div>
    </div>
  );
}

// ── IoT Dashboard Tab ──
function IoTDashboardTab() {
  const [devices, setDevices] = useState([
    { id: 1, name: "Living Room Temp", type: "sensor", value: "24.5°C", online: true },
    { id: 2, name: "Front Door Sensor", type: "sensor", value: "Closed", online: true },
    { id: 3, name: "Garden Light", type: "actuator", value: "Off", online: true },
    { id: 4, name: "Bedroom Thermostat", type: "sensor", value: "22.0°C", online: true },
    { id: 5, name: "Kitchen Motion", type: "sensor", value: "No motion", online: true },
    { id: 6, name: "Garage Door", type: "actuator", value: "Closed", online: true },
  ]);

  const [mqttMessages, setMqttMessages] = useState<string[]>(["MQTT broker connected on 192.168.1.42:1883"]);
  const [chartData, setChartData] = useState<number[]>(Array.from({length: 20}, () => 20 + Math.random() * 10));

  const simulateReading = useCallback(() => {
    const newTemp = (20 + Math.random() * 10).toFixed(1);
    setDevices((prev) => prev.map((d) => {
      if (d.id === 1) return { ...d, value: `${newTemp}°C` };
      if (d.id === 4) return { ...d, value: `${(18 + Math.random() * 8).toFixed(1)}°C` };
      if (d.id === 5) return { ...d, value: Math.random() > 0.7 ? "Motion detected!" : "No motion" };
      return d;
    }));
    setChartData((prev) => [...prev.slice(-19), parseFloat(newTemp)]);
    setMqttMessages((prev) => [...prev.slice(-9), `TOPIC: home/livingroom/temp — PAYLOAD: ${newTemp}°C`]);
  }, []);

  const toggleDevice = useCallback((id: number) => {
    setDevices((prev) => prev.map((d) => d.id === id ? { ...d, value: d.value === "Off" ? "On" : d.value === "On" ? "Off" : d.value } : d));
    const d = devices.find((d) => d.id === id);
    if (d) setMqttMessages((prev) => [...prev.slice(-9), `TOPIC: home/${d.name.toLowerCase().replace(/\s+/g, "_")}/set — PAYLOAD: ${d.value === "Off" ? "ON" : "OFF"}`]);
  }, [devices]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SectionLabel>Connected Devices ({devices.filter((d) => d.online).length} online)</SectionLabel>
        <button onClick={simulateReading} className="px-3 py-1.5 text-[9px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>
          Simulate Reading
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {devices.map((d) => (
          <div key={d.id} className="border border-foreground/10 p-3 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.online ? "#22C55E" : "#EF4444" }} />
              <div>
                <div className="text-[10px] font-black tracking-wider uppercase">{d.name}</div>
                <div className="text-[9px] text-foreground/40 font-mono">{d.type}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-black" style={{ color: d.type === "actuator" ? (d.value === "On" ? BRAND : "#6B7280") : "#22C55E" }}>{d.value}</span>
              {d.type === "actuator" && (
                <button onClick={() => toggleDevice(d.id)} className="px-2 py-0.5 text-[8px] font-black tracking-wider uppercase border rounded" style={{ borderColor: BRAND, color: BRAND }}>
                  Toggle
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <SectionLabel>Temperature Chart (Live)</SectionLabel>
          <div className="flex items-end gap-0.5 h-20">
            {chartData.map((v, i) => {
              const h = ((v - 15) / 15) * 100;
              return <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: `${BRAND}88`, minWidth: 4 }} title={`${v.toFixed(1)}°C`} />;
            })}
          </div>
          <div className="flex justify-between text-[8px] text-foreground/30 font-mono mt-1">
            <span>15°C</span>
            <span>30°C</span>
          </div>
        </div>

        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <SectionLabel>MQTT Message Log</SectionLabel>
          <div className="h-20 overflow-y-auto font-mono text-[8px] space-y-0.5">
            {mqttMessages.map((m, i) => (
              <div key={i} className={m.startsWith("TOPIC:") ? "text-violet-400/80" : "text-foreground/30"}>{m}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Electronics Tab ──
function CircuitTab() {
  const [mode, setMode] = useState<"breadboard" | "resistor">("breadboard");
  const [resistorBands, setResistorBands] = useState(["brown", "black", "red", "gold"]);

  const resistorColors: Record<string, { value: number; multiplier: number }> = {
    black: { value: 0, multiplier: 1 },
    brown: { value: 1, multiplier: 10 },
    red: { value: 2, multiplier: 100 },
    orange: { value: 3, multiplier: 1000 },
    yellow: { value: 4, multiplier: 10000 },
    green: { value: 5, multiplier: 100000 },
    blue: { value: 6, multiplier: 1000000 },
    violet: { value: 7, multiplier: 10000000 },
    grey: { value: 8, multiplier: 100000000 },
    white: { value: 9, multiplier: 1000000000 },
    gold: { value: -1, multiplier: 0.1 },
    silver: { value: -1, multiplier: 0.01 },
  };

  const resistance = useMemo(() => {
    if (resistorBands.length < 4) return 0;
    const val = (resistorColors[resistorBands[0]]?.value || 0) * 10 + (resistorColors[resistorBands[1]]?.value || 0);
    const mult = resistorColors[resistorBands[2]]?.multiplier || 1;
    return val * mult;
  }, [resistorBands]);

  const resistorColorsArr = ["black","brown","red","orange","yellow","green","blue","violet","grey","white","gold","silver"];

  const setBand = (idx: number, color: string) => {
    const next = [...resistorBands];
    next[idx] = color;
    setResistorBands(next);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(["breadboard","resistor"] as const).map((m) => (
          <button key={m} onClick={() => setMode(m)} className="px-3 py-1.5 text-[9px] font-black tracking-widest uppercase border transition-all" style={{ borderColor: mode === m ? BRAND : "hsl(var(--foreground)/0.1)", color: mode === m ? BRAND : "hsl(var(--foreground)/0.5)" }}>
            {m === "breadboard" ? "Breadboard Layout" : "Resistor Calculator"}
          </button>
        ))}
      </div>

      {mode === "breadboard" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black border border-foreground/10 p-4 rounded-lg flex flex-col items-center">
            <SectionLabel>Breadboard Diagram</SectionLabel>
            <svg viewBox="0 0 200 180" className="w-full max-w-xs" style={{ background: "#222", borderRadius: 8 }}>
              <rect x="10" y="10" width="180" height="160" fill="#333" rx="4" />
              {/* Power rails */}
              {Array.from({length: 2}).map((_, ri) => (
                Array.from({length: 10}).map((_, ci) => (
                  <rect key={`p${ri}-${ci}`} x={ri === 0 ? 20 : 165} y={20 + ci * 14} width={8} height={8} fill={ri === 0 ? "#EF4444" : "#3B82F6"} rx={1} />
                ))
              ))}
              {/* Component area */}
              {Array.from({length: 5}).map((_, ri) => (
                Array.from({length: 10}).map((_, ci) => (
                  <rect key={`c${ri}-${ci}`} x={45 + ci * 12} y={20 + ri * 28} width={9} height={9} fill="#444" rx={1} />
                ))
              ))}
              {/* LED */}
              <circle cx="80" cy="75" r="8" fill="#22C55E" opacity={0.8} />
              <text x="80" y="78" textAnchor="middle" fill="white" fontSize="6">LED</text>
              {/* Resistor */}
              <rect x="105" y="70" width="20" height="8" fill="#8B4513" rx={1} />
              <text x="115" y="67" textAnchor="middle" fill="#aaa" fontSize="5">R1</text>
              {/* Wires */}
              <line x1="80" y1="83" x2="80" y2="110" stroke="#22C55E" strokeWidth={1} opacity={0.5} />
              <line x1="80" y1="110" x2="110" y2="110" stroke="#22C55E" strokeWidth={1} opacity={0.5} />
              <line x1="115" y1="78" x2="115" y2="110" stroke="#22C55E" strokeWidth={1} opacity={0.5} />
              <line x1="80" y1="67" x2="80" y2="40" stroke="#22C55E" strokeWidth={1} opacity={0.5} />
              <line x1="80" y1="40" x2="30" y2="40" stroke="#EF4444" strokeWidth={1} opacity={0.5} />
              <line x1="115" y1="67" x2="115" y2="40" stroke="#22C55E" strokeWidth={1} opacity={0.5} />
              <line x1="115" y1="40" x2="170" y2="40" stroke="#3B82F6" strokeWidth={1} opacity={0.5} />
              {/* Labels */}
              <text x="50" y="140" fill="#EF4444" fontSize="5">VCC (3.3V)</text>
              <text x="50" y="150" fill="#3B82F6" fontSize="5">GND</text>
              <text x="50" y="160" fill="#aaa" fontSize="5">GPIO 18 → LED → R(330Ω) → GND</text>
            </svg>
          </div>
          <div className="space-y-3">
            <div className="border border-foreground/10 p-3 rounded-lg">
              <SectionLabel>Component List</SectionLabel>
              <div className="space-y-1 text-[9px] font-mono">
                {[
                  { name: "Raspberry Pi 4", qty: 1, note: "GPIO 18" },
                  { name: "LED (5mm)", qty: 1, note: "Green" },
                  { name: "Resistor 330Ω", qty: 1, note: "Current limiting" },
                  { name: "Breadboard", qty: 1, note: "Half-size" },
                  { name: "Jumper Wires", qty: 3, note: "M-F" },
                ].map((c) => (
                  <div key={c.name} className="flex justify-between"><span className="text-foreground/60">{c.name}</span><span className="text-foreground/30">{c.qty}x <span className="text-foreground/50">{c.note}</span></span></div>
                ))}
              </div>
            </div>
            <div className="p-3 border border-foreground/5 rounded text-[10px] text-foreground/50">
              <span className="font-black text-foreground/80">Circuit: </span>
              Connect GPIO 18 → LED anode (long leg) → LED cathode → 330Ω resistor → GND.
              Safe current: ~8mA at 3.3V.
            </div>
          </div>
        </div>
      )}

      {mode === "resistor" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black border border-foreground/10 p-4 rounded-lg flex flex-col items-center">
            <SectionLabel>4-Band Resistor</SectionLabel>
            <svg viewBox="0 0 180 80" className="w-full max-w-xs">
              <rect x="30" y="25" width="120" height="30" fill="#C8A96E" rx="6" />
              {resistorBands.map((color, i) => {
                const bandColors: Record<string, string> = { black: "#222", brown: "#8B4513", red: "#DC2626", orange: "#F97316", yellow: "#FBBF24", green: "#22C55E", blue: "#3B82F6", violet: "#8B5CF6", grey: "#6B7280", white: "#F9FAFB", gold: "#D4AF37", silver: "#9CA3AF" };
                return <rect key={i} x={45 + i * 24} y="25" width="10" height="30" fill={bandColors[color] || "#444"} rx="1" />;
              })}
              <text x="90" y="12" textAnchor="middle" fill="#aaa" fontSize="6">1st   2nd   Multiplier  Tolerance</text>
            </svg>
            <div className="flex gap-2 mt-3">
              {resistorBands.map((band, i) => (
                <select key={i} value={band} onChange={(e) => setBand(i, e.target.value)} className="bg-foreground/5 border border-foreground/10 text-foreground p-1 text-[9px] font-mono">
                  {resistorColorsArr.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="border border-foreground/10 p-3 rounded-lg">
              <SectionLabel>Calculated Value</SectionLabel>
              <div className="text-3xl font-black font-mono" style={{ color: BRAND }}>
                {resistance >= 1_000_000 ? `${(resistance / 1_000_000).toFixed(1)}M` : resistance >= 1_000 ? `${(resistance / 1_000).toFixed(0)}k` : resistance}
                <span className="text-lg text-foreground/40">Ω</span>
              </div>
              <div className="text-[9px] text-foreground/40 font-mono mt-1">Tolerance: ±{resistorBands[3] === "gold" ? "5" : resistorBands[3] === "silver" ? "10" : "20"}%</div>
            </div>
            <div className="p-3 border border-foreground/5 rounded text-[10px] text-foreground/50">
              <span className="font-black text-foreground/80">Ohm's Law: </span>
              I = V/R = 3.3V / {resistance}Ω = {(3.3 / Math.max(1, resistance) * 1000).toFixed(1)}mA
            </div>
            <div className="p-3 border border-foreground/5 rounded text-[10px] text-foreground/50">
              <span className="font-black text-foreground/80">Tip: </span>
              Use a 330Ω-1kΩ resistor when connecting an LED to a GPIO pin to limit current to safe levels.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Smart Home Tab ──
function SmartHomeTab() {
  const [rooms, setRooms] = useState([
    { id: 1, name: "Living Room", light: true, temp: 24, motion: false, humidity: 55 },
    { id: 2, name: "Bedroom", light: false, temp: 22, motion: false, humidity: 50 },
    { id: 3, name: "Kitchen", light: true, temp: 25, motion: true, humidity: 60 },
    { id: 4, name: "Bathroom", light: false, temp: 23, motion: false, humidity: 70 },
    { id: 5, name: "Garage", light: false, temp: 18, motion: false, humidity: 45 },
  ]);
  const [log, setLog] = useState<string[]>(["Smart home system initialized"]);

  const toggleLight = useCallback((id: number) => {
    setRooms((prev) => prev.map((r) => {
      if (r.id !== id) return r;
      const newLight = !r.light;
      setLog((l) => [...l.slice(-19), `[${r.name}] Light turned ${newLight ? "ON" : "OFF"}`]);
      return { ...r, light: newLight };
    }));
  }, []);

  const simulateAll = useCallback(() => {
    setRooms((prev) => prev.map((r) => ({
      ...r,
      temp: r.temp + (Math.random() > 0.5 ? 0.5 : -0.5),
      motion: Math.random() > 0.7 ? !r.motion : r.motion,
      humidity: Math.min(100, Math.max(20, r.humidity + (Math.random() > 0.5 ? 2 : -2))),
    })));
    setLog((l) => [...l.slice(-19), `[System] Updated all sensor readings`]);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SectionLabel>Smart Home Overview</SectionLabel>
        <button onClick={simulateAll} className="px-3 py-1.5 text-[9px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>
          Simulate Sensors
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {rooms.map((r) => (
          <div key={r.id} className="border border-foreground/10 p-4 rounded-lg" style={{ borderColor: r.motion ? `${BRAND}44` : "hsl(var(--foreground)/0.1)" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black tracking-wider uppercase">{r.name}</span>
              {r.motion && <span className="px-1.5 py-0.5 text-[8px] font-black tracking-wider text-yellow-500 bg-yellow-500/10 rounded">MOTION</span>}
            </div>
            <div className="space-y-1.5 text-[10px] font-mono">
              <div className="flex justify-between"><span className="text-foreground/40">Light</span>
                <button onClick={() => toggleLight(r.id)} className={`px-2 py-0.5 text-[8px] font-black tracking-wider uppercase rounded ${r.light ? "text-yellow-500" : "text-foreground/30"}`} style={{ backgroundColor: r.light ? "#F59E0B22" : "transparent" }}>
                  {r.light ? "ON" : "OFF"}
                </button>
              </div>
              <div className="flex justify-between"><span className="text-foreground/40">Temp</span><span className="text-green-400">{r.temp.toFixed(1)}°C</span></div>
              <div className="flex justify-between"><span className="text-foreground/40">Humidity</span><span className="text-blue-400">{r.humidity}%</span></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-black border border-foreground/10 p-3 rounded-lg max-h-32 overflow-y-auto">
          <SectionLabel>Event Log</SectionLabel>
          {log.map((l, i) => (
            <div key={i} className="text-[8px] font-mono text-foreground/50">{l}</div>
          ))}
        </div>
        <div className="p-3 border border-foreground/5 rounded text-[10px] text-foreground/50">
          <span className="font-black text-foreground/80">System: </span>
          Total rooms: {rooms.length} | Lights on: {rooms.filter((r) => r.light).length} | Motion detected: {rooms.filter((r) => r.motion).length} | Avg temp: {(rooms.reduce((s, r) => s + r.temp, 0) / rooms.length).toFixed(1)}°C
        </div>
      </div>
    </div>
  );
}

export default function RaspberryPiLab() {
  const [activeTab, setActiveTab] = useState<Tab>("gpio");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="border-b border-foreground/10 bg-foreground/[0.02] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{"\uD83C\uDF53"}</span>
          <div>
            <h1 className="text-lg font-black tracking-tight uppercase">Raspberry Pi Lab</h1>
            <p className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">GPIO · IoT · Sensors · Embedded Systems</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[8px] font-black tracking-widest text-green-500 uppercase">Pi 4 Model B (Simulated)</span>
        </div>
      </div>

      <div className="border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex overflow-x-auto px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-3 text-xs font-black tracking-widest uppercase border-b-2 transition-all whitespace-nowrap flex items-center gap-2"
              style={tabStyle(activeTab === tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-6 py-6 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {activeTab === "gpio" && <GPIOTab />}
            {activeTab === "code" && <CodeTab />}
            {activeTab === "iot" && <IoTDashboardTab />}
            {activeTab === "circuit" && <CircuitTab />}
            {activeTab === "smarthome" && <SmartHomeTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
