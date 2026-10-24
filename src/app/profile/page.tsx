'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

// Sync input name with session name when session loads and local state is empty
    if (session?.user?.name && !name && !loading) {
        setName(session.user.name);
    }

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

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await authClient.updateUser({
                name: name,
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
        <div className="min-h-[80vh] bg-base-200/40 py-10 px-4">
            <div className="max-w-2xl mx-auto space-y-6">
                
                {/* Header Title */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
                    <p className="text-sm text-gray-500">আপনার অ্যাকাউন্ট তথ্য এখানে দেখুন।</p>
                </div>

                {/* User Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="avatar">
                            <div className="w-16 h-16 rounded-full ring ring-emerald-600 ring-offset-base-100 ring-offset-2">
                                <img
                                    src={user.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                    alt={user.name || "User Avatar"}
                                />
                            </div>
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSignOut}
                        className="btn btn-outline btn-error btn-sm rounded-xl gap-2 font-medium"
                    >
                        সাইন আউট
                    </button>
                </div>

                {/* Info & Update Form Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">তথ্য</h3>

                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div>
                            <label className="label text-sm font-medium text-gray-700">নাম</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input input-bordered w-full focus:input-success rounded-xl"
                                placeholder="আপনার নাম লিখুন"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full rounded-xl font-semibold shadow-sm"
                        >
                            {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}