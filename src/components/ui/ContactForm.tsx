'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.success) {
        toast.success('Message sent! We\'ll contact you within 24 hours.', { duration: 5000 });
        reset();
      } else {
        toast.error(json.error || 'Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="card p-8">
      <h3 className="font-display text-2xl text-white mb-2">Send Us a Message</h3>
      <p className="text-slate-400 text-sm mb-6">
        Fill in the form below and your message will be saved directly to our system.
        We'll call you back within 24 hours.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-slate-300 text-xs font-medium mb-1.5">Full Name *</label>
            <input {...register('name', { required: 'Name is required' })}
              placeholder="e.g. Rajesh Sharma" className="form-input" />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-slate-300 text-xs font-medium mb-1.5">Phone Number *</label>
            <input {...register('phone', {
                required: 'Phone is required',
                pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit mobile number' },
              })}
              placeholder="e.g. 8779391690" className="form-input" />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-slate-300 text-xs font-medium mb-1.5">Email Address *</label>
          <input {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
            })}
            type="email" placeholder="you@example.com" className="form-input" />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-slate-300 text-xs font-medium mb-1.5">Service Required *</label>
          <select {...register('service', { required: 'Please select a service' })}
            className="form-input appearance-none">
            <option value="">Select a service…</option>
            <option>Bungalow Construction</option>
            <option>Bathroom Renovation</option>
            <option>Kitchen Work</option>
            <option>Tiles Work</option>
            <option>Flooring Work</option>
            <option>POP Work</option>
            <option>Wall Work</option>
            <option>Plaster Work</option>
            <option>Other / General Enquiry</option>
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
        </div>

        <div>
          <label className="block text-slate-300 text-xs font-medium mb-1.5">Your Message *</label>
          <textarea {...register('message', { required: 'Please describe your project' })}
            rows={5} placeholder="Tell us about your project — location, size, timeline, budget, etc."
            className="form-input resize-none" />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}
          className="btn-primary justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed">
          {isSubmitting ? (
            <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin1" />Sending…</>
          ) : (
            <><Send size={17} />Send Message</>
          )}
        </button>

        <p className="flex items-center gap-2 text-slate-500 text-xs">
          <CheckCircle size={13} style={{ color: '#10B981' }} />
          Your message is saved securely and only visible to our admin panel.
        </p>
      </form>
    </div>
  );
}
