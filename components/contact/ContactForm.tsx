"use client";
import { formSubmission } from "@/actions/formAction";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader, Mail } from "lucide-react";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import useIsomorphicLayoutEffect from "@/providers/useIsoMorphicLayout";
import ContactFormLine from "./ContactFromLine";
import MagneticEffect from "@/providers/MagneticEffect";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

const contactFormSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  message: z.string(),
  subject: z.string(),
});

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setLoading(true);
    try {
      await axios.post("https://formspree.io/f/mkgwwpny", {
        email: data.email,
        message: data.message,
      });
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error(error.response.data);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = (inputId: number) => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.input-line-${inputId}`,
        { translateX: 0 },
        {
          translateX: "66%",
          duration: 1,
          ease: "power1.inOut",
        }
      );
    });

    return () => ctx.revert();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <div className="group">
              <div className="relative overflow-hidden">
                <Input
                  {...field}
                  type="text"
                  placeholder="Your name"
                  name="name"
                  autoComplete="off"
                  onFocus={() => handleFocus(1)}
                  className="border-none peer w-full bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
                />
                <ContactFormLine inputId={1} />
              </div>
              <FormMessage />
            </div>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <div className="group">
              <div className="relative overflow-hidden">
                <Input
                  {...field}
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Your email"
                  onFocus={() => handleFocus(2)}
                  className="border-none peer w-full bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
                />
                <ContactFormLine inputId={2} />
              </div>
              <FormMessage />
            </div>
          )}
        />
        <FormField
          name="subject"
          control={form.control}
          render={({ field }) => (
            <div className="group">
              <div className="relative overflow-hidden">
                <Input
                  {...field}
                  type="text"
                  name="subject"
                  autoComplete="off"
                  placeholder="Subject"
                  onFocus={() => handleFocus(3)}
                  className="border-none peer w-full bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
                />
                <ContactFormLine inputId={3} />
              </div>
              <FormMessage />
            </div>
          )}
        />
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <div className="group">
              <div className="relative overflow-hidden">
                <textarea
                  {...field}
                  className="border-none peer min-h-[11rem] w-full resize-none bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
                  placeholder="Your Message"
                  name="message"
                  onFocus={() => handleFocus(4)}
                />
                <ContactFormLine inputId={4} />
              </div>
              <FormMessage />
            </div>
          )}
        />
        <Button
          aria-disabled={loading}
          variant="outline"
          size="lg"
          className="mt-6"
        >
          <MagneticEffect>
            {loading === true ? (
              <div className="inline-flex items-center gap-x-2">
                <Loader className="h-6 w-6 animate-spin" />
                <span>Sending ...</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-x-2">
                <Mail className="h-6 w-6" />
                <span>Send</span>
              </div>
            )}
          </MagneticEffect>
        </Button>
      </form>
    </Form>
  );
}
