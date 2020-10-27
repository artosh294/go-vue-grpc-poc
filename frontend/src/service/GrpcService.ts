export interface GrpcServiceOpt {
    hostname: string;
}

export class GrpcService {
    hostname: string
    constructor({hostname}: GrpcServiceOpt){
        this.hostname = hostname
    }

    
}
