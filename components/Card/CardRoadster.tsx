import { FC } from "react"

const CardRoadster: FC<SPACEX.ArKs.Roadster> = ({
  name,
  launch_date_utc,
  launch_mass_kg,
  norad_id,
  orbit_type,
  details,
  flickr_images,
}) => {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black">
        <div className="grid grid-cols-6 gap-1">
          <div className="col-span-6 justify-center text-center">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-white">{name}</h1>
            </div>
          </div>
          <div className="col-span-6 justify-center text-center">
            <div className="p-1">
              <p className="text-sm text-white">{launch_date_utc}</p>
            </div>
          </div>
          <div className="col-span-2 justify-center text-center">
            <div className="p-1">
              <p className="text-sm text-gray-400">Launch Mass</p>
              <p className="text-sm text-white">{launch_mass_kg} kg</p>
            </div>
          </div>
          <div className="col-span-2 justify-center text-center">
            <div className="p-1">
              <p className="text-sm text-gray-400">Norad ID</p>
              <p className="text-sm text-white">{norad_id}</p>
            </div>
          </div>
          <div className="col-span-2 justify-center text-center">
            <div className="p-1">
              <p className="text-sm text-gray-400">Orbit Type</p>
              <p className="text-sm text-white">{orbit_type}</p>
            </div>
          </div>
          <div className="col-span-6 justify-center text-left">
            <div className="py-5 px-8">
              <p className="text-sm text-white">{details}</p>
            </div>
          </div>
          <div className="col-span-6 justify-center text-center">
            <div className="grid grid-cols-8 gap-1">
              {flickr_images.map((image, index) => (
                <div key={index} className=" col-span-8 md:col-span-4 ">
                  <img
                    key={index}
                    alt={name}
                    height="auto"
                    src={image}
                    width="100%"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardRoadster
