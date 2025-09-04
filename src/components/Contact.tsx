import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Template form submission - replace with your preferred method
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a template - implement your preferred contact method)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-6 md:px-12 lg:px-20 lg:ml-80"
      ref={ref}
    >
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-light-gray mb-8 leading-relaxed">
              I'm always interested in new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:njskoczk@gmail.com"
                className="block text-off-white hover:text-yellow transition-colors duration-300"
              >
                njskoczk@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/nskoczkowski/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-off-white hover:text-yellow transition-colors duration-300"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/nskocz"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-off-white hover:text-yellow transition-colors duration-300"
              >
                GitHub →
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-transparent border-b-2 border-light-gray border-opacity-30 text-off-white placeholder-light-gray focus:border-yellow focus:outline-none transition-all duration-300 hover:border-opacity-50"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-transparent border-b-2 border-light-gray border-opacity-30 text-off-white placeholder-light-gray focus:border-yellow focus:outline-none transition-all duration-300 hover:border-opacity-50"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 bg-transparent border-b-2 border-light-gray border-opacity-30 text-off-white placeholder-light-gray focus:border-yellow focus:outline-none resize-vertical transition-all duration-300 hover:border-opacity-50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow text-navy py-4 font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover-glow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;