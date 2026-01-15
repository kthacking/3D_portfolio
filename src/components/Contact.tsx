import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [focused, setFocused] = useState<string | null>(null);

    return (
        <div className="w-full flex flex-col md:flex-row gap-12 pointer-events-auto items-center justify-center">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="w-full max-w-lg bg-glass backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
            >
                <h2 className="text-4xl font-black mb-8 text-white">Let's Connect</h2>

                <form className="space-y-6">
                    <div className={`relative border-b transition-colors duration-300 ${focused === 'name' ? 'border-neon-blue' : 'border-white/20'}`}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-transparent p-4 outline-none text-white placeholder-gray-500"
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                        />
                    </div>

                    <div className={`relative border-b transition-colors duration-300 ${focused === 'email' ? 'border-neon-blue' : 'border-white/20'}`}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-transparent p-4 outline-none text-white placeholder-gray-500"
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                        />
                    </div>

                    <div className={`relative border-b transition-colors duration-300 ${focused === 'msg' ? 'border-neon-blue' : 'border-white/20'}`}>
                        <textarea
                            rows={4}
                            placeholder="Message"
                            className="w-full bg-transparent p-4 outline-none text-white placeholder-gray-500 resize-none"
                            onFocus={() => setFocused('msg')}
                            onBlur={() => setFocused(null)}
                        />
                    </div>

                    <button type="button" className="w-full bg-neon-orange hover:bg-orange-600 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                        SEND MESSAGE <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-6"
            >
                <div className="bg-black/50 p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-neon-blue transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="text-neon-blue" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase">Email</p>
                        <p className="text-white font-bold">kirubalan220@gmail.com</p>
                    </div>
                </div>

                <div className="bg-black/50 p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-neon-blue transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="text-green-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase">Phone</p>
                        <p className="text-white font-bold">+91 6385430428</p>
                    </div>
                </div>

                <div className="bg-black/50 p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-neon-blue transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Linkedin className="text-blue-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase">LinkedIn</p>
                        <p className="text-white font-bold">Linked-kiruba220.com</p>
                    </div>
                </div>

                <div className="bg-black/50 p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-neon-blue transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="text-red-500" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase">Location</p>
                        <p className="text-white font-bold">New Delhi, India</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
