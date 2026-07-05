"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  engagementType: string;
  projectDescription: string;
};

const initialForm: FormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  projectType: "",
  engagementType: "",
  projectDescription: "",
};

const inputClass =
  "w-full bg-bg-card border border-[rgba(255,255,255,0.08)] text-text-primary font-dm text-sm px-4 py-3 outline-none focus:border-[rgba(201,169,110,0.5)] transition-colors duration-200 placeholder:text-text-muted";

const labelClass = "block font-dm text-[0.65rem] tracking-[0.14em] uppercase text-text-muted mb-2";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useLanguage();
  const f = t.contact.form;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const contactItems = [
    { key: "email", value: "diane.derome@gmail.com", href: "mailto:diane.derome@gmail.com" },
    { key: "phone", value: "514-949-1788", href: "tel:+15149491788" },
    { key: "location", value: t.contact.values.location },
    { key: "hours", value: t.contact.values.hours },
  ] as const;

  return (
    <section id="contact" className="py-28 lg:py-36 border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-4">{t.contact.eyebrow}</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text-primary mb-6 leading-tight">
            {t.contact.heading}
          </h2>
          <p className="font-dm text-sm text-text-secondary leading-relaxed mb-10">
            {t.contact.subheading}
          </p>

          <ul className="space-y-5">
            {contactItems.map((item) => (
              <li key={item.key} className="flex flex-col gap-1">
                <span className="font-dm text-[0.62rem] tracking-[0.16em] uppercase text-gold">
                  {t.contact.labels[item.key]}
                </span>
                {"href" in item ? (
                  <a
                    href={item.href}
                    className="font-dm text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-dm text-sm text-text-secondary">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="h-full flex flex-col items-center justify-center text-center py-16 border border-[rgba(201,169,110,0.2)] bg-bg-card px-8"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-14 h-14 rounded-full border border-gold flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-3xl font-light text-text-primary mb-3">
                  {t.contact.success.heading}
                </h3>
                <p className="font-dm text-sm text-text-secondary leading-relaxed max-w-sm">
                  {t.contact.success.body}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="mt-8 font-dm text-[0.68rem] tracking-[0.14em] uppercase text-gold hover:text-text-primary transition-colors"
                >
                  {t.contact.success.reset}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>{f.fullName} *</label>
                    <input
                      id="fullName" name="fullName" type="text" required
                      value={form.fullName} onChange={handleChange}
                      placeholder={f.placeholders.fullName}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className={labelClass}>{f.companyName}</label>
                    <input
                      id="companyName" name="companyName" type="text"
                      value={form.companyName} onChange={handleChange}
                      placeholder={f.placeholders.companyName}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className={labelClass}>{f.email} *</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder={f.placeholders.email}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>{f.phone}</label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder={f.placeholders.phone}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className={labelClass}>{f.projectType} *</label>
                    <select
                      id="projectType" name="projectType" required
                      value={form.projectType} onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled>{f.placeholders.selectType}</option>
                      {f.projectTypes.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="engagementType" className={labelClass}>{f.engagementType} *</label>
                    <select
                      id="engagementType" name="engagementType" required
                      value={form.engagementType} onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled>{f.placeholders.selectType}</option>
                      {f.engagementTypes.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className={labelClass}>{f.projectDescription} *</label>
                  <textarea
                    id="projectDescription" name="projectDescription" required rows={5}
                    value={form.projectDescription} onChange={handleChange}
                    placeholder={f.placeholders.projectDescription}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  {error && (
                    <p className="font-dm text-xs text-red-400 mb-3 text-center" role="alert">
                      {t.contact.error.body}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full font-dm text-[0.72rem] tracking-[0.14em] uppercase py-4 bg-gold text-bg-primary hover:bg-[#b8935a] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {submitting ? t.contact.submitting : f.submit}
                  </button>
                  <p className="font-dm text-xs text-text-muted mt-3 text-center">{f.note}</p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
