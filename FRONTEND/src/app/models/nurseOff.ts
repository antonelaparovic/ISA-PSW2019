import {Nurse} from './nurse';
import {OffType} from './offType';
import {OffStatus} from './offStatus';

export class NurseOff {
  id: number;
  type: OffType;
  status: OffStatus;
  nurse: Nurse;

  constructor(type: OffType, status: OffStatus, nurse: Nurse, id?: number) {
    this.type = type;
    this.status = status;
    this.nurse = nurse;
    this.id = id;

  }

}
