declare namespace SPACEX {
  export namespace ArKs {
    interface Company {
      ceo: string
      coo: string
      cto: string
      cto_propulsion: string
      employees: number
      founded: number
      founder: string
      headquarters: {
        address: string
        city: string
        state: string
      }
      launch_sites: number
      links: {
        elon_twitter: string
        flickr: string
        twitter: string
        website: string
      }
      name: string
      summary: string
      test_sites: number
      valuation: number
      vehicles: number
    }

    interface Capsules {
      serial: string //
      id: string //
      type: string //
      status: string //
      reuse_count: number
      water_landings: number
      land_landings: number
      last_update: string
      launches: string[]
    }

    interface Cores {
      block: number
      reuse_count: number
      rtls_attempts: number
      rtls_landings: number
      asds_attempts: number
      asds_landings: number
      last_update: string
      launches: string[]
      serial: string
      status: string
      id: string
    }

    interface Crew {
      name: string
      agency: string
      image: string
      wikipedia: string
      launches: string[]
      status: string
      id: string
    }

    interface Dragons {
      heat_shield: {
        material: string
        size_meters: number
        temp_degrees: number
        dev_partner: string
      }
      launch_payload_mass: {
        kg: number
        lb: number
      }
      launch_payload_vol: {
        cubic_meters: number
        cubic_feet: number
      }
      return_payload_mass: {
        kg: number
        lb: number
      }
      return_payload_vol: {
        cubic_meters: number
        cubic_feet: number
      }
      pressurized_capsule: {
        payload_volume: {
          cubic_meters: number
          cubic_feet: number
        }
      }
      trunk: {
        trunk_volume: {
          cubic_meters: number
          cubic_feet: number
        }
        cargo: {
          solar_array: number
          unpressurized_cargo: boolean
        }
      }
      height_w_trunk: {
        meters: number
        feet: number
      }
      diameter: {
        meters: number
        feet: number
      }
      first_flight: string
      flickr_images: string[]
      name: string
      type: string
      active: boolean
      crew_capacity: number
      sidewall_angle_deg: number
      orbit_duration_yr: number
      dry_mass_kg: number
      dry_mass_lb: number
      thrusters: {
        type: string
        amount: number
        pods: number
        fuel_1: string
        fuel_2: string
        isp: number
        thrust: {
          kN: number
          lbf: number
        }
      }[]
      wikipedia: string
      description: string
      id: string
    }

    interface Landpads {
      images: {
        large: any
      }
      name: string
      full_name: string
      status: string
      type: string
      locality: string
      region: string
      latitude: number
      longitude: number
      landing_attempts: number
      landing_successes: number
      wikipedia: string //
      details: string //
      launches: string[] //
      id: string
    }

    interface Launches {
      farings: {
        reused: boolean
        recovery_attempt: boolean
        recovered: boolean
        ship: string
      }
      links: {
        patch: {
          large: string
          small: string
        }
        reddit: {
          campaign: string
          launch: string
          media: string
          recovery: string
        }
        flickr: {
          original: string[]
        }
        presskit: string
        webcast: string
        youtube_id: string
        article: string
        wikipedia: string
      }
      static_fire_date_utc: string
      static_fire_date_unix: number
      net: boolean
      window: number
      rocket: string
      success: boolean
      failures: {
        time: number
        altitude: number
        reason: string
      }[]
      details: string
      crew: string[]
      ships: string[]
      capsules: string[]
      payloads: string[]
      launchpad: string
      flight_number: number
      name: string
      date_utc: string
      date_unix: number
      date_local: string
      date_precision: string
      upcoming: boolean
      cores: {
        core: string
        flight: number
        gridfins: boolean
        legs: boolean
        reused: boolean
        landing_attempt: boolean
        landing_success: boolean
        landing_type: string
        landpad: string
      }[]
      auto_update: boolean
      tbd: boolean
      launch_library_id: string
      id: string
    }

    interface Launchpad {
      images: {
        large: string[]
      }
      name: string
      full_name: string
      locality: string
      region: string
      latitude: number
      longitude: number
      launch_attempts: number
      launch_successes: number
      rockets: string[]
      timezone: string
      details: string
      launches: string[]
      status: string
      id: string
      details: string
    }

    interface Payloads {
      dragon: {
        capsule: string
        mass_returned_kg: number
        mass_returned_lbs: number
        flight_time_sec: number
        manifest: string
        water_landing: boolean
        land_landing: boolean
      }
      name: string
      type: string
      reused: boolean
      launch: string
      customers: string[]
      norad_id: number[]
      nationalities: string[]
      manufacturers: string[]
      mass_kg: number
      mass_lbs: number
      orbit: string
      reference_system: string
      regime: string
      longitude: number
      semi_major_axis_km: number
      eccentricity: number
      periapsis_km: number
      apoapsis_km: number
      inclination_deg: number
      period_min: number
      lifespan_years: number
      epoch: string
      lifespan_years: number
      mean_motion: number
      raan: number
      arg_of_pericenter: number
      mean_anomaly: number
      id: string
    }

