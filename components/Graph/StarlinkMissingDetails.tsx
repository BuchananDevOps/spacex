import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC } from "react";

const InternalButton = dynamic(() => import("../Button/InternalButton"));

interface Props {
    label: string;
    name: string;
    date: string;
    version: string;
    launch: number;
}

const StarlinkMissionDetails: FC<Props> = ({
    label,
    name,
    date,
    launch,
}) => {
    const router = useRouter();
    const handleLaunch = () => {
        router.push(`/launches/${launch}`);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="starklink-mission-details">
                    <h2 className="text-2xl font-bold text-white">
                        {label}
                    </h2>
                    <p className="text-sm text-slate-300">
                        {name}
                    </p>
                    <p className="text-sm text-slate-300">
                        {new Date(date).toDateString()}
                    </p>
                    <div className="flex flex-col items-center justify-center">
                    <InternalButton onClick={handleLaunch} title="Mission Details" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarlinkMissionDetails