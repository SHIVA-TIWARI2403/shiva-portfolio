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
      response: `SYSTEM READY // SHIVA TIWARI KERNEL [v2.6.4]\nType "help" to view executable commands, or try "sudo hire-me".`
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
        origin: { y: 0.6 },
        colors: ['#e32b3c', '#ff5d65', '#ffffff']
      });
    }

    if (lower === 'matrix') {
      window.open('https://shiva-tiwari2403.github.io/ai-tool-matrix/', '_blank');
    }

    const response =
      TERMINAL_COMMANDS[lower] ||
      `Command not found: "${trimmed}". Type "help" to view available commands.`;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all">
      <div
        className={`bg-[#090909] border border-[#292323] shadow-2xl flex flex-col font-mono text-xs overflow-hidden transition-all duration-300 ${
          isMaximized ? 'w-full h-full' : 'w-full max-w-2xl h-[520px]'
        }`}
      >
        {/* Terminal Header */}
        <div className="bg-[#101010] px-4 py-3 border-b border-[#292323] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#e32b3c] hover:opacity-80 transition-opacity"
              title="Close"
            />
            <button
              onClick={() => setLogs([])}
              className="w-3 h-3 rounded-full bg-[#f59e0b] hover:opacity-80 transition-opacity"
              title="Clear Buffer"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-[#10b981] hover:opacity-80 transition-opacity"
              title="Toggle Size"
            />
            <span className="ml-2 text-[#a09c9a] text-xs font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#e32b3c]" />
              <span>shiva@ayodhya-cluster:~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-[#a09c9a] hover:text-white"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#a09c9a] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto space-y-3 cursor-text text-[#f2efeb]"
        >
          {logs.map((log, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-[#ff5d65]">
                <span className="text-[#e32b3c] font-bold">➜</span>
                <span className="text-[#a09c9a]">~</span>
                <span className="text-white font-semibold">{log.command}</span>
              </div>
              <div className="text-[#a09c9a] whitespace-pre-wrap pl-4 leading-relaxed font-mono">
                {log.response}
              </div>
            </div>
          ))}

          {/* Prompt Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
            <span className="text-[#e32b3c] font-bold">➜</span>
            <span className="text-[#a09c9a]">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-[#e32b3c] text-xs"
              placeholder="type a command (e.g. 'help', 'sudo hire-me')..."
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="text-[#a09c9a] hover:text-white">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Quick run pills */}
        <div className="px-4 py-2 bg-[#101010] border-t border-[#292323] flex flex-wrap items-center gap-2">
          <span className="text-[10px] text-[#a09c9a]">Quick run:</span>
          {['help', 'about', 'skills', 'projects', 'sudo hire-me'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                setTimeout(() => inputRef.current?.focus(), 50);
              }}
              className="text-[10px] px-2 py-0.5 bg-[#161616] text-[#a09c9a] hover:text-white hover:border-[#e32b3c] border border-[#292323] transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