    interface Roadster {
      name: string
      launch_date_utc: string
      launch_date_unix: number
      launch_mass_kg: number
      launch_mass_lbs: number
      norad_id: number
      epoch_jd: number
      orbit_type: string
      apoapsis_au: number
      periapsis_au: number
      semi_major_axis_au: number
      eccentricity: number
      inclination: number
      longitude: number
      periapsis_arg: number
      period_days: number
      speed_kph: number
      speed_mph: number
      earth_distance_km: number
      earth_distance_mi: number
      mars_distance_km: number
      mars_distance_mi: number
      wikipedia: string
      flickr_images: string[]
      wikipedia: string
      video: string
      details: string
      id: string
    }

    interface Rockets {
      height: {
        meters: number
        feet: number
      }
      diameter: {
        meters: number
        feet: number
      }
      mass: {
        kg: number
        lb: number
      }
      first_stage: {
        thrust_sea_level: {
          kN: number
          lbf: number
        }
        thrust_vacuum: {
          kN: number
          lbf: number
        }
        reusable: boolean
        engines: number
        fuel_amount_tons: number
        burn_time_sec: number
      }
      second_stage: {
        thrust: {
          kN: number
          lbf: number
        }
        payloads: {
          composite_fairing: {
            height: {
              meters: number
              feet: number
            }
            diameter: {
              meters: number
              feet: number
            }
          }
          option_1: string
        }
        reusable: boolean
        engines: number
        fuel_amount_tons: number
        burn_time_sec: number
      }
      engines: {
        number: number
        type: string
        version: string
        layout: string
        engine_loss_max: number
        propellant_1: string
        propellant_2: string
        thrust_sea_level: {
          kN: number
          lbf: number
        }
        thrust_vacuum: {
          kN: number
          lbf: number
        }
        thrust_to_weight: number
      }
      landing_legs: {
        number: number
        material: string
      }
      flickr_images: string[]
      name: string
      type: string
      active: boolean
      stages: number
      boosters: number
      cost_per_launch: number
      success_rate_pct: number
      first_flight: string
      country: string
      company: string
      wikipedia: string
      description: string
      id: string
    }

    interface Ships {
      last_ais_update: string
      legacy_id: string
      model: string
      type: string
      roles: string[]
      imo: number
      mmsi: number
      abs: number
      class: number
      mass_kg: number
      mass_lbs: number
      year_built: number
      home_port: string
      status: string
      speed_kn: number
      course_deg: number
      latitude: number
      longitude: number
      link: string
      image: string
      name: string
      active: boolean
      launches: string[]
      id: string
    }
    interface GlobePoint {
      lat: SPACEX.ArKs.Starlink.latitude;
      lng: SPACEX.ArKs.Starlink.longitude;
      alt: number;
      radius: number;
      color: string;
      label: SPACEX.ArKs.Starlink.spaceTrack.TLE_LINE0;
      version: SPACEX.ArKs.Starlink.version;
      velocity_kms: SPACEX.ArKs.Starlink.velocity_kms;
      height_km: SPACEX.ArKs.Starlink.height_km;
      launch: Launch;
      name: SPACEX.ArKs.Starlink.spaceTrack.OBJECT_NAME;
      date: SPACEX.ArKs.Starlink.spaceTrack.LAUNCH_DATE;
      spaceTrack: SPACEX.ArKs.Starlink.spaceTrack;
    }
    interface Starlink {
      
      spaceTrack: {
        CCSDS_OMM_VERS: string
        COMMENT: string
        CREATION_DATE: string
        ORIGINATOR: string
        OBJECT_NAME: string
        OBJECT_ID: string
        CENTER_NAME: string
        REF_FRAME: string
        TIME_SYSTEM: string
        MEAN_ELEMENT_THEORY: string
        EPOCH: string
        MEAN_MOTION: string
        ECCENTRICITY: string
        INCLINATION: string
        RA_OF_ASC_NODE: string
        ARG_OF_PERICENTER: string
        MEAN_ANOMALY: string
        EPHEMERIS_TYPE: string
        CLASSIFICATION_TYPE: string
        NORAD_CAT_ID: string
        ELEMENT_SET_NO: string
        REV_AT_EPOCH: string
        BSTAR: string
        MEAN_MOTION_DOT: string
        MEAN_MOTION_DDOT: string
        SEMIMAJOR_AXIS: string
        PERIOD: string
        APOAPSIS: string
        PERIAPSIS: string
        OBJECT_TYPE: string
        RCS_SIZE: string
        COUNTRY_CODE: string
        LAUNCH_DATE: string
        SITE: string
        DECAY_DATE: string
        DECAYED: number
        FILE: number
        GP_ID: number
        TLE_LINE0: string
        TLE_LINE1: string
        TLE_LINE2: string
      }
      id: number
      version: string
      launch: number
      velocity_kms: number
      longitude: number
      latitude: number
      height_km: number
    }
  }
}

export as namespace SPACEX

declare module "@heroicons/*"

