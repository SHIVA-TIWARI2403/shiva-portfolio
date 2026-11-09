import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TERMINAL_COMMANDS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  response: string;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'init',
      response: `System initialized: Welcome to Shiva Tiwari's interactive CLI [v2.4.0].\nType "help" to view executable commands, or try "sudo hire-me".`
    }
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setLogs([]);
      setInput('');
      return;
    }

    if (lower === 'sudo hire-me' || lower === 'hire-me') {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 }
      });
    }

    if (lower === 'matrix') {
      window.open('https://shiva-tiwari2403.github.io/ai-tool-matrix/', '_blank');
    }

    const response =
      TERMINAL_COMMANDS[lower] ||
      `Command not found: "${trimmed}". Type "help" to see available commands.`;

    setLogs((prev) => [...prev, { command: trimmed, response }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInput(history[nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= history.length) {
        setHistoryIdx(-1);
        setInput('');
      } else {
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-all">
      <div
        className={`bg-[#070D18] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 flex flex-col font-mono text-xs overflow-hidden transition-all duration-300 ${
          isMaximized ? 'w-full h-full rounded-none' : 'w-full max-w-2xl h-[520px]'
        }`}
      >
        {/* Terminal Header */}
        <div className="bg-[#0B1324] px-4 py-3 border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center text-[8px] text-red-950 transition-colors"
              title="Close"
            />
            <button
              onClick={() => setLogs([])}
              className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"
              title="Clear Buffer"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"
              title="Toggle Size"
            />
            <span className="ml-2 text-slate-400 font-sans text-xs font-medium flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>shiva@ayodhya-node:~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto space-y-3 cursor-text text-slate-300"
        >
          {logs.map((log, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-slate-400">~</span>
                <span className="text-white font-semibold">{log.command}</span>
              </div>
              <div className="text-slate-300 whitespace-pre-wrap pl-4 leading-relaxed font-mono">
                {log.response}
              </div>
            </div>
          ))}

          {/* Prompt Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-bold">➜</span>
            <span className="text-slate-400">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-cyan-300 font-mono caret-cyan-400 text-xs"
              placeholder="type a command (e.g., 'help', 'sudo hire-me')..."
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="text-slate-600 hover:text-slate-400">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Terminal Quick Bar */}
        <div className="px-4 py-2 bg-[#090F1E] border-t border-white/5 flex flex-wrap items-center gap-2">
          <span className="text-[10px] text-slate-500">Quick run:</span>
          {['help', 'about', 'skills', 'projects', 'sudo hire-me'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                setTimeout(() => inputRef.current?.focus(), 50);
              }}
              className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/40 border border-white/5 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
