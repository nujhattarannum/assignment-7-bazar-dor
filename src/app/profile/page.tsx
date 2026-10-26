'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    if (isPending) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-emerald-600"></span>
            </div>
        );
    }

    if (!session) {
        router.push('/signIn');
        return null;
    }

    const user = session.user;

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const updatedName = formData.get('name') as string;

        try {
            await authClient.updateUser({
                name: updatedName,
            });
            alert('Profile updated successfully!');
            router.refresh();
        } catch (err) {
            console.error('Update failed', err);
        } finally {
            setLoading(false);
        }
    };

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
        <div className="min-h-screen bg-[#f3f5f2] py-12 px-4">
            <div className="max-w-2xl mx-auto space-y-6">
                
                {/* Header Title */}
                <div className="space-y-1">
                    <h1 className="text-2xl font-extrabold text-gray-900">আমার প্রোফাইল</h1>
                    <p className="text-sm text-gray-500">আপনার অ্যাকাউন্ট তথ্য এখানে দেখুন।</p>
                </div>

                {/* User Card */}
                <div className="bg-white rounded-2xl border border-gray-100/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                            <img
                                src={user.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                alt={user.name || "User Avatar"}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 px-4 py-2 border border-red-200 rounded-xl text-red-500 hover:bg-red-50 text-sm font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        সাইন আউট
                    </button>
                </div>

                {/* Info & Update Form Card */}
                <div className="bg-white rounded-2xl border border-gray-100/80 p-6 space-y-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">তথ্য</h3>

                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">নাম</label>
                            <input
                                key={user.email}
                                type="text"
                                name="name"
                                defaultValue={user.name}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 transition-all"
                                placeholder="আপনার নাম লিখুন"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-[#058240] hover:bg-[#046c35] text-white rounded-xl font-semibold shadow-sm transition-colors"
                        >
                            {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}