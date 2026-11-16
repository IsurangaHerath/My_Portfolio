import { useState, useRef, useEffect, FormEvent } from 'react';

// Set VITE_CHAT_API in .env to change the backend (defaults to the Render service).
const CHAT_API: string =
  (import.meta.env.VITE_CHAT_API as string | undefined) ?? 'https://isuranga-chatbot.onrender.com';

const QUICK_QUESTIONS = ['What are your skills?', 'Show your projects', 'Certifications?', 'How can I contact you?'];

type Msg = { role: 'user' | 'bot'; text: string; images?: string[] };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'bot', text: "Hi! Ask me about Isuranga's skills, projects, education or certifications." },
  ]);
  const chatState = useRef<Record<string, unknown>>({});
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  async function sendText(text: string) {
    if (!text || busy) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', text }]);
    setBusy(true);
    try {
      const res = await fetch(`${CHAT_API}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, state: chatState.current }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      chatState.current = data.state ?? {};
      setMessages((m) => [...m, { role: 'bot', text: data.reply, images: data.images ?? [] }]);
    } catch {
      setMessages((m) => [...m, { role: 'bot', text: 'Sorry, the chat service is not reachable right now.' }]);
    } finally {
      setBusy(false);
    }
  }

  function send(e: FormEvent) {
    e.preventDefault();
    sendText(input.trim());
  }

  return (
    <>
      <div
        style={{
          position: 'fixed', right: 20, bottom: 20, zIndex: 1000,
          display: 'flex', alignItems: 'center', gap: 0,
          filter: 'drop-shadow(0 4px 14px rgba(0,0,0,.25))',
        }}
      >
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          aria-expanded={open}
          title="Chat with me"
          style={{
            width: 56, height: 56, borderRadius: '50%', border: 'none',
            background: '#fff', color: '#000', fontSize: 24, cursor: 'pointer',
            margin: 0, padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {open ? (
            '×'
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          style={{
            position: 'fixed', right: 20, bottom: 90, zIndex: 1000,
            width: 340, maxWidth: 'calc(100vw - 40px)', height: 460,
            display: 'flex', flexDirection: 'column', borderRadius: 14,
            background: '#fff', color: '#111', boxShadow: '0 8px 30px rgba(0,0,0,.25)',
            overflow: 'hidden', fontFamily: 'system-ui, sans-serif', fontSize: 14,
          }}
        >
          <div style={{ padding: '12px 14px', background: '#2563eb', color: '#fff', fontWeight: 600 }}>
            Ask about me
          </div>

          <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                <div
                  style={{
                    padding: '8px 12px', borderRadius: 12, whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                    background: m.role === 'user' ? '#2563eb' : '#e5e7eb',
                    color: m.role === 'user' ? '#fff' : '#111',
                  }}
                >
                  {m.text}
                </div>
                {m.images?.map((src) => (
                  <img key={src} src={src} alt="Certificate" loading="lazy"
                    style={{ width: '100%', marginTop: 6, borderRadius: 8, border: '1px solid #d1d5db' }} />
                ))}
              </div>
            ))}
            {busy && <div style={{ color: '#6b7280' }}>Typing...</div>}
          </div>

          {messages.length === 1 && !busy && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '0 12px 8px' }}>
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendText(q)}
                  style={{ padding: '5px 10px', borderRadius: 999, border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', fontSize: 12, cursor: 'pointer' }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={send} style={{ display: 'flex', gap: 8, padding: 10, borderTop: '1px solid #e5e7eb' }}>
            <input
              ref={inputRef}
              aria-label="Chat message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              style={{ flex: 1, padding: '8px 10px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 14 }}
            />
            <button
              type="submit"
              disabled={busy}
              style={{ padding: '8px 14px', borderRadius: 8, border: 'none', background: '#2563eb', color: '#fff', cursor: 'pointer' }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
