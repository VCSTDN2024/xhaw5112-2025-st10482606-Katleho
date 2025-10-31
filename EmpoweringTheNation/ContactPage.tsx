import React from 'react';
import { Button} from './Components/Button';
import { Input } from './Components/Input';
import { Textarea } from './Components/Textarea';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onSubmit: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl text-black mb-2">Contact Us</h1>
          <p className="text-gray-700">Get in touch with our team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl text-black mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your full name"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  placeholder="Your phone number"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Message</label>
                <textarea 
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  className="w-full"
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg text-black mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Phone:</p>
                  <p className="text-black">011 2508 000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email:</p>
                  <p className="text-black">empoweringthenation@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Address:</p>
                  <p className="text-black">Bryanston Dr Sandtown, Sandton, 2196</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg text-black mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-black">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-black">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-black">Closed</span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg text-black mb-4">Location</h3>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                    📍
                  </div>
                  <p className="text-sm">Interactive map would be displayed here</p>
                  <p className="text-xs mt-1">Bryanston Dr, Sandton</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};