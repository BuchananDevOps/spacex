
import { FC, useEffect, useState, useCallback } from "react";
import { getLatLngObj } from "tle.js";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { GlobePoint, Starlink } from "@/lib/types";
import StarlinkDetails from "@/components/Graph/StarlinkDetails";
import useSWR from "swr";
import { NextPage } from "next";
const StarlinkInfo = dynamic(() => import("@/components/Graph/StarlinkInfo"));
const StarlinkDescription = dynamic(() => import("@/components/Graph/StarlinkDescription"));

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Starlink: NextPage<{ starlink: Starlink[] }> = ({ starlink }) => {
    const {data } = useSWR<Starlink[]>("https://api.spacexdata.com/v4/starlink", fetcher)
    const [showStarlinkInfo, setShowStarlinkInfo] = useState(false);
    const [starlinkInfoData, setStarlinkInfo] = useState<any>({});

    const handleStarlinkClick = useCallback((starlink: GlobePoint) => {
        setStarlinkInfo(starlink);
        setShowStarlinkInfo(true);
    }, []);

    const handleStarlinkClose = useCallback(() => {
        setShowStarlinkInfo(false);
    }, []);

    const gData: GlobePoint[] = [];

    starlink?.forEach((starlink: any) => {
        const TLE0  = starlink?.spaceTrack?.TLE_0.substring(
            2,
            starlink?.spaceTrack?.TLE_0.length);

            const tle = 
            TLE0 + 
            "\n" +
            starlink?.spaceTrack?.TLE_1 +
            "\n" +
            starlink?.spaceTrack?.TLE_2;

            const latLonObj = getLatLngObj(tle);

            gData.push({
                lat: latLonObj.lat,
                lng: latLonObj.lng,
                alt: 0.9,
                color: "white",
                radius: 0.1,
                label: starlink?.spaceTrack?.OBJECT_NAME,
                launch: starlink?.launch,
                version: starlink?.version,
                velocity_kms: starlink?.velocity_kms,
                height_km: starlink?.height_km,
            
            });
    });
    
    let globe = <></>

    const showStarlinkInfoHandler = (point: any) => {
        starlinkInfoData(point)
        setShowStarlinkInfo(true)
    }

    if (gData) {
        globe = (
          <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            pointsData={gData}
            pointAltitude={0.001}
            pointColor="color"
            pointLabel="label"
            showGraticules
            pointRadius={0.35}
            onPointClick={(point, event) => showStarlinkInfoHandler(point)}
          />
        );
      }




    return (
        <>
            <StarlinkInfo 
            {...starlinkInfoData}
            >
                <StarlinkDescription starlinkOnTheOrbit={114} />
                {globe}
                <AnimatePresence>
                    {showStarlinkInfo && (
                        <StarlinkDetails {...starlinkInfoData} onClose={handleStarlinkClose} />
                    )}
                </AnimatePresence>
            </StarlinkInfo>
        </>        
    )
 
}
 export default Starlink