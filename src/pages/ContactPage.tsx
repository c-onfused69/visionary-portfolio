import { useRef } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Globe, Users, Briefcase } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_gr9hd35",
        "template_jlcf4tc",
        formRef.current,
        "Vjudi8YZkoADdjaNb"
      );

      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-brand-bg">
      {/* Background Decoration Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-150 h-150 bg-[#4605FF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-125 h-125 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="mb-12">
          <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-widest mb-4 block">
            GET IN TOUCH
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white max-w-2xl">
            Let's Build Something Together
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-[#292645] border border-white/10 p-8 rounded-xl special-glow"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    FULL NAME
                  </label>

                  <input
                    name="user_name"
                    className="bg-[#0d0928] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-secondary transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    EMAIL ADDRESS
                  </label>

                  <input
                    name="user_email"
                    className="bg-[#0d0928] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-secondary transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  SUBJECT
                </label>

                <input
                  name="subject"
                  className="bg-[#0d0928] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-secondary transition-all placeholder:text-slate-600"
                  placeholder="Project Inquiry"
                  type="text"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  MESSAGE
                </label>

                <textarea
                  name="message"
                  className="bg-[#0d0928] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-secondary transition-all placeholder:text-slate-600 resize-none"
                  placeholder="Tell me about your vision..."
                  rows={5}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full md:w-auto bg-brand-primary text-white font-bold py-4 px-10 rounded-lg hover:bg-brand-secondary hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#1F1C3A] border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all group"
            >
              <a
                href="mailto:n_iloy@outlook.com"
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-lg bg-[#343151] flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    EMAIL ME
                  </p>

                  <p className="text-lg font-medium text-white">
                    n_iloy@outlook.com
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#1F1C3A] border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#343151] flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    LOCATION
                  </p>

                  <p className="text-lg font-medium text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Availability Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="grow rounded-xl overflow-hidden border border-white/10 relative min-h-60"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEh0WV0EsDpK9QloJ4PHj3UeYsQspI0sHuaxz67a6sI1QKShg6C-y2AUPKaub2F45NRwp0hMlTirXJTnJqj71VeOWPg5sNAGa4gxgRVba06CLSuR4wd1W2otkm36nIiIYWHswhCXkGDRlrsqdeqoxU0mbPx9thQoUJAoHYb06mSa4FuBGII2yf_Qj5HLFv95JwKAHtL7p0ulK4weZ_nr5P0oyGzF76g4PUvpbR5HPlOqSivt9YXHRyO5hxDWpuD2XoV1lWP7icpebo"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#1b1836] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-brand-bg/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />

                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Available for new projects
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-between items-center bg-[#343151] border border-white/10 p-6 rounded-xl"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e2beb8]">
                SOCIAL PROFILES
              </span>

              <div className="flex gap-6">
                <a
                  href="https://nniloy888.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e2beb8] hover:text-brand-secondary transition-colors"
                >
                  <Globe size={20} />
                </a>

                <a
                  href="https://www.facebook.com/confused.as69/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e2beb8] hover:text-brand-secondary transition-colors"
                >
                  <Users size={20} />
                </a>

                <a
                  href="https://flowcv.com/resume/3lwjmp6d8i2j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e2beb8] hover:text-brand-secondary transition-colors"
                >
                  <Briefcase size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}