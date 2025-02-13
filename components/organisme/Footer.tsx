'use client'
import { MapPinIcon, SendHorizontalIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../atoms/Forms'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios';
import { Button } from '../atoms/Button'
import { Textarea } from '../atoms/Textareas'
import { Input } from '../atoms/Inputs'
import Swal from 'sweetalert2'

const contactFormSchema = z.object({
    email: z.string().email(),
    message: z.string().min(6),
})

const Footer = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof contactFormSchema>>({
        defaultValues: {
            email: '',
            message: '',
        },
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
        setLoading(true);
        try {
            await axios.post("https://formspree.io/f/mkgwwpny", {
                email: data.email,
                message: data.message,
            });
            Swal.fire({
                title: 'Success',
                text: 'Thank you for your message. I will reply you soon.',
                icon: 'success',
                confirmButtonText: 'OK',
            })
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

    return (
        <div
            className='relative h-[800px] bg-secondary'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 h-[800px] w-full px-4 py-4 flex flex-col justify-between'>
                <div className='grid grid-cols-[repeat(2,1fr)]'>
                    <ul className='px-6'>
                        <li className='text-base font-bold mb-2'>
                            Navigation
                        </li>
                        <li className='mt-1'>
                            <Link href={'/'} className='text-sm font-medium'>Home</Link>
                        </li>
                        <li className='mt-1'>
                            <Link href={'/'} className='text-sm font-medium'>About</Link>
                        </li>
                        <li className='mt-1'>
                            <Link href={'/'} className='text-sm font-medium'>Projects</Link>
                        </li>
                        <li className='mt-1'>
                            <Link href={'/'} className='text-sm font-medium'>Contact</Link>
                        </li>
                    </ul>
                    <div className='px-6'>
                        <h1 className='text-base font-bold mb-2'>Address</h1>
                        <div className='flex items-center justify-start gap-2'>
                            <MapPinIcon size={18} />
                            <span className=''>Based in Bogor, Indonesia</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold capitalize'>Contact Me</h1>
                    <Form {...form}>
                        <form action="https://formspree.io/f/movqlzvl" method="POST" onSubmit={form.handleSubmit(onSubmit)} >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="johndoe@example.com" className='border-second-accent' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="mt-2">
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Write your message..." className='border-second-accent' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="mt-4">
                                Send {loading ?
                                    <div role="status">
                                        <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-second-accent" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </div>
                                    :
                                    <SendHorizontalIcon />}
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-4xl md:text-8xl font-black font-bebas tracking-widest'>KopalMuhamad</h1>
                    <p>©copyright</p>
                </div>
            </div>
        </div>
    )
}

export default Footer