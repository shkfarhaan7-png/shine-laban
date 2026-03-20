const WHATSAPP_URL = "https://wa.me/918424854177";

export function FloatingWhatsApp() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[80]">
      <div className="group relative">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="floating-whatsapp pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110 hover:shadow-[0_20px_50px_rgba(37,211,102,0.42)] md:h-16 md:w-16"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current md:h-8 md:w-8"
          >
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.61 2 2.2 6.4 2.2 11.82c0 1.73.45 3.43 1.3 4.92L2 22l5.42-1.42a9.8 9.8 0 0 0 4.6 1.17h.01c5.42 0 9.82-4.41 9.82-9.83 0-2.63-1.02-5.1-2.8-6.99Zm-7.02 15.18h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.22.85.86-3.14-.2-.32a8.16 8.16 0 0 1-1.25-4.34c0-4.52 3.68-8.2 8.2-8.2 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.4 5.81c0 4.52-3.67 8.2-8.12 8.25Zm4.5-6.15c-.25-.12-1.48-.73-1.71-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.2-.73-.65-1.22-1.44-1.37-1.68-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.86-.2-.47-.4-.4-.56-.4h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.23.89 2.41 1.02 2.58.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.42.51.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z" />
          </svg>
        </a>

        <div className="pointer-events-none absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/12 bg-midnight/95 px-4 py-2 text-sm font-medium text-cream/88 opacity-0 shadow-[0_18px_45px_rgba(2,7,22,0.34)] backdrop-blur-md transition duration-300 group-hover:opacity-100 md:block">
          Chat with us on WhatsApp
        </div>
      </div>
    </div>
  );
}
