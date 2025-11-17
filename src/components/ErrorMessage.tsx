import { type PropsWithChildren } from 'react'

export default function ErrorMessage({ children }: PropsWithChildren) {
    return (
        <div className='text-center my-6 rounded-lg bg-red-50 border-2 border-red-500 text-red-800 font-semibold p-4 shadow-md'>
            <span className='text-2xl mr-2'>⚠️</span>
            {children}
        </div>
    )
}
