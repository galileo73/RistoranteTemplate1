import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Reservation = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: null,
    time: '',
    guests: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('reservation.required');
    if (!formData.phone.trim()) newErrors.phone = t('reservation.required');
    if (!formData.date) newErrors.date = t('reservation.required');
    if (!formData.time) newErrors.time = t('reservation.required');
    if (!formData.guests) newErrors.guests = t('reservation.required');
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || null,
        date: format(formData.date, 'yyyy-MM-dd'),
        time: formData.time,
        guests: parseInt(formData.guests, 10),
        notes: formData.notes || null
      };

      await axios.post(`${API}/reservations`, payload);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: null,
        time: '',
        guests: '',
        notes: ''
      });
    } catch (error) {
      console.error('Reservation error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  return (
    <div data-testid="reservation-page" className="min-h-screen bg-[#F5EFE6]">
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-[#6A1E2E] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              {t('reservation.subtitle')}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F3A2F]">
              {t('reservation.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-8 md:py-12 pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                data-testid="reservation-success"
                className="mb-8 p-6 bg-green-50 border border-green-200 rounded-sm flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-1">Grazie!</h3>
                  <p className="text-green-700">{t('reservation.success')}</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                data-testid="reservation-error"
                className="mb-8 p-6 bg-red-50 border border-red-200 rounded-sm flex items-start gap-4"
              >
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-1">Errore</h3>
                  <p className="text-red-700">{t('reservation.error')}</p>
                </div>
              </motion.div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              data-testid="reservation-form"
              className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-sm shadow-lg border border-[#2F3A2F]/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#2F3A2F] font-medium">
                    {t('reservation.name')} <span className="text-[#6A1E2E]">*</span>
                  </Label>
                  <Input
                    id="name"
                    data-testid="reservation-name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Mario Rossi"
                    className={`border-[#2F3A2F]/20 focus:border-[#6A1E2E] focus:ring-[#6A1E2E] ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#2F3A2F] font-medium">
                    {t('reservation.phone')} <span className="text-[#6A1E2E]">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    data-testid="reservation-phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+420 XXX XXX XXX"
                    className={`border-[#2F3A2F]/20 focus:border-[#6A1E2E] focus:ring-[#6A1E2E] ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email" className="text-[#2F3A2F] font-medium">
                    {t('reservation.email')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="reservation-email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="mario@example.com"
                    className={`border-[#2F3A2F]/20 focus:border-[#6A1E2E] focus:ring-[#6A1E2E] ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label className="text-[#2F3A2F] font-medium">
                    {t('reservation.date')} <span className="text-[#6A1E2E]">*</span>
                  </Label>
                  <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        data-testid="reservation-date"
                        className={`w-full justify-start text-left font-normal border-[#2F3A2F]/20 hover:bg-[#F5EFE6] ${
                          !formData.date ? 'text-[#2F3A2F]/50' : 'text-[#2F3A2F]'
                        } ${errors.date ? 'border-red-500' : ''}`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, 'PPP') : t('reservation.selectDate')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => {
                          handleInputChange('date', date);
                          setDatePickerOpen(false);
                        }}
                        disabled={(date) => date < new Date() || date.getDay() === 1}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label className="text-[#2F3A2F] font-medium">
                    {t('reservation.time')} <span className="text-[#6A1E2E]">*</span>
                  </Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleInputChange('time', value)}
                  >
                    <SelectTrigger
                      data-testid="reservation-time"
                      className={`border-[#2F3A2F]/20 focus:ring-[#6A1E2E] ${errors.time ? 'border-red-500' : ''}`}
                    >
                      <SelectValue placeholder={t('reservation.selectTime')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <Label className="text-[#2F3A2F] font-medium">
                    {t('reservation.guests')} <span className="text-[#6A1E2E]">*</span>
                  </Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => handleInputChange('guests', value)}
                  >
                    <SelectTrigger
                      data-testid="reservation-guests"
                      className={`border-[#2F3A2F]/20 focus:ring-[#6A1E2E] ${errors.guests ? 'border-red-500' : ''}`}
                    >
                      <SelectValue placeholder={t('reservation.selectGuests')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {guestOptions.map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? t('reservation.guest') : t('reservation.guests_plural')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
                </div>

                {/* Notes */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="notes" className="text-[#2F3A2F] font-medium">
                    {t('reservation.notes')}
                  </Label>
                  <Textarea
                    id="notes"
                    data-testid="reservation-notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Allergie, occasioni speciali, richieste particolari..."
                    rows={4}
                    className="border-[#2F3A2F]/20 focus:border-[#6A1E2E] focus:ring-[#6A1E2E] resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                data-testid="reservation-submit"
                disabled={isSubmitting}
                className="w-full mt-8 bg-[#6A1E2E] hover:bg-[#501622] text-white py-6 text-base font-medium uppercase tracking-wide transition-all"
              >
                {isSubmitting ? 'Invio in corso...' : t('reservation.submit')}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 text-center text-[#2F3A2F]/70">
              <p className="text-sm">
                Per gruppi di più di 10 persone, contattaci direttamente:
              </p>
              <a
                href="tel:+420123456789"
                className="text-[#6A1E2E] font-medium hover:underline"
              >
                +420 123 456 789
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
