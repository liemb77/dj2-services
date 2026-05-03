"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text-primary mb-6 leading-tight">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="font-dm text-sm text-text-secondary leading-relaxed mb-10">
            Fill out the form and Diane will follow up to determine if your project is a fit. Available Monday to Friday, 8:00 AM – 5:00 PM.
          </p>

          <ul className="space-y-5">
            {[
              {
                label: "Email",
                value: "diane.derome@gmail.com",
                href: "mailto:diane.derome@gmail.com",
              },
              {
                label: "Phone",
                value: "514-949-1788",
                href: "tel:+15149491788",
              },
              {
                label: "Location",
                value: "Remote — Québec, Canada",
              },
              {
                label: "Hours",
                value: "Mon–Fri, 8:00 AM – 5:00 PM (No weekends, no holidays)",
              },
            ].map((item) => (
              <li key={item.label} className="flex flex-col gap-1">
                <span className="font-dm text-[0.62rem] tracking-[0.16em] uppercase text-gold">
                  {item.label}
                </span>
                {item.href ? (
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
                {/* Checkmark */}
                <div className="w-14 h-14 rounded-full border border-gold flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-3xl font-light text-text-primary mb-3">
                  Inquiry Received
                </h3>
                <p className="font-dm text-sm text-text-secondary leading-relaxed max-w-sm">
                  Thank you for reaching out. Diane will review your inquiry and follow up within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="mt-8 font-dm text-[0.68rem] tracking-[0.14em] uppercase text-gold hover:text-text-primary transition-colors"
                >
                  Submit another inquiry
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
                    <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className={labelClass}>Company Name</label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="514-000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className={labelClass}>Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={form.projectType}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled>Select type</option>
                      <option value="procurement">Procurement</option>
                      <option value="contract">Contract Management</option>
                      <option value="logistics">Logistics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="engagementType" className={labelClass}>Engagement Type *</label>
                    <select
                      id="engagementType"
                      name="engagementType"
                      required
                      value={form.engagementType}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled>Select type</option>
                      <option value="part-time">Part-Time</option>
                      <option value="full-time">Full-Time</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className={labelClass}>Project Description *</label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows={5}
                    value={form.projectDescription}
                    onChange={handleChange}
                    placeholder="Briefly describe your project, timeline, and any key requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full font-dm text-[0.72rem] tracking-[0.14em] uppercase py-4 bg-gold text-bg-primary hover:bg-[#b8935a] transition-colors duration-300"
                  >
                    Send Inquiry
                  </button>
                  <p className="font-dm text-xs text-text-muted mt-3 text-center">
                    This form is for project inquiries only — not for booking a call directly.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
