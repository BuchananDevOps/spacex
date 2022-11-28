import { FC } from "react";

interface Props {
    starlinkOnTheOrbit: number;
}

const StarlinKDescription: FC<Props> = ({
    starlinkOnTheOrbit,
 }) => {
    return (
        <div className="starlinkDescription">
            <div className="flex flex-col items-center justify-center">
                <div className="starlink-description">
                    <h2 className="text-2xl font-bold text-white">
                        Starlink
                    </h2>
                    <p className="text-sm text-slate-300">
                    {starlinkOnTheOrbit}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StarlinKDescription