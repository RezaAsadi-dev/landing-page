"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function GlowingEffectDemo({ data }: { data: string[] }) {
    return (
        <ul className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-3 md:gap-4 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Box className="h-4 w-4 text-white " />}
                description={data[0]}
            />

            <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Settings className="h-4 w-4 text-white " />}
                description={data[1]}
            />

            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Lock className="h-4 w-4 text-white" />}
                description={data[2]}
            />

            <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Sparkles className="h-4 w-4 text-white " />}
                description={data[3]}
            />

            <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Search className="h-4 w-4 text-white " />}
                description={data[4]}
            />

        </ul>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, description }: GridItemProps) => {
    return (
        <li className={`list-none ${area} min-h-[200px] sm:min-h-[220px] md:min-h-0`} dir="rtl">
            <div className="relative h-full rounded-xl sm:rounded-2xl md:rounded-3xl border-2 p-2 sm:p-2 md:p-3">
                <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 sm:gap-5 md:gap-6 overflow-hidden rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D] bg-gray-600">
                    <div className="relative flex flex-1 flex-col justify-between gap-2 sm:gap-3">
                        <div className="w-fit rounded-lg border border-white p-1.5 sm:p-2">
                            {icon}
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <h2 className="font-sans text-xs/[1.1rem] sm:text-sm/[1.125rem] md:text-base/[1.375rem] text-white [&_b]:md:font-semibold [&_strong]:md:font-semibold leading-relaxed">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
