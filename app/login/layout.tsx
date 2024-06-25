import type { Metadata } from "next";
import { ReactNode } from 'react'

export default async function SigninLayout({ children }: { children: ReactNode }) {
	return (
        <html className="h-full bg-gray-50">
            <body className="h-full">{children}</body>
        </html>
	)
}