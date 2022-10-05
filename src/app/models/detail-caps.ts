export interface DetailCaps {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: Date;
    original_launch_unix: number;
    mission: {
        name: string;
        flight: number;
    };
    landings: number;
    type: string;
    details: string;
    reuse_count: number;
}



