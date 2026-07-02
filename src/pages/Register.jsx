import { useState } from 'react'
import { supabase } from '../lib/supabase.js'

const YEAR_OPTIONS = ['1st Year', '2nd Year', '3rd Year', '4th Year']

const initialForm = { name: '', rollNumber: '', year: '' }

export default function Register() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (values) => {
    const newErrors = {}
    if (!values.name.trim()) newErrors.name = 'Name is required.'
    if (!values.rollNumber.trim()) newErrors.rollNumber = 'Roll number is required.'
    if (!values.year.trim()) newErrors.year = 'Please select your year.'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    setStatusMessage('')

    const trimmed = {
      name: form.name.trim(),
      rollNumber: form.rollNumber.trim(),
      year: form.year.trim(),
    }

    const validationErrors = validate(trimmed)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    try {
      const { error } = await supabase.from('Registrations').insert([
        {
          name: trimmed.name,
          roll_number: trimmed.rollNumber,
          year: trimmed.year,
        },
      ])

      if (error) throw error

      setStatus('success')
      setStatusMessage('You are registered! We look forward to seeing you at the event.')
      setForm(initialForm)
      setErrors({})
    } catch (err) {
      setStatus('error')
      setStatusMessage(
        err?.message || 'Something went wrong while registering. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-ieee-gray py-20">
      <div className="mx-auto max-w-xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <span className="section-eyebrow text-ieee-blue">TechSpark 2026</span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ieee-darkblue sm:text-4xl">
            Event Registration
          </h1>
          <p className="mt-3 text-ieee-slate">
            Fill in your details below to reserve your spot. It only takes a minute.
          </p>
        </div>

        <div className="card animate-fadeInUp p-8 sm:p-10">
          {status === 'success' && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium text-green-800">{statusMessage}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <p className="text-sm font-medium text-red-800">{statusMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ieee-darkblue">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Priya Sharma"
                className="input-field"
                disabled={submitting}
              />
              {errors.name && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>}
            </div>

            {/* Roll Number */}
            <div>
              <label htmlFor="rollNumber" className="mb-2 block text-sm font-semibold text-ieee-darkblue">
                Roll Number
              </label>
              <input
                id="rollNumber"
                name="rollNumber"
                type="text"
                value={form.rollNumber}
                onChange={handleChange}
                placeholder="e.g. 21A81A0501"
                className="input-field"
                disabled={submitting}
              />
              {errors.rollNumber && (
                <p className="mt-1.5 text-xs font-medium text-red-600">{errors.rollNumber}</p>
              )}
            </div>

            {/* Year */}
            <div>
              <label htmlFor="year" className="mb-2 block text-sm font-semibold text-ieee-darkblue">
                Year
              </label>
              <select
                id="year"
                name="year"
                value={form.year}
                onChange={handleChange}
                className="input-field appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%235A6B7A%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10"
                disabled={submitting}
              >
                <option value="">Select your year</option>
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              {errors.year && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.year}</p>}
            </div>

            <button type="submit" disabled={submitting} className="btn-primary w-full !py-4 text-base">
              {submitting && (
                <svg className="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              )}
              {submitting ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-ieee-slate">
          By registering, you agree to receive event updates from the IEEE Student Branch.
        </p>
      </div>
    </div>
  )
}
