import { Injectable } from '@nestjs/common';

import { backendPortalContracts } from '@nx-demo/backend/portal-contracts';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: backendPortalContracts() };
  }
}
