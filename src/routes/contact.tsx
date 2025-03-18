import { useState } from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mpwpwbjp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setLoading(false);

      if (response.ok) {
        toast("Sent", { description: "Message successfully sent!" });
        setForm({ name: "", email: "", contact: "", message: "" });
      } else {
        toast("Error", { description: "Failed to send message. Try again!" });
      }
    } catch (error) {
      setLoading(false);
      toast("Error", { description: "Something went wrong!" });
    }
  };

  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              Contact Us
            </span>
            <span className="text-gray-500 font-extrabold">
              {" "}
              - Let’s Connect
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            Have questions or feedback? We'd love to hear from you! Reach out
            via email or social media, and we'll be happy to assist you.
          </p>
        </div>

        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/contactus.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-8 text-center">
          <Button onClick={() => setIsFormOpen(true)}>
            Contact Us <Sparkles className="ml-2" />
          </Button>
        </div>

        {isFormOpen && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-center">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="mt-4">
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your email"
                  required
                />
              </div>

              {/* Contact Number Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your contact number"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your message"
                  //   rows="4"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Contact;
