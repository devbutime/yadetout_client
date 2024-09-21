import React from "react";
import { useMyAdListQuery } from "../../api/queries/ads/my-ads";
import { AdCard } from "../../components/ad/ad-card";

const MyAds: React.FC = () => {
    const { data: ads } = useMyAdListQuery();

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex flex-col flex-1">
                <h2 className="text-2xl font-semibold mb-6">Mes annonces</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {ads &&
                        ads.map((ad, index) => (
                            <div key={index} className="relative">
                                <AdCard ad={ad} mine={true} />
                            </div>
                        ))}
                </div>
            </main>
        </div>
    );
};

MyAds.displayName = "MyAds";

export { MyAds };
