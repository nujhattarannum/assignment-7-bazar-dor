'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const UserProfile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push('/signIn');
                    router.refresh();
                },
            },
        });
    };

    return (
        <div>
            {user ? (
                // LOGGED IN: Avatar & Dropdown Menu matching Figma
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="flex items-center gap-2 cursor-pointer">
                        <div className="avatar">
                            <div className="w-10 h-10 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                                <img
                                    src={
                                        user.image ||
                                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    }
                                    alt={user.name || "User Avatar"}
                                />
                            </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-800 hidden sm:inline-block">
                            {user.name}
                        </span>
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-2xl w-56 mt-3 border border-gray-100"
                    >
                        <li className="px-4 py-2 border-b border-gray-100 pointer-events-none">
                            <p className="text-sm font-bold text-gray-800 truncate">{user.name}</p>
                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </li>
                        <li>
                            <Link href="/profile" className="flex items-center text-sm text-gray-700 hover:text-emerald-600 py-2.5">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                আমার প্রোফাইল
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleSignOut}
                                className="flex items-center text-sm text-red-600 hover:bg-red-50 py-2.5 w-full text-left font-medium"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                সাইন আউট
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                // LOGGED OUT: Sign In & Sign Up Buttons
                <div className="flex items-center gap-3 sm:gap-6">
                    <Link 
                        href="/signIn" 
                        className="text-xs sm:text-sm font-semibold text-gray-800 hover:text-emerald-600 transition-colors"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/signUp" 
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl shadow-sm transition-colors whitespace-nowrap"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserProfile;