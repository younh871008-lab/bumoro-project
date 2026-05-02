"use client";

export function NewsletterForm({ placeholder = "이메일 주소", buttonText = "구독하기" }: {
  placeholder?: string;
  buttonText?: string;
}) {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder={placeholder}
        className="flex-1 rounded-xl border border-bumoro-pink px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-bumoro-orange/40"
      />
      <button
        type="submit"
        className="bg-bumoro-orange text-white font-medium rounded-xl px-4 py-2.5 text-sm hover:bg-bumoro-orange/90 transition-colors whitespace-nowrap"
      >
        {buttonText}
      </button>
    </form>
  );
}
