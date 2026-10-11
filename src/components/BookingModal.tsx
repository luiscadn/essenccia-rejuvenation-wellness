'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, CheckCircle, Sparkles, User, Mail, MessageSquare } from 'lucide-react';
import { TREATMENTS, Treatment, CLINIC_INFO } from '@/data/clinic-data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: Treatment | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
}) => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(
    initialTreatment?.id || 'free-personalized-consultation'
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-14');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentTreatment =
    TREATMENTS.find((t) => t.id === selectedTreatmentId) || TREATMENTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="relative w-full max-w-xl bg-[#f7f7f4] rounded-2xl shadow-2xl z-10 overflow-hidden border border-[#a2a1ba]/25 animate-fade-in max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#a2a1ba]/25 flex items-center justify-between bg-white">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#484774] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Westport Private Sanctuary
            </span>
            <h2 id="booking-modal-title" className="font-serif text-2xl font-light text-[#484774]">
              Reserve Your Consultation
            </h2>
          </div>
          <button
            onClick={handleResetAndClose}
            aria-label="Close booking modal"
            className="p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-3xl font-light text-[#484774]">
                  Consultation Reserved
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-stone-900">{name || 'Client'}</span>. Ledy has received your booking request for{' '}
                  <span className="font-semibold text-stone-900">{currentTreatment.name}</span> on{' '}
                  <span className="font-semibold text-stone-900">{selectedDate}</span> at{' '}
                  <span className="font-semibold text-stone-900">{selectedTime}</span>.
                </p>
                <p className="text-xs text-stone-500 pt-2">
                  A calendar reminder and preparation guide have been sent to your email.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="px-6 py-3 border border-stone-300 rounded-lg text-xs uppercase tracking-wider font-medium text-stone-800 flex items-center justify-center gap-2 hover:bg-stone-100"
                >
                  <Phone className="w-4 h-4 text-[#484774]" /> Call Ledy Now ({CLINIC_INFO.phone})
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 bg-[#484774] text-white rounded-lg text-xs uppercase tracking-wider font-medium hover:bg-stone-800"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Treatment Selection */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-stone-700 font-semibold block">
                  Select Desired Treatment
                </label>
                <select
                  value={selectedTreatmentId}
                  onChange={(e) => setSelectedTreatmentId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#a2a1ba]/25 rounded-xl text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#d7a761]"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} — {t.price} ({t.duration})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-stone-500 italic mt-1">
                  Duration: {currentTreatment.duration} • Investment: {currentTreatment.price}
                </p>
              </div>

              {/* Date & Time Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-700 font-semibold block flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#484774]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#a2a1ba]/25 rounded-xl text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#d7a761]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-700 font-semibold block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#484774]" />
                    Preferred Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#a2a1ba]/25 rounded-xl text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#d7a761]"
                  >
                    <option value="9:00 AM">9:00 AM – Morning Session</option>
                    <option value="10:30 AM">10:30 AM – Morning Session</option>
                    <option value="12:00 PM">12:00 PM – Midday Session</option>
                    <option value="1:30 PM">1:30 PM – Afternoon Session</option>
                    <option value="3:00 PM">3:00 PM – Late Afternoon</option>
                  </select>
                </div>
              </div>

              {/* Client Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-700 font-semibold block flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#484774]" />
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#a2a1ba]/25 rounded-xl text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#d7a761]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-stone-700 font-semibold block flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#484774]" />
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(203) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#a2a1ba]/25 rounded-xl text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#d7a761]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-stone-700 font-semibold block flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#484774]" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#a2a1ba]/25 rounded-xl text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#d7a761]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-stone-700 font-semibold block flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#484774]" />
                  Notes / Primary Skin or Body Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Interested in jawline lift, mild laxity after summer sun, sensitive skin..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#a2a1ba]/25 rounded-xl text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#d7a761]"
                />
              </div>

              {/* Call or Text alternative */}
              <div className="p-3.5 bg-[#f0efec] rounded-xl border border-[#a2a1ba]/25 flex items-center justify-between text-xs">
                <span className="text-stone-600">Prefer direct personal booking?</span>
                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="text-stone-900 font-bold hover:text-[#484774] flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" /> Call/Text {CLINIC_INFO.phone}
                </a>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#484774] hover:bg-[#3b3a63] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-xl transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[#d7a761]"
              >
                {submitting ? 'Confirming Availability…' : 'Confirm Consultation Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
