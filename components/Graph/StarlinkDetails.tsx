import { FC } from "react";

interface Props {
    name: string;
    version: string;
    launch: number;
    velocity_kms: number;
    height_km: number;
}

const StarlinkDetails: FC<Props> = ({
    name,
    version,
    velocity_kms,
    height_km,
}) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="starklink-details">
                    <h4 className="text-2xl font-bold text-white">
                        {name}
                    </h4>
                    <p className="text-sm text-slate-300">
                        {version}
                    </p>
                    <p className="text-sm text-slate-300">
                        {height_km}
                    </p>
                    <p className="text-sm text-slate-300">
                        {velocity_kms}
                    </p>
                </div>
            </div>
        </div>
    )
 }

export default StarlinkDetails

