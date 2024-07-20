'use client'

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { verifySchema } from '@/schemas/verifySchema';
import { ApiResponse } from '@/types/ApiResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

const VerifyAccount = () => {
    const router = useRouter();
    const params = useParams<{ username: string }>();
    const { toast } = useToast()

    // zod implementation
    const form = useForm<z.infer<typeof verifySchema>>({
        resolver: zodResolver(verifySchema),
        // defaultValues: {
        //     code: ''
        // }
    })

    const onSubmit = async (data: z.infer<typeof verifySchema>) => {

        try {
            const response = await axios.post(`/api/verify-code`, {
                username: params.username,
                code: data.code
            })

            toast({
                title: "Success",
                description: response.data.message
            })
            router.replace('/signin')
        } catch (error) {
            console.error("Error in signup: ", error)
            const axiosError = error as AxiosError<ApiResponse>;
            let errorMessage = axiosError.response?.data.message;
            toast({
                title: 'Verification failed',
                description: errorMessage,
                variant: "destructive"
            })
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                        Verify Your Account {params.username}
                    </h1>
                    <p className="mb-4">Enter the verification code sent to your email</p>
                </div>
                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            name="code"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Verification Code</FormLabel>
                                    <Input {...field} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Verify</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default VerifyAccount