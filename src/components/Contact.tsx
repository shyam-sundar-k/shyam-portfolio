import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ArrowUp, Send, Clock, Sparkles } from 'lucide-react';

interface ContactProps {
  onNotify: (msg: string) => void;
  onBackToTop: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify, onBackToTop }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState('Performance Marketing Discussion');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Live Bengaluru Time (IST UTC+5:30)
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat([], options).format(new Date());
      setIstTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onNotify('Email address copied to clipboard');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    onNotify('Phone number copied to clipboard');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) {
      onNotify('Please fill in your name, email, and message.');
      return;
    }

    const emailSubject = encodeURIComponent(`Performance Marketing Inquiry: ${topic} (from ${name})`);
    const emailBody = encodeURIComponent(
      `Hi Shyam,\n\nMy name is ${name} (${senderEmail}).\n\nTopic: ${topic}\n\nMessage:\n${message}\n\n---\nSent via Shyam Sundar K - Performance Marketing Lab`
    );

    // Open native email client
    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    setFormSubmitted(true);
    onNotify('Email composer launched. A copy is ready for you.');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#080B14] text-[#F5F7FF] relative overflow-hidden border-t border-[rgba(180,200,255,0.14)]">
      {/* Background Cyber Grid & Radiant Blooms */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#37E7FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#9A6BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#37E7FF]">
            07 / LET'S CONNECT
          </span>
          <div className="h-px bg-gradient-to-r from-[#37E7FF]/40 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F5F7FF] tracking-tight mb-6 leading-[1.05]">
            “Let's turn curiosity into something meaningful.”
          </h2>
          <p className="text-base sm:text-lg text-[#A6B0C8] leading-relaxed font-normal">
            I'm interested in digital marketing, creative problem-solving, and the possibilities of performance-driven growth. Have an opportunity, idea, or project in mind? Let's connect.
          </p>
        </div>

        {/* Two-Column Grid: Contact Coordinates on Left, Active Message Composer on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Coordinates & Action CTAs */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Channel Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-6 rounded-2xl glass-panel-elevated hover:border-[#37E7FF]/60 transition-all duration-300 group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-[#080B14] border border-[rgba(180,200,255,0.15)] text-[#37E7FF] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6B0C8] block">
                        Verified Direct Email
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-base sm:text-lg font-mono font-semibold text-[#F5F7FF] hover:text-[#37E7FF] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className="p-2.5 rounded-lg bg-[#080B14] hover:bg-[#151D32] text-[#A6B0C8] hover:text-[#37E7FF] border border-[rgba(180,200,255,0.1)] transition-colors cursor-pointer"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#D7FF62]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-2xl glass-panel-elevated hover:border-[#37E7FF]/60 transition-all duration-300 group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-[#080B14] border border-[rgba(180,200,255,0.15)] text-[#37E7FF] group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6B0C8] block">
                        Direct Phone (IST)
                      </span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-base sm:text-lg font-mono font-semibold text-[#F5F7FF] hover:text-[#37E7FF] transition-colors"
                      >
                        {personalInfo.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    title="Copy Phone Number"
                    className="p-2.5 rounded-lg bg-[#080B14] hover:bg-[#151D32] text-[#A6B0C8] hover:text-[#37E7FF] border border-[rgba(180,200,255,0.1)] transition-colors cursor-pointer"
                    aria-label="Copy Phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#D7FF62]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Card with Live Bengaluru Clock */}
              <div className="p-6 rounded-2xl glass-panel-elevated">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-[#080B14] border border-[rgba(180,200,255,0.15)] text-[#9A6BFF]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6B0C8] block">
                        Location & Timezone
                      </span>
                      <span className="text-base font-semibold text-[#F5F7FF]">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#D7FF62]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{istTime || 'IST UTC+5:30'}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#A6B0C8] block">Bengaluru Time</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`mailto:${personalInfo.email}?subject=Start%20a%20Conversation%20-%20Performance%20Marketing`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#37E7FF] via-[#9A6BFF] to-[#D7FF62] text-[#080B14] text-xs sm:text-sm font-mono font-extrabold uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(55,231,255,0.5)] transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4 stroke-[2.5]" />
                <span>Start a Conversation</span>
              </a>

              <button
                onClick={onBackToTop}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#101527] text-[#F5F7FF] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-full border border-[rgba(180,200,255,0.2)] hover:border-[#37E7FF] hover:bg-[#151D32] transition-all duration-200 cursor-pointer"
              >
                <span>Back to the Top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Direct Functional Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl glass-panel-elevated border border-[rgba(180,200,255,0.18)] shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[rgba(180,200,255,0.12)]">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#F5F7FF]">
                    Direct Dispatch Channel
                  </h3>
                  <p className="text-xs text-[#A6B0C8] mt-0.5">
                    Pre-formats your inquiry directly into your email client
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#37E7FF]" />
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-[#080B14]/80 rounded-xl border border-[#37E7FF]/40 space-y-4 animate-fade-in text-center">
                  <div className="w-12 h-12 rounded-full bg-[#37E7FF] text-[#080B14] flex items-center justify-center mx-auto shadow-[0_0_20px_#37E7FF]">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#F5F7FF]">
                    Inquiry Ready to Dispatch
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A6B0C8] max-w-md mx-auto">
                    Your default email client has been launched with your message addressed to <span className="text-[#37E7FF] font-mono">{personalInfo.email}</span>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider bg-[#151D32] text-[#F5F7FF] rounded-lg hover:border-[#37E7FF] border border-transparent transition-colors cursor-pointer"
                    >
                      Compose Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#A6B0C8] mb-1.5 font-medium">
                        Your Name <span className="text-[#37E7FF]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-3 bg-[#080B14] border border-[rgba(180,200,255,0.16)] rounded-xl text-sm text-[#F5F7FF] placeholder-[#A6B0C8]/40 focus:outline-hidden focus:border-[#37E7FF] focus:ring-1 focus:ring-[#37E7FF] transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#A6B0C8] mb-1.5 font-medium">
                        Your Email <span className="text-[#37E7FF]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. jane@company.com"
                        className="w-full px-4 py-3 bg-[#080B14] border border-[rgba(180,200,255,0.16)] rounded-xl text-sm text-[#F5F7FF] placeholder-[#A6B0C8]/40 focus:outline-hidden focus:border-[#37E7FF] focus:ring-1 focus:ring-[#37E7FF] transition-colors"
                      />
                    </div>

                  </div>

                  {/* Topic Select */}
                  <div>
                    <label htmlFor="topic" className="block text-xs font-mono uppercase tracking-wider text-[#A6B0C8] mb-1.5 font-medium">
                      Inquiry Topic
                    </label>
                    <select
                      id="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-3 bg-[#080B14] border border-[rgba(180,200,255,0.16)] rounded-xl text-sm text-[#F5F7FF] focus:outline-hidden focus:border-[#37E7FF] focus:ring-1 focus:ring-[#37E7FF] transition-colors"
                    >
                      <option value="Performance Marketing Discussion">Performance Marketing Discussion</option>
                      <option value="Digital Marketing Collaboration">Digital Marketing Collaboration</option>
                      <option value="Paid Media & Analytics Exchange">Paid Media & Analytics Exchange</option>
                      <option value="Professional Opportunity">Professional Opportunity</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#A6B0C8] mb-1.5 font-medium">
                      Message <span className="text-[#37E7FF]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share context on what you would like to discuss..."
                      className="w-full px-4 py-3 bg-[#080B14] border border-[rgba(180,200,255,0.16)] rounded-xl text-sm text-[#F5F7FF] placeholder-[#A6B0C8]/40 focus:outline-hidden focus:border-[#37E7FF] focus:ring-1 focus:ring-[#37E7FF] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#37E7FF] to-[#9A6BFF] text-[#080B14] font-mono text-xs font-extrabold uppercase tracking-wider rounded-xl hover:shadow-[0_0_25px_rgba(55,231,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>Launch Email Dispatch</span>
                  </button>

                  <p className="text-[11px] font-mono text-[#A6B0C8] text-center pt-1">
                    Direct client integration · No fake backend endpoints or silent message drops
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
