import { FC, PropsWithChildren } from "react"
import { motion } from "framer-motion"
import StarlinkDetails from "./StarlinkDetails"
import StarlinkMissionDetails from "./StarlinkMissingDetails"

const StarlinkMotion: FC<PropsWithChildren> = ({ children }) => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        {children}
        </motion.div>
    )
}



const StarlinkInfo: FC<SPACEX.ArKs.GlobePoint> = ({
    label,
    name,
    date,
    launch,
    version,
    velocity_kms,
    height_km,

}) => {
    return (
        <div>
            <StarlinkMotion>
                <StarlinkDetails version={version} launch={launch} velocity_kms={velocity_kms} height_km={height_km} name={label} />
                <StarlinkMissionDetails label={label} name={name} date={date} launch={launch} version={version} />
            </StarlinkMotion>
        </div>
    )
}

export default StarlinkInfo