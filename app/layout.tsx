import type {Metadata} from 'next';import './globals.css';import Header from '@/components/Header';import Footer from '@/components/Footer';import WhatsApp from '@/components/WhatsApp';import {foundation} from '@/lib/data'
export const metadata:Metadata={title:'Sadhna Foundation | सेवा, समर्पण और संस्कार',description:'Sadhna Foundation works across education, women empowerment, healthcare, environment and youth development.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<WhatsApp/><Footer/></body></html>}
