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

    const emailSubject = encodeURIComponent(`Portfolio Inquiry: ${topic} (from ${name})`);
    const emailBody = encodeURIComponent(
      `Hi Shyam,\n\nMy name is ${name} (${senderEmail}).\n\nTopic: ${topic}\n\nMessage:\n${message}\n\n---\nSent via Shyam Sundar K Portfolio`
    );

    // Open native email client
    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    setFormSubmitted(true);
    onNotify('Email composer opened. A copy is ready for you.');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#171815] text-[#F6F5F0] relative overflow-hidden">
      {/* Background architectural fine dark grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none editorial-dark-grid-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C5ED70]">
            07 / LET'S CONNECT
          </span>
          <div className="h-px bg-white/10 flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F6F5F0] tracking-tight mb-6 leading-[1.08]">
            “Good ideas deserve a conversation.”
          </h2>
          <p className="text-base sm:text-lg text-[#DADAD2] leading-relaxed font-normal">
            Interested in digital marketing, creative strategy, or performance-driven growth? I'd be glad to connect, exchange ideas, and explore opportunities to learn and contribute.
          </p>
        </div>

        {/* Two-Column Grid: Contact Coordinates on Left, Active Message Composer on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Coordinates & Action CTAs */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Channel Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5ED70] transition-colors group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#C5ED70]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#DADAD2] block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-base sm:text-lg font-mono font-semibold text-[#F6F5F0] hover:text-[#C5ED70] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-[#DADAD2] hover:text-[#F6F5F0] transition-colors"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#C5ED70]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5ED70] transition-colors group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#C5ED70]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#DADAD2] block">
                        Direct Phone
                      </span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-base sm:text-lg font-mono font-semibold text-[#F6F5F0] hover:text-[#C5ED70] transition-colors"
                      >
                        {personalInfo.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    title="Copy Phone Number"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-[#DADAD2] hover:text-[#F6F5F0] transition-colors"
                    aria-label="Copy Phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#C5ED70]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Card with Live Bengaluru Clock */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#C5ED70]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#DADAD2] block">
                        Location & Timezone
                      </span>
                      <span className="text-base font-semibold text-[#F6F5F0]">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#C5ED70]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{istTime || 'IST UTC+5:30'}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#DADAD2] block">Bengaluru Time</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`mailto:${personalInfo.email}?subject=Let's%20Connect%20-%20Digital%20Marketing`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5ED70] text-[#171815] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-white transition-all duration-200 shadow-md font-mono"
              >
                <Mail className="w-4 h-4" />
                <span>Send Me an Email</span>
              </a>

              <button
                onClick={onBackToTop}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-[#F6F5F0] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 font-mono"
              >
                <span>Back to the Top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Direct Functional Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#20221E] border border-white/10 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#F6F5F0]">
                    Direct Message Dispatch
                  </h3>
                  <p className="text-xs text-[#DADAD2] mt-0.5">
                    Pre-fills your inquiry directly into your email client
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#C5ED70]" />
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-white/5 rounded-xl border border-[#C5ED70]/40 space-y-4 animate-fade-in text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C5ED70] text-[#171815] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#F6F5F0]">
                    Inquiry Ready to Dispatch
                  </h4>
                  <p className="text-xs sm:text-sm text-[#DADAD2] max-w-md mx-auto">
                    Your default email client has been launched with your message addressed to <span className="text-[#C5ED70] font-mono">{personalInfo.email}</span>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-[#F6F5F0] rounded-lg hover:bg-white/20 transition-colors"
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
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#DADAD2] mb-1.5 font-medium">
                        Your Name <span className="text-[#C5ED70]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-3 bg-[#171815] border border-white/15 rounded-lg text-sm text-[#F6F5F0] placeholder-[#6D6D65] focus:outline-hidden focus:border-[#C5ED70] focus:ring-1 focus:ring-[#C5ED70] transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#DADAD2] mb-1.5 font-medium">
                        Your Email <span className="text-[#C5ED70]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. jane@company.com"
                        className="w-full px-4 py-3 bg-[#171815] border border-white/15 rounded-lg text-sm text-[#F6F5F0] placeholder-[#6D6D65] focus:outline-hidden focus:border-[#C5ED70] focus:ring-1 focus:ring-[#C5ED70] transition-colors"
                      />
                    </div>

                  </div>

                  {/* Topic Select */}
                  <div>
                    <label htmlFor="topic" className="block text-xs font-mono uppercase tracking-wider text-[#DADAD2] mb-1.5 font-medium">
                      Inquiry Topic
                    </label>
                    <select
                      id="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-3 bg-[#171815] border border-white/15 rounded-lg text-sm text-[#F6F5F0] focus:outline-hidden focus:border-[#C5ED70] focus:ring-1 focus:ring-[#C5ED70] transition-colors"
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
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#DADAD2] mb-1.5 font-medium">
                      Message <span className="text-[#C5ED70]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share context on what you would like to discuss..."
                      className="w-full px-4 py-3 bg-[#171815] border border-white/15 rounded-lg text-sm text-[#F6F5F0] placeholder-[#6D6D65] focus:outline-hidden focus:border-[#C5ED70] focus:ring-1 focus:ring-[#C5ED70] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C5ED70] text-[#171815] font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Email Client</span>
                  </button>

                  <p className="text-[11px] font-mono text-[#6D6D65] text-center pt-1">
                    Direct integration · No simulated database submissions or silent drops
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
