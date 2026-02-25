"use client";

import { useState } from 'react';
import { sendContactMessage } from '../service/contact.service';

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await sendContactMessage({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message_text: formData.get('message') as string,
      })

      form.reset()
      setSuccess(true)
      setTimeout(() => {
          setSuccess(false)
        }, 3000) 
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section
      id="contact"
      className="scroll-mt-24 mx-auto max-w-6xl px-1 py-5"
    >
      <div className="rounded-2xl bg-white p-10 shadow-sm md:p-16">
        <div className="grid gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <h3 className="text-4xl font-bold leading-tight">
              Let’s build reliable  {" "}
              <span className="text-indigo-500">systems.</span>
            </h3>

            <p className="mt-6 max-w-md text-gray-600 leading-relaxed">
              I’m open to professional opportunities in IT infrastructure, 
              system engineering, and data platforms.</p>
            <p className="mt-2 max-w-md text-gray-600 leading-relaxed">Feel free to reach out for collaboration, discussion, or full-time roles.
            </p>

            <div className="mt-8 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-indigo-500"><img width="20" height="20" src="https://img.icons8.com/plumpy/24/new-post.png" alt="e-mail"/></span>
                galihdimas@outlook.com
              </p>
              <p className="flex items-center gap-2">
                <span className="text-indigo-500"><img width="20" height="20" src="https://img.icons8.com/forma-bold/24/phone.png" alt="phone"/></span>
                +62 85785449545
              </p>
              <p className="flex items-center gap-2">
                <span className="text-indigo-500"><img width="20" height="20" src="https://img.icons8.com/fluency/48/map-pin.png" alt="map-pin"/></span>
                Indonesia (Remote)
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium text-gray-500">
                  FULL NAME
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-gray-500">
                  EMAIL ADDRESS
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-gray-500">
                MESSAGE
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="How can I help you?"
                className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-indigo-500 px-8 py-3 text-sm font-medium text-white transition hover:bg-indigo-600"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {success && (
              <p className="text-sm text-green-600">
                Message sent successfully.</p>
            )}
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
