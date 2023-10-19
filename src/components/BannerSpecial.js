import Link from 'next/link';

export const BannerSpecial = () => {
    return (
        <div className="w-full h-48 flex flex-col justify-center items-center bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white p-6">
            <h3 className="text-4xl font-bold mb-2">
                Get 30% Off all dishes!
            </h3>
            <p className="text-gray-200 mb-4">
                Fugiat cupidatat sint proident ut mollit. Nostrud culpa veniam exercitation non.
            </p>
            <Link href="/menu">
                <div className="border border-white py-2 px-4 rounded hover:bg-white hover:text-amber-600 transition duration-300 ease-in-out">
                    View Menu
                </div>
            </Link>
        </div>
    );
};

