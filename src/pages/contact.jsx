/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone, Github, Instagram, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import GlowButton from "../components/GlowButton";

import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";

export default function Contact() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState("😊");
  const [comments, setComments] = useState([]);

  const submitComment = async (e) => {
    e.preventDefault();

    if (!name || !message) return;

    await addDoc(collection(db, "comments"), {
      name,
      message,
      emoji,
      createdAt: serverTimestamp()
    });

    setName("");
    setMessage("");
  };

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setComments(data);
    });

    return () => unsubscribe();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_12ikmvh",
        "template_84dr9dn",
        form.current,
        "K8pn8akXWr8U9tlK4"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I'll get back to you soon.",
          confirmButtonColor: "#06b6d4"
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again.",
        });
      });

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent py-4 text-primary transition-colors duration-500"
    >

      <div className="mx-auto max-w-6xl px-6 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <h2 className="text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"></div>

          <p className="text-text-secondary mx-auto mt-6 max-w-xl transition-colors duration-500">
            I'm open to exciting collaborations and project ideas. Feel free to drop a line below.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-transparent bg-card-bg p-8 backdrop-blur-md transition-all hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]"
          >
            <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>

            <p className="mb-8 text-sm text-slate-400">
              Have an idea or project in mind? I'm always excited to collaborate and help turn concepts into impactful digital solutions.
            </p>

            <div className="text-text-secondary space-y-6 transition-colors duration-500">

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <span>085723974973</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span>yusyfina@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span>Bandung, Indonesia</span>
              </div>

            </div>

            <div className="mt-10">
              <h4 className="mb-4 text-lg font-semibold text-cyan-400">
                Follow Me
              </h4>

              <div className="flex gap-4">

                <a
                  href="https://github.com/Yusyfina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] active:scale-95"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://instagram.com/ysfna._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] active:scale-95"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/yusyfina-yuniarti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] active:scale-95"
                >
                  <Linkedin size={20} />
                </a>

              </div>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-transparent bg-card-bg p-8 backdrop-blur-md transition-all hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]"
          >
            <h3 className="mb-6 text-xl font-semibold">Send Direct Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-transparent bg-card-bg px-4 py-3 text-primary transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full rounded-xl border border-transparent bg-card-bg px-6 py-3 text-primary transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full rounded-xl border border-transparent bg-card-bg px-4 py-3 text-primary transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              />

              <GlowButton type="submit" className="w-full">
                Send Message <Send size={18} />
              </GlowButton>

            </form>
          </motion.div>

        </div>

        <div className="mt-12">

          <form
            onSubmit={submitComment}
            className="mb-12 space-y-4 rounded-2xl border border-transparent bg-card-bg p-6 backdrop-blur-md transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
          >

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-xl border border-transparent bg-card-bg px-4 py-3 text-primary placeholder-slate-400 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your comment..."
              rows="3"
              className="w-full rounded-xl border border-transparent bg-card-bg px-4 py-3 text-primary placeholder-slate-400 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            />

            <select
              value={emoji}
              onChange={(e) => setEmoji(e.target.value)}
              className="w-full rounded-xl border border-transparent bg-card-bg px-4 py-3 text-primary transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              <option>😀</option>
              <option>😁</option>
              <option>😊</option>
              <option>😍</option>
              <option>😎</option>
              <option>🤩</option>
              <option>🥳</option>
              <option>😇</option>
              <option>🤖</option>
              <option>👾</option>
              <option>🐱</option>
              <option>🐼</option>
              <option>🦊</option>
              <option>🔥</option>
              <option>⚡</option>
              <option>🚀</option>
              <option>⭐</option>
            </select>

            <GlowButton type="submit" className="w-full">
              Post Comment
            </GlowButton>

          </form>

          <div className="mt-1 rounded-2xl border border-transparent bg-card-bg p-8 backdrop-blur-md">

            <div className="mb-6 flex items-center justify-between border-b border-transparent pb-4">

              <h3 className="text-xl font-semibold text-cyan-400">
                Comments ({comments.length})
              </h3>

            </div>

            <div className="max-h-[420px] space-y-6 overflow-y-auto pr-2">

              {comments.map((c) => (

                <div
                  key={c.id}
                  className="flex items-start gap-4"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-white/10 text-xl shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                    {c.emoji}
                  </div>

                  <div className="max-w-[850px] break-words rounded-2xl border border-transparent bg-card-bg px-5 py-4 backdrop-blur-md">

                    <h4 className="font-semibold text-cyan-400">
                      {c.name}
                    </h4>

                    <p className="text-text-primary mt-1">
                      {c.message}
                    </p>

                    <span className="mt-2 block text-xs text-slate-500">
                      {c.createdAt?.toDate().toLocaleString()}
                    </span>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}