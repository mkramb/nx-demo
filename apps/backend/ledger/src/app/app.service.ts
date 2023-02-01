import { Injectable } from '@nestjs/common';

import { backendLedgerContracts } from '@nx-demo/backend/ledger-contracts';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: backendLedgerContracts() };
  }
}
