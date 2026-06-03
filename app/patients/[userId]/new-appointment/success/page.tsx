import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    return (
        <div className='flex h-screen max-h-screen px-[5%]'>
            <div className='succes-img'>
                <Link href="/">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        width={1000}
                        height={1000}
                        alt='logo'
                        className='h-10 w-fit'
                    />
                </Link>

                <section className='header mb-6 max-w-[600px] text-center'>
                    Your <span className='text-green-500'>appointment request</span> has been successfully submitted!
                </section>
            </div>
        </div>
    )
}

export default Success
