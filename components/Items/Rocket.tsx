import Table from "@/interface/Table";
import TableBody from "@/interface/Table/table-body";
import TableCell from "@/interface/Table/table-cell";
import TableHead from "@/interface/Table/table-head";
import TableRow from "@/interface/Table/table-row";
import Image from "next/image";
import { FC } from "react";
import StatusActiveRetired from "../Status/StatusActiveRetired";
import StatusBoolean from "../Status/StatusBoolean";


const Rocket: FC<SPACEX.ArKs.Rockets> = ({
    name,
    description,
    active,
    first_flight,
    height,
    diameter,
    mass,
    engines,
    landing_legs,
    wikipedia,
    flickr_images,
    success_rate_pct,
    type,
}) => {
    return (
        <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
        <div className="rounded-lg bg-black text-slate-200">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="
          table-header-background
          bg-grid-slate-700
          mask-image-dark absolute 
          inset-0
          "
            />
            <div className="relative overflow-auto rounded-xl">
              <div className="my-8 overflow-hidden shadow-sm">
           <Table type="default">
                <TableHead>
                    <TableRow>
                        <TableCell type="head">
                            Name
                        </TableCell>
                        <TableCell type="head">
                            Status
                        </TableCell>
                        <TableCell type="head">
                            Type 
                        </TableCell>
                        <TableCell type="head">
                            First Flight
                        </TableCell>
                        
                        <TableCell type="head">
                            Success %
                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell type="body">
                            {name}
                        </TableCell>
                        <TableCell type="body">
                            <StatusBoolean active={active}/>
                        </TableCell>
                        <TableCell type="body">
                            {type}
                        </TableCell>
                        <TableCell type="body">
                            {first_flight}
                        </TableCell>
                       
                        <TableCell type="body">
                            {success_rate_pct}%
                        </TableCell>
                    </TableRow>
                </TableBody>
           </Table>
            </div>
        </div>
        <div className="basis-full text-center contrast-125">
            <Image  
            src={`${flickr_images[0]}`} 
            width={1024} 
            height={683} 
            alt={name} 
            quality={100}
            />
            </div>
        </div>
      </div>
    </div>
    )
}

export default Rocket